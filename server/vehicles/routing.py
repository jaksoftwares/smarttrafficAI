from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/vehicle-stats/$", consumers.VehicleStatsConsumer.as_asgi()),
]
