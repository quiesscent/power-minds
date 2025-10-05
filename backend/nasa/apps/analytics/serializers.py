# apps/analytics/serializers.py
from rest_framework import serializers
from .models import FloodRiskCache

class FloodRiskCacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = FloodRiskCache
        fields = "__all__"
