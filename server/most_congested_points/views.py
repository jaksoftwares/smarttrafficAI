from django.shortcuts import render
import csv
import os
import random
from django.http import JsonResponse
from django.conf import settings
from datetime import datetime, timedelta

def load_traffic_data(request):
    # Get datetime parameter from request (format: YYYY-MM-DD HH:00:00)
    selected_datetime = request.GET.get('datetime')
    
    file_path = os.path.join(settings.BASE_DIR, 'most_congested_points', 'data', 'traffic.csv')
    
    # If no datetime provided, pick a random valid datetime from the file
    if not selected_datetime:
        valid_datetimes = []
        with open(file_path, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                dt_str = row['DateTime']
                if dt_str not in valid_datetimes:
                    valid_datetimes.append(dt_str)
        
        if valid_datetimes:
            selected_datetime = random.choice(valid_datetimes)
        else:
            return JsonResponse({'error': 'No data available'})
    
    # Parse the datetime
    try:
        dt = datetime.strptime(selected_datetime, '%Y-%m-%d %H:%M:%S')
    except ValueError:
        return JsonResponse({'error': 'Invalid datetime format. Use YYYY-MM-DD HH:00:00'})
    
    # Dictionary to store congestion for all junctions at the given hour
    junctions_data = {}
    all_datetimes = set()
    
    # Read all data from CSV to find junctions and next datetime
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            row_dt_str = row['DateTime']
            row_dt = datetime.strptime(row_dt_str, '%Y-%m-%d %H:%M:%S')
            all_datetimes.add(row_dt_str)
            
            # If this row matches our selected datetime
            if row_dt_str == selected_datetime:
                junction_id = int(row['Junction'])
                junctions_data[junction_id] = {
                    'junction': junction_id,
                    'vehicles': int(row['Vehicles']),
                    'datetime': row_dt_str
                }
    
    # Sort all datetimes to find the next one
    all_datetimes = sorted(all_datetimes)
    
    # Find the next datetime in the sequence
    next_datetime = None
    if selected_datetime in all_datetimes:
        current_index = all_datetimes.index(selected_datetime)
        if current_index < len(all_datetimes) - 1:
            next_datetime = all_datetimes[current_index + 1]
    
    # Format the response
    result = {
        'current_datetime': selected_datetime,
        'junctions': list(junctions_data.values()),
        'next_datetime': next_datetime
    }
    
    return JsonResponse(result)