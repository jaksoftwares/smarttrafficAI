import json
import os
import logging
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

# Path to the traffic data JSON file
json_path = settings.BASE_DIR / 'congestionTrends' / 'traffic_data.json'

# Function to load data from the JSON file
def load_data():
    with open(json_path, 'r') as f:
        return json.load(f)

# Function to save data to the JSON file
def save_data(data):
    with open(json_path, 'w') as f:
        json.dump(data, f, indent=2)

logger = logging.getLogger(__name__)

def index(request):
    # Load data and get all available days
    data = load_data()
    days = sorted(data.keys())  # Sort days alphabetically
    default_day = days[0] if days else None  # Default to the first available day
    return render(request, 'congestionTrends/index.html', {'days': days, 'default_day': default_day})

@csrf_exempt
def get_day_data(request, day):
    try:
        logger.info(f"Fetching data for day: {day}")
        data = load_data()
        if day not in data:
            logger.warning(f"No data found for day: {day}")
            return JsonResponse({"error": f"No data available for {day}"}, status=404)

        hours = [f"{h:02d}" for h in range(24)]
        car_counts = [data.get(day, {}).get(hour, 0) for hour in hours]
        logger.info(f"Data for {day}: {car_counts}")  # Log the data being returned
        return JsonResponse({"hours": hours, "counts": car_counts})
    except Exception as e:
        logger.error(f"Error in get_day_data: {e}")
        return JsonResponse({"error": "Failed to fetch data for the specified day"}, status=500)

@csrf_exempt
def update_data(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        day = body['day']
        hour = body['hour']
        count = int(body['count'])

        data = load_data()

        # If the day does not exist in the data, initialize it
        if day not in data:
            data[day] = {}

        # Update the count for the specific hour
        data[day][hour] = count

        # Save updated data back to the JSON file
        save_data(data)

        return JsonResponse({"status": "success"})

    return JsonResponse({"status": "fail"})

@csrf_exempt
def delete_data(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        day = body['day']
        hour = body['hour']

        data = load_data()

        # Check if the day and hour exist, then delete
        if day in data and hour in data[day]:
            del data[day][hour]

            # If no data is left for the day, delete the day entry
            if not data[day]:
                del data[day]

            # Save the updated data back to the JSON file
            save_data(data)

            return JsonResponse({"status": "deleted"})

    return JsonResponse({"status": "fail"})

@csrf_exempt
def hourly_trends(request):
    if request.method == 'GET':
        # Load data from the JSON file
        data = load_data()

        # Aggregate hourly traffic counts across all days
        hourly_counts = [0] * 24  # Initialize array for 24 hours
        for day in data:
            for hour, count in data[day].items():
                hourly_counts[int(hour)] += count

        # Return the hourly trends as JSON
        return JsonResponse({"hours": list(range(24)), "counts": hourly_counts})

    return JsonResponse({"status": "fail"})

@csrf_exempt
def average_hourly_data(request):
    try:
        logger.info("Calculating average hourly data")
        data = load_data()

        # Initialize an array to store total counts and a counter for each hour
        total_counts = [0] * 24
        hour_counts = [0] * 24

        # Aggregate data across all days
        for day, hours in data.items():
            for hour, count in hours.items():
                hour_index = int(hour)
                total_counts[hour_index] += count
                hour_counts[hour_index] += 1

        # Calculate the average for each hour
        averages = [
            total_counts[i] / hour_counts[i] if hour_counts[i] > 0 else 0
            for i in range(24)
        ]

        logger.info(f"Average hourly data: {averages}")
        return JsonResponse({"hours": [f"{h:02d}" for h in range(24)], "averages": averages})
    except Exception as e:
        logger.error(f"Error calculating average hourly data: {e}")
        return JsonResponse({"error": "Failed to calculate average hourly data"}, status=500)


@csrf_exempt
def metadata(request):
    try:
        data = load_data()
        days = sorted(data.keys())
        default_day = days[-1] if days else None
        checkpoint_name = "Main Gate"
        checkpoint_capacity = 40

        return JsonResponse({
            "days": days,
            "default_day": default_day,
            "checkpoint_name": checkpoint_name,
            "checkpoint_capacity": checkpoint_capacity,
        })
    except Exception as e:
        logger.error(f"Error in metadata endpoint: {e}")
        return JsonResponse({"error": "Failed to load metadata"}, status=500)

