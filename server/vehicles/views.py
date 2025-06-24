import os
import cv2
from threading import Lock
from django.http import JsonResponse, StreamingHttpResponse
from django.conf import settings
from ultralytics import YOLO

from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

# Shared dictionary for detection stats
latest_counts = {
    "cars": 0,
    "buses": 0,
    "trucks": 0,
    "motorcycles": 0,
    "bicycles": 0,
}
latest_counts_lock = Lock()

# Path to static video (you can replace this with live camera URL if needed)
VIDEO_PATH = os.path.join(settings.BASE_DIR, 'static', 'test_videos', 'traffic_video.mp4')


def gen_frames(video_path):
    model_path = os.path.join(settings.BASE_DIR, 'yolov8s.pt')
    model = YOLO(model_path)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError(f"Could not open video file at {video_path}")

    tracked_vehicles = set()
    channel_layer = get_channel_layer()

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        results = model.track(frame, persist=True)
        current_counts = {
            "cars": 0,
            "buses": 0,
            "trucks": 0,
            "motorcycles": 0,
            "bicycles": 0,
        }

        for box in results[0].boxes:
            class_id = int(box.cls)
            label = results[0].names[class_id]
            track_id = int(box.id) if box.id is not None else None

            if track_id is not None and track_id not in tracked_vehicles:
                tracked_vehicles.add(track_id)

                if label == "car":
                    current_counts["cars"] += 1
                elif label == "bus":
                    current_counts["buses"] += 1
                elif label == "truck":
                    current_counts["trucks"] += 1
                elif label == "motorcycle":
                    current_counts["motorcycles"] += 1
                elif label == "bicycle":
                    current_counts["bicycles"] += 1

        # Update the shared detection statistics
        with latest_counts_lock:
            for k in latest_counts:
                latest_counts[k] += current_counts[k]
            stats_copy = latest_counts.copy()

        # 🔴 Broadcast updated stats via WebSocket
        if channel_layer:
            async_to_sync(channel_layer.group_send)(
                "vehicle_stats",
                {
                    "type": "send_stats",
                    "data": stats_copy,
                }
            )

        # Overlay stats on the frame
        y_offset = 30
        for key, count in latest_counts.items():
            cv2.putText(frame, f"{key}: {count}", (frame.shape[1] - 200, y_offset),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
            y_offset += 30

        # Encode and yield the frame
        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            continue
        frame_bytes = buffer.tobytes()

        yield (
            b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n'
        )

    cap.release()


def video_feed(request):
    if not os.path.exists(VIDEO_PATH):
        return JsonResponse({"error": "Video file not found."}, status=404)

    return StreamingHttpResponse(
        gen_frames(VIDEO_PATH),
        content_type='multipart/x-mixed-replace; boundary=frame'
    )


def detection_stats(request):
    with latest_counts_lock:
        return JsonResponse(latest_counts)
