from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
import requests
import json
import logging
import time
import polyline

logger = logging.getLogger(__name__)

# Map functionality (formerly in map.py)
def get_location_coordinates(location_name):
    """
    Get coordinates for a location using OpenStreetMap's Nominatim API
    """
    try:
        # Nominatim usage policy requires a meaningful User-Agent
        # and limiting requests (1 per second is recommended)
        nominatim_url = "https://nominatim.openstreetmap.org/search"
        headers = {
            'User-Agent': 'YourAppName/1.0',  # Replace with your actual app name
        }
        params = {
            'q': location_name,
            'format': 'json',
            'limit': 1
        }
        
        response = requests.get(nominatim_url, headers=headers, params=params)
        data = response.json()
        
        if data and len(data) > 0:
            result = data[0]
            return {
                'lat': float(result['lat']),
                'lng': float(result['lon']),
                'formatted_address': result.get('display_name', location_name)
            }
        else:
            logger.error(f"Nominatim API returned no results for: {location_name}")
            return None
    except Exception as e:
        logger.error(f"Error getting coordinates: {str(e)}")
        return None

def map_view(request):
    """
    Render the map page
    """
    context = {
        'location': None
    }
    
    # Check if location is provided in GET parameters
    if 'location' in request.GET:
        location_name = request.GET.get('location')
        location_data = get_location_coordinates(location_name)
        
        if location_data:
            context['location'] = location_data
    
    return render(request, 'map/map_template.html', context)

def get_map_data(request):
    """
    API endpoint to get map data for a location
    """
    location_name = request.GET.get('location', '')
    
    if not location_name:
        return JsonResponse({'error': 'Location is required'}, status=400)
    
    location_data = get_location_coordinates(location_name)
    
    # Adding a small delay to respect Nominatim's usage policy
    time.sleep(1)
    
    if location_data:
        return JsonResponse(location_data)
    else:
        return JsonResponse({'error': 'Could not find location'}, status=404)

# Routing functionality (formerly in rerouting.py)
def get_alternative_routes(origin, destination, travel_mode="driving", alternatives=True, avoid=None):
    """
    Get multiple route options between two locations using OSRM (OpenStreetMap Routing Machine)
    
    Parameters:
    - origin: Starting location (address or lat,lng)
    - destination: Ending location (address or lat,lng)
    - travel_mode: Mode of travel ("driving", "walking", "cycling")
    - alternatives: Whether to return alternative routes
    - avoid: Features to avoid (not directly supported by OSRM API)
    
    Returns:
    - Dictionary containing routes information
    """
    try:
        # First, convert addresses to coordinates if they're not already coordinates
        origin_coords = origin
        destination_coords = destination
        
        # Check if origin is not in the format "lat,lng"
        if not all(c in origin for c in [',', '.']) or origin.count(',') != 1:
            origin_location = get_location_coordinates(origin)
            if origin_location:
                origin_coords = f"{origin_location['lng']},{origin_location['lat']}"
                origin_address = origin_location['formatted_address']
            else:
                return {"status": "ERROR", "error_message": "Could not geocode origin"}
        else:
            # If it's already coordinates, we need to swap lat/lng for OSRM (which uses lng,lat)
            parts = origin.split(',')
            origin_coords = f"{parts[1].strip()},{parts[0].strip()}"
            origin_address = origin
        
        # Check if destination is not in the format "lat,lng"
        if not all(c in destination for c in [',', '.']) or destination.count(',') != 1:
            destination_location = get_location_coordinates(destination)
            if destination_location:
                destination_coords = f"{destination_location['lng']},{destination_location['lat']}"
                destination_address = destination_location['formatted_address']
            else:
                return {"status": "ERROR", "error_message": "Could not geocode destination"}
        else:
            # If it's already coordinates, we need to swap lat/lng for OSRM (which uses lng,lat)
            parts = destination.split(',')
            destination_coords = f"{parts[1].strip()},{parts[0].strip()}"
            destination_address = destination
        
        # Map travel modes to OSRM profiles
        osrm_profiles = {
            "driving": "car",
            "walking": "foot",
            "bicycling": "bike",
            "cycling": "bike"
        }
        
        profile = osrm_profiles.get(travel_mode.lower(), "car")
        
        # Build URL with parameters for OSRM
        osrm_url = f"https://router.project-osrm.org/route/v1/{profile}/{origin_coords};{destination_coords}"
        params = {
            "overview": "full",
            "geometries": "polyline",
            "steps": "true",
            "annotations": "true"
        }
        
        if alternatives:
            params["alternatives"] = "true"
        
        response = requests.get(osrm_url, params=params)
        data = response.json()
        
        if data["code"] == "Ok":
            routes_data = []
            
            for i, route in enumerate(data["routes"]):
                # Calculate total distance and duration
                distance_meters = route["distance"]
                duration_seconds = route["duration"]
                
                # Convert to human-readable format
                distance_text = f"{distance_meters/1000:.1f} km"
                
                # Convert seconds to hours and minutes
                hours, remainder = divmod(duration_seconds, 3600)
                minutes, seconds = divmod(remainder, 60)
                if hours > 0:
                    duration_text = f"{int(hours)} h {int(minutes)} min"
                else:
                    duration_text = f"{int(minutes)} min"
                
                route_info = {
                    "route_id": i,
                    "summary": route.get("summary", f"Route {i+1}"),
                    "distance": distance_text,
                    "duration": duration_text,
                    "polyline": route["geometry"],  # OSRM returns the full polyline
                    "steps": []
                }
                
                # Extract steps for turn-by-turn directions
                for leg in route["legs"]:
                    for step in leg["steps"]:
                        instruction = step["maneuver"].get("instruction", step["name"])
                        if not instruction:
                            instruction = step["maneuver"].get("type", "") + " " + step["maneuver"].get("modifier", "")
                        
                        step_distance = f"{step['distance']/1000:.1f} km" if step['distance'] >= 1000 else f"{step['distance']:.0f} m"
                        
                        # Convert seconds to minutes for step duration
                        step_minutes = int(step['duration'] / 60)
                        step_duration = f"{step_minutes} min" if step_minutes > 0 else "< 1 min"
                        
                        route_info["steps"].append({
                            "instruction": instruction,
                            "distance": step_distance,
                            "duration": step_duration,
                        })
                
                routes_data.append(route_info)
            
            return {
                "status": "OK",
                "origin_address": origin_address,
                "destination_address": destination_address,
                "routes": routes_data
            }
        else:
            logger.error(f"OSRM API error: {data['code']}")
            return {"status": "ERROR", "error_message": data.get("message", "Unknown error")}
            
    except Exception as e:
        logger.error(f"Error getting routes: {str(e)}")
        return {"status": "ERROR", "error_message": str(e)}

def reroute_view(request):
    """
    Render the page for alternative routes
    """
    context = {
        'routes_data': None
    }
    
    # Check if origin and destination are provided in GET parameters
    if 'origin' in request.GET and 'destination' in request.GET:
        origin = request.GET.get('origin')
        destination = request.GET.get('destination')
        travel_mode = request.GET.get('mode', 'driving')
        avoid = request.GET.get('avoid', None)
        
        routes_data = get_alternative_routes(
            origin, 
            destination, 
            travel_mode=travel_mode,
            alternatives=True,
            avoid=avoid
        )
        
        if routes_data["status"] == "OK":
            context['routes_data'] = routes_data
            context['selected_mode'] = travel_mode
            context['selected_avoid'] = avoid
    
    return render(request, 'map/reroute_template.html', context)

def get_routes_data(request):
    """
    API endpoint to get alternative routes between two locations
    """
    origin = request.GET.get('origin', '')
    destination = request.GET.get('destination', '')
    travel_mode = request.GET.get('mode', 'driving')
    avoid = request.GET.get('avoid', None)
    
    if not origin or not destination:
        return JsonResponse({'error': 'Origin and destination are required'}, status=400)
    
    routes_data = get_alternative_routes(
        origin, 
        destination, 
        travel_mode=travel_mode,
        alternatives=True,
        avoid=avoid
    )
    
    return JsonResponse(routes_data)




def home_view(request):
    # You can redirect to the map page or create a custom homepage
    return render(request, 'map/home.html')  # Create a home.html template

def base_view(request):
    return render(request, 'map/base.html')
    