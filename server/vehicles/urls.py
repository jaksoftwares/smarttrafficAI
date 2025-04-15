
from django.urls import path
from . import views

urlpatterns = [
    path('process_video/', views.static_video_view, name='process_video'),
    path('video_feed/', views.video_feed, name='video_feed'),
]
