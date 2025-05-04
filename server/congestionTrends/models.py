from django.db import models

class TrafficEntry(models.Model):
    hour = models.CharField(max_length=100, null=False, blank=False)  # e.g., "07:00", "08:00"
    car_count = models.IntegerField()

    def __str__(self):
        return f'{self.hour} - {self.car_count} cars'


