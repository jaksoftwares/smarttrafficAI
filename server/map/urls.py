from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home_view, name='home'),  # Root URL path
    path('base', views.base_view, name='base'),  # Base URL path
    # Map views
    path('map/', views.map_view, name='map'),
    path('api/map-data/', views.get_map_data, name='get_map_data'),
    
    # Routing views
    path('reroute/', views.reroute_view, name='reroute'),
    path('api/routes-data/', views.get_routes_data, name='get_routes_data'),
]