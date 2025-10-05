# apps/agri_data/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("counties/", views.list_counties, name="agri-counties"),
    path("counties/<int:county_id>/", views.get_county, name="agri-county-detail"),
    path("counties/<int:county_id>/weather/", views.county_weather, name="agri-county-weather"),
    path("counties/<int:county_id>/soil/", views.county_soil, name="agri-county-soil"),
]
