from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('weather/', include('weather.urls')),
    path('vehicles/', include('vehicles.urls')),
    path('map/', include('map.urls')),
    path('most_congested_points/', include('most_congested_points.urls')),
    path('congestionTrends/', include('congestionTrends.urls')), 
    path('livefeed/', include('livefeed.urls')),
    path('junction_simulation/', include('junction_simulation.urls')),

]
