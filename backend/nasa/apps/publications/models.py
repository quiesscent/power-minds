from django.db import models
from django.conf import settings

class Publication(models.Model):
    title = models.CharField(max_length=1024)
    doi = models.CharField(max_length=256, blank=True, null=True)
    abstract = models.TextField(blank=True, null=True)
    authors = models.TextField(blank=True, null=True) # JSON or CSV
    published_date = models.DateField(blank=True, null=True)
    source = models.CharField(max_length=256, blank=True, null=True)
    raw = models.JSONField(blank=True, null=True)


    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

def __str__(self):
    return self.title

class Summary(models.Model):
    publication = models.OneToOneField(Publication, on_delete=models.CASCADE, related_name='summary')
    summary_text = models.TextField()
    tags = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return f"Summary for {self.publication_id}"

class Embedding(models.Model):
    publication = models.ForeignKey(Publication, on_delete=models.CASCADE, related_name='embeddings')
    vector = models.BinaryField() # store serialized vector or use external vector DB
    meta = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Entity(models.Model):
    publication = models.ForeignKey(Publication, on_delete=models.CASCADE, related_name='entities')
    name = models.CharField(max_length=512)
    type = models.CharField(max_length=128) # e.g. Plant, Microbe, Trait
    meta = models.JSONField(blank=True, null=True)
    score = models.FloatField(default=0.0)

def __str__(self):
    return f"{self.name} ({self.type})"