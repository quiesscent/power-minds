from django.db import models

# Create your models here.

class County(models.Model):
    name = models.CharField(max_length=100, unique=True)
    code = models.IntegerField(unique=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return self.name


class CropRecommendation(models.Model):
    county = models.ForeignKey(County, on_delete=models.CASCADE, related_name="crop_recommendations")
    crop_name = models.CharField(max_length=100)
    soil_type = models.CharField(max_length=100, blank=True)
    temperature_range = models.CharField(max_length=50, blank=True)
    rainfall_range = models.CharField(max_length=50, blank=True)
    planting_months = models.JSONField(default=list)  # e.g. ["March", "April", "October"]
    harvesting_months = models.JSONField(default=list)

    def __str__(self):
        return f"{self.crop_name} - {self.county.name}"
