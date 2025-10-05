# apps/knowledge_graph/serializers.py
from rest_framework import serializers
from .models import Crop, CountyNode, CropSeasonCalendar

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = "__all__"

class CountyNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CountyNode
        fields = "__all__"

class CropSeasonCalendarSerializer(serializers.ModelSerializer):
    crop = CropSerializer()
    county = CountyNodeSerializer()
    class Meta:
        model = CropSeasonCalendar
        fields = "__all__"
