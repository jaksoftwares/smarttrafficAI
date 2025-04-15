import os
import requests
from dotenv import load_dotenv
from django.http import JsonResponse
from django.shortcuts import render

# Load environment variables from .env file
load_dotenv()

def get_weather(city):
    api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    if not api_key:
        raise ValueError("API key not found in .env file.")

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

    try:
        response = requests.get(url)
        response.raise_for_status()

        weather_data = response.json()

        weather_info = {
            "city": weather_data["name"],
            "temperature": weather_data["main"]["temp"],
            "humidity": weather_data["main"]["humidity"],
            "weather_condition": weather_data["weather"][0]["main"],
            "description": weather_data["weather"][0]["description"],
        }
        return weather_info

    except requests.exceptions.RequestException as e:
        print(f"Error fetching weather data: {e}")
        return None

def weather_view(request, city):
    weather = get_weather(city)

    if weather:
        return JsonResponse(weather)
    else:
        return JsonResponse({"error": "Failed to fetch weather data."}, status=400)
