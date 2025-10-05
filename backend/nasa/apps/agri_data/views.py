# apps/agri_data/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import County
from .serializers import CountySerializer
from .services.nasa_power import fetch_monthly_climatology
from .services.soilgrids import fetch_soil_properties

@api_view(["GET"])
def list_counties(request):
    """Return all counties (id, name, lat, lon)"""
    qs = County.objects.all().order_by("name")
    return Response(CountySerializer(qs, many=True).data)

@api_view(["GET"])
def get_county(request, county_id):
    try:
        c = County.objects.get(pk=county_id)
    except County.DoesNotExist:
        return Response({"detail":"Not found"}, status=status.HTTP_404_NOT_FOUND)
    return Response(CountySerializer(c).data)

@api_view(["GET"])
def county_weather(request, county_id):
    """
    Returns NASA monthly climatology properties for county centroid.
    Query params: none (uses centroid from DB) or ?lat=&lon= to override.
    """
    lat = request.query_params.get("lat", None)
    lon = request.query_params.get("lon", None)
    if lat is None or lon is None:
        try:
            c = County.objects.get(pk=county_id)
            lat = c.latitude; lon = c.longitude
        except County.DoesNotExist:
            return Response({"detail":"County not found or no centroid"}, status=status.HTTP_404_NOT_FOUND)
    try:
        props = fetch_monthly_climatology(lat, lon)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_502_BAD_GATEWAY)
    return Response({"county": county_id, "latitude": lat, "longitude": lon, "properties": props})

@api_view(["GET"])
def county_soil(request, county_id):
    """
    Returns SoilGrids topsoil properties for the county centroid.
    """
    try:
        c = County.objects.get(pk=county_id)
    except County.DoesNotExist:
        return Response({"detail":"County not found"}, status=status.HTTP_404_NOT_FOUND)
    if c.latitude is None or c.longitude is None:
        return Response({"detail":"County missing centroid"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        soil = fetch_soil_properties(c.latitude, c.longitude)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_502_BAD_GATEWAY)
    return Response({"county": c.name, "soil": soil})
