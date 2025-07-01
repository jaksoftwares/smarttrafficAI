from django.db import models

class TrafficSignal(models.Model):
    signal_id = models.IntegerField(unique=True)
    red_time = models.IntegerField(default=150)
    yellow_time = models.IntegerField(default=5)
    green_time = models.IntegerField(default=20)
    minimum_time = models.IntegerField(default=10)
    maximum_time = models.IntegerField(default=60)
    current_state = models.CharField(max_length=10, default='red')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Signal {self.signal_id}"

class Vehicle(models.Model):
    VEHICLE_TYPES = [
        ('car', 'Car'),
        ('bus', 'Bus'),
        ('truck', 'Truck'),
        ('rickshaw', 'Rickshaw'),
        ('bike', 'Bike'),
    ]
    
    DIRECTIONS = [
        ('right', 'Right'),
        ('down', 'Down'),
        ('left', 'Left'),
        ('up', 'Up'),
    ]
    
    vehicle_type = models.CharField(max_length=10, choices=VEHICLE_TYPES)
    direction = models.CharField(max_length=10, choices=DIRECTIONS)
    lane = models.IntegerField()
    x_position = models.FloatField()
    y_position = models.FloatField()
    crossed = models.BooleanField(default=False)
    will_turn = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.vehicle_type} - {self.direction}"

class SimulationStats(models.Model):
    total_vehicles = models.IntegerField(default=0)
    vehicles_crossed = models.IntegerField(default=0)
    simulation_time = models.IntegerField(default=0)
    throughput = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)