from django.urls import path
from . import views

urlpatterns = [
    path('', views.live_feed_page, name='livefeed_page'),
    path('video_feed/', views.live_feed_view, name='video_feed'),
]
