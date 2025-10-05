# apps/knowledge_graph/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.agri_data.models import County as AgriCounty
from .models import Crop, CountyNode, CropSeasonCalendar
from .serializers import CropSeasonCalendarSerializer
from apps.agri_data.services.nasa_power import fetch_monthly_climatology
from .utils import build_monthly_calendar_from_climate
from django.utils import timezone

@api_view(["GET"])
def generate_calendar_for_county_crop(request, county_name, crop_name, year=None):
    """
    Example: GET /api/kg/calendar/Kisumu/maize/
    If county exists in agri_data store, use its centroid; otherwise try local CountyNode.
    """
    year = int(year) if year else timezone.now().year

    # find centroid in agri_data
    try:
        agri_c = AgriCounty.objects.get(name__iexact=county_name)
        lat, lon = agri_c.latitude, agri_c.longitude
    except AgriCounty.DoesNotExist:
        # fallback to Node in this app
        try:
            node = CountyNode.objects.get(name__iexact=county_name)
            lat, lon = node.latitude, node.longitude
        except CountyNode.DoesNotExist:
            return Response({"detail":"County not found in agri_data or knowledge_graph"}, status=404)

    # fetch climatology
    try:
        props = fetch_monthly_climatology(lat, lon)
    except Exception as e:
        return Response({"detail": str(e)}, status=502)

    temps = props.get("parameter", {}).get("T2M", {})
    rains = props.get("parameter", {}).get("PRECTOTCORR", {})

    calendar = build_monthly_calendar_from_climate(temps, rains)

    # ensure Crop exists
    crop, _ = Crop.objects.get_or_create(name__iexact=crop_name, defaults={"name": crop_name})
    # ensure CountyNode exists
    node, _ = CountyNode.objects.get_or_create(name__iexact=county_name, defaults={"name": county_name, "latitude": lat, "longitude": lon})

    # save calendar
    obj, created = CropSeasonCalendar.objects.update_or_create(
        crop=crop, county=node, year=year,
        defaults={"monthly_activities": calendar}
    )

    return Response({
        "county": county_name,
        "crop": crop.name,
        "year": year,
        "calendar": calendar
    })
