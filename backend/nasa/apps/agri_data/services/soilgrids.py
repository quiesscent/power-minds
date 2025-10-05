# apps/agri_data/services/soilgrids.py
import requests

SOILGRIDS_BASE = "https://rest.isric.org/soilgrids/v2.0/properties/query"

def fetch_soil_properties(lat, lon, props=("phh2o","soc","sand","silt","clay")):
    """
    Query SoilGrids REST API for basic properties at topsoil.
    Returns JSON (as-is) with properties.
    """
    params = {
        "lat": lat,
        "lon": lon,
        "property": ",".join(props)
    }
    r = requests.get(SOILGRIDS_BASE, params=params, timeout=30)
    r.raise_for_status()
    return r.json()
