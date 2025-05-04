from django.db import models

class TrafficData(models.Model):
    datetime = models.DateTimeField()
    junction = models.IntegerField()
    vehicles = models.IntegerField()

    def __str__(self):
        return f"Junction {self.junction} at {self.datetime} — {self.vehicles} vehicles"



