# apps/analytics/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("floods/<int:county_id>/", views.county_flood_risk),
]
