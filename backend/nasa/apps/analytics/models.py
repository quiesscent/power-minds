# apps/analytics/models.py
from django.db import models
from apps.agri_data.models import County

class FloodRiskCache(models.Model):
    county = models.ForeignKey(County, on_delete=models.CASCADE)
    year = models.IntegerField()
    monthly_risk = models.JSONField()  # list of 12 floats
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("county", "year")
