from rest_framework import serializers
from .models import Publication, Summary, Entity

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['id', 'title', 'doi', 'abstract', 'authors', 'published_date', 'source', 'raw']

class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = ['id', 'publication', 'summary_text', 'tags', 'created_at']

class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = ['id', 'publication', 'name', 'type', 'meta', 'score']