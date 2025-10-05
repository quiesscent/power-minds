# apps/knowledge_graph/models.py
from django.db import models
from django.conf import settings

class Crop(models.Model):
    """Crop nodes; you can populate these later from FAO/GAEZ external results."""
    name = models.CharField(max_length=120, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class CountyNode(models.Model):
    """Local copy of county for KG; optional if you prefer using agri_data.County"""
    name = models.CharField(max_length=120, unique=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.name

class CropSeasonCalendar(models.Model):
    crop = models.ForeignKey(Crop, on_delete=models.CASCADE)
    county = models.ForeignKey(CountyNode, on_delete=models.CASCADE)
    year = models.IntegerField()
    monthly_activities = models.JSONField(default=dict)  # {"Jan": "...", ...}

    class Meta:
        unique_together = ("crop", "county", "year")

    def __str__(self):
        return f"{self.crop.name} @ {self.county.name} ({self.year})"
