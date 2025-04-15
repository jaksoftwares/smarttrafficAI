from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:city>/', views.weather_view, name='weather'),
]
