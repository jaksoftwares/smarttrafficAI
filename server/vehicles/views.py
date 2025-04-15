import os
from django.shortcuts import render
from django.http import JsonResponse, StreamingHttpResponse
from ultralytics import YOLO
import cv2
from django.conf import settings

# Path for the static video file
VIDEO_PATH = os.path.join(settings.BASE_DIR, 'static', 'test_videos', 'traffic_video.mp4')

def process_video(video_path):
    # Load YOLOv8 model
    model = YOLO(os.path.join(settings.BASE_DIR, 'yolov8s.pt'))
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError(f"Could not open video file at {video_path}")

    vehicle_counts = {
        "cars": 0,
        "buses": 0,
        "trucks": 0,
        "motorcycles": 0,
        "bicycles": 0,
    }

    tracked_vehicles = set()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        results = model.track(frame, persist=True)
        current_counts = {key: 0 for key in vehicle_counts}

        for box in results[0].boxes:
            class_id = int(box.cls)
            label = results[0].names[class_id]
            track_id = int(box.id) if box.id is not None else None

            if track_id is not None and track_id not in tracked_vehicles:
                tracked_vehicles.add(track_id)
                if label == "car":
                    vehicle_counts["cars"] += 1
                elif label == "bus":
                    vehicle_counts["buses"] += 1
                elif label == "truck":
                    vehicle_counts["trucks"] += 1
                elif label == "motorcycle":
                    vehicle_counts["motorcycles"] += 1
                elif label == "bicycle":
                    vehicle_counts["bicycles"] += 1

        y_offset = 30
        for key, count in vehicle_counts.items():
            cv2.putText(frame, f"{key}: {count}", (frame.shape[1] - 200, y_offset), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
            y_offset += 30

        cv2.imshow("Traffic Object Detection", frame)

        if cv2.getWindowProperty("Traffic Object Detection", cv2.WND_PROP_VISIBLE) < 1:
            break

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

    return vehicle_counts

def static_video_view(request):
    # Use the static video file path
    if not os.path.exists(VIDEO_PATH):
        return JsonResponse({"error": "Video file not found."}, status=404)

    vehicle_counts = process_video(VIDEO_PATH)
    return JsonResponse(vehicle_counts)


def gen_frames(video_path):
    # Load YOLOv8 model
    model = YOLO(os.path.join(settings.BASE_DIR, 'yolov8s.pt'))

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        raise ValueError(f"Could not open video file at {video_path}")

    vehicle_counts = {
        "cars": 0,
        "buses": 0,
        "trucks": 0,
        "motorcycles": 0,
        "bicycles": 0,
    }

    tracked_vehicles = set()

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        results = model.track(frame, persist=True)

        for box in results[0].boxes:
            class_id = int(box.cls)
            label = results[0].names[class_id]
            track_id = int(box.id) if box.id is not None else None

            if track_id is not None and track_id not in tracked_vehicles:
                tracked_vehicles.add(track_id)
                if label == "car":
                    vehicle_counts["cars"] += 1
                elif label == "bus":
                    vehicle_counts["buses"] += 1
                elif label == "truck":
                    vehicle_counts["trucks"] += 1
                elif label == "motorcycle":
                    vehicle_counts["motorcycles"] += 1
                elif label == "bicycle":
                    vehicle_counts["bicycles"] += 1

        y_offset = 30
        for key, count in vehicle_counts.items():
            cv2.putText(frame, f"{key}: {count}", (frame.shape[1] - 200, y_offset),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
            y_offset += 30

        # Encode frame as JPEG
        ret, buffer = cv2.imencode('.jpg', frame)
        if not ret:
            continue
        frame_bytes = buffer.tobytes()

        # Yield frame in byte format
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    cap.release()

def video_feed(request):
    if not os.path.exists(VIDEO_PATH):
        return JsonResponse({"error": "Video file not found."}, status=404)

    return StreamingHttpResponse(gen_frames(VIDEO_PATH),
                                 content_type='multipart/x-mixed-replace; boundary=frame')