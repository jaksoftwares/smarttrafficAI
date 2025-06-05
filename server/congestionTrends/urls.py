from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get_day_data/<str:day>/', views.get_day_data, name='get_day_data'),
    path('update_data/', views.update_data, name='update_data'),
    path('delete_data/', views.delete_data, name='delete_data'),
    path('hourly_trends/', views.hourly_trends, name='hourly_trends'),
    path('average_hourly_data/', views.average_hourly_data, name='average_hourly_data'),  # New endpoint
]