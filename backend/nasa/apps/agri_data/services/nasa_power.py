# apps/agri_data/services/nasa_power.py
import requests
from django.conf import settings

NASA_BASE = getattr(settings, "NASA_POWER_BASE", "https://power.larc.nasa.gov/api")

def fetch_monthly_climatology(lat, lon, params=None):
    """
    Fetch monthly climatology (long-term monthly averages) from NASA POWER.
    Returns the `properties` dict of the API response.
    """
    if params is None:
        params = ["T2M", "PRECTOTCORR", "ALLSKY_SFC_SW_DWN", "ET0", "SOILM"]
    parameters = ",".join(params)
    url = f"{NASA_BASE}/temporal/climatology/point"
    payload = {
        "latitude": lat,
        "longitude": lon,
        "parameters": parameters,
        "community": "AG",
        "format": "JSON",
    }
    r = requests.get(url, params=payload, timeout=30)
    r.raise_for_status()
    return r.json().get("properties", {})
