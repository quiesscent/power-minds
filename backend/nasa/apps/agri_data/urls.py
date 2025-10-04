from django.urls import path
from . import views

urlpatterns = [
    path("counties/", views.get_counties, name="get_counties"),
    path("counties/<int:county_id>/", views.get_county_analysis, name="get_county_analysis"),
]
