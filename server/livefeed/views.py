import cv2
from django.http import StreamingHttpResponse, HttpResponse
from django.views.decorators import gzip
import threading

IP_STREAM_URL = "http://10.2.14.159/"  

@gzip.gzip_page
def live_feed_view(request):
    try:
        return StreamingHttpResponse(gen(VideoCamera()),
            content_type="multipart/x-mixed-replace; boundary=frame")
    except Exception as e:
        print("Stream error:", e)
        return HttpResponse("Camera stream not available.", status=500)

def live_feed_page(request):
    return HttpResponse(open("livefeed/templates/livefeed.html").read())


class VideoCamera:
    def __init__(self):
        self.video = cv2.VideoCapture(IP_STREAM_URL)
        if not self.video.isOpened():
            raise RuntimeError(f"Failed to open IP camera at {IP_STREAM_URL}")
        (self.grabbed, self.frame) = self.video.read()
        self.thread = threading.Thread(target=self.update)
        self.thread.daemon = True
        self.thread.start()

    def __del__(self):
        if self.video.isOpened():
            self.video.release()

    def get_frame(self):
        image = self.frame
        _, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()

    def update(self):
        while True:
            if self.video.isOpened():
                (self.grabbed, self.frame) = self.video.read()


def gen(camera):
    while True:
        frame = camera.get_frame()
        if frame:
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
