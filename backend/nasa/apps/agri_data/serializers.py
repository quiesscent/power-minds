# apps/agri_data/serializers.py
from rest_framework import serializers
from .models import County

class CountySerializer(serializers.ModelSerializer):
    class Meta:
        model = County
        fields = ("id", "name", "code", "latitude", "longitude", "boundary")
