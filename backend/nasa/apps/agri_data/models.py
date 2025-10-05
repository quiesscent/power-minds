# apps/agri_data/models.py
from django.db import models

class County(models.Model):
    """
    Minimal county model. We store centroid lat/lon so external APIs can be queried.
    """
    name = models.CharField(max_length=120, unique=True)
    code = models.CharField(max_length=20, unique=True, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    boundary = models.JSONField(null=True, blank=True)  # optional GeoJSON

    def __str__(self):
        return self.name
