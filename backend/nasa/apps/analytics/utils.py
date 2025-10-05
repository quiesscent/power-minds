# apps/analytics/utils.py
import numpy as np

def flood_risk_from_precip(precip_list):
    """
    precip_list: list/iterable of 12 monthly precipitation values (mm)
    returns normalized risk list length 12 (0..1)
    """
    arr = np.array([v if v is not None else 0.0 for v in precip_list], dtype=float)
    if arr.sum() == 0:
        return [0.0]*12
    rolling = np.convolve(arr, np.ones(3), mode="same")
    clim_mean = arr.mean() if arr.size else 1.0
    anomaly = rolling / max(1e-6, (clim_mean*3))
    risk = np.clip((anomaly - 1.0) * 0.9 + 0.1, 0.0, 1.0)
    return [float(x) for x in risk]
