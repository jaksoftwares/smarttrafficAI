from django.db import models

class UserStat(models.Model):
    title = models.CharField(max_length=100)
    value = models.CharField(max_length=50)
    icon = models.CharField(max_length=50)  # Store icon name
    bgColor = models.CharField(max_length=50)

    def __str__(self):
        return self.title

