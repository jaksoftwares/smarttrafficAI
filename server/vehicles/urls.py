from django.urls import path
from . import views

urlpatterns = [
    path('video_feed/', views.video_feed, name='video_feed'),
    path('detection_stats/', views.detection_stats, name='detection_stats'),
]
