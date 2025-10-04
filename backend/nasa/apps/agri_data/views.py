import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import County, CropRecommendation

NASA_URL = "https://power.larc.nasa.gov/api/temporal/monthly/point"
METEOMATICS_URL = "https://api.meteomatics.com"

@api_view(["GET"])
def get_counties(request):
    """List all counties with lat/lon"""
    counties = County.objects.all().values("id", "name", "latitude", "longitude")
    return Response(list(counties))


@api_view(["GET"])
def get_county_analysis(request, county_id):
    """Get live weather + crop recommendations for a specific county"""
    try:
        county = County.objects.get(id=county_id)
    except County.DoesNotExist:
        return Response({"error": "County not found"}, status=404)

    # NASA POWER — Monthly climate data (temperature, rainfall)
    nasa_params = {
        "parameters": "T2M,PRECTOTCORR",
        "community": "AG",
        "longitude": county.longitude,
        "latitude": county.latitude,
        "start": 2024,
        "end": 2024,
        "format": "JSON",
    }
    nasa_response = requests.get(NASA_URL, params=nasa_params).json()

    # Meteomatics — Soil moisture & forecast
    # Example (replace credentials with your NASA Space Apps free login)
    # URL sample: https://api.meteomatics.com/2025-01-01T00:00:00Z--2025-12-31T00:00:00Z:PT1H/soil_moisture_index_0to10cm:idx/{lat},{lon}/json
    meteomatics_data = {
        "soil_moisture": "Available with Meteomatics API credentials"
    }

    crops = CropRecommendation.objects.filter(county=county).values()

    return Response({
        "county": county.name,
        "coordinates": {"lat": county.latitude, "lon": county.longitude},
        "nasa_weather": nasa_response.get("properties", {}),
        "meteomatics": meteomatics_data,
        "recommended_crops": list(crops),
    })
