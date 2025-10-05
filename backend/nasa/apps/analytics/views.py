# apps/analytics/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from apps.agri_data.models import County
from apps.agri_data.services.nasa_power import fetch_monthly_climatology
from .utils import flood_risk_from_precip

@api_view(["GET"])
def county_flood_risk(request, county_id, year=None):
    """
    Return flood risk scores for 12 months for the county.
    """
    try:
        c = County.objects.get(pk=county_id)
    except County.DoesNotExist:
        return Response({"detail":"County not found"}, status=404)

    try:
        props = fetch_monthly_climatology(c.latitude, c.longitude)
    except Exception as e:
        return Response({"detail": str(e)}, status=502)

    precip = props.get("parameter", {}).get("PRECTOTCORR", {})
    # normalize precip to list Jan..Dec
    monthly_precip = []
    for m in range(1,13):
        key = None
        # try 'MM' or 'YYYYMM' keys
        # find matching key with month suffix
        found = None
        for k in precip.keys():
            if k.endswith(f"{m:02d}"):
                found = k; break
        monthly_precip.append(precip.get(found, 0.0))
    risk = flood_risk_from_precip(monthly_precip)
    return Response({
        "county": c.name,
        "monthly_precip": monthly_precip,
        "flood_risk": risk
    })
