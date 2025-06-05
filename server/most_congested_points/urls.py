from django.urls import path
from . import views

urlpatterns = [
    path('', views.load_traffic_data, name='traffic-data'),
]
