# apps/knowledge_graph/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("calendar/<str:county_name>/<str:crop_name>/", views.generate_calendar_for_county_crop),
    path("calendar/<str:county_name>/<str:crop_name>/<int:year>/", views.generate_calendar_for_county_crop),
]
