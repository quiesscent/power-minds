# apps/knowledge_graph/utils.py
def month_index_to_name(i):
    months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return months[i-1]

def build_monthly_calendar_from_climate(monthly_temp, monthly_rain, crop_profile=None):
    """
    monthly_temp, monthly_rain: dict mapping 'YYYYMM' or 'MM' -> value OR lists length 12
    returns dict mapping month name -> activity
    crop_profile can be dict with domain-specific rules (optional).
    """
    # normalize to lists of length 12 ordered Jan..Dec
    def to_list(data):
        if not data:
            return [None]*12
        if isinstance(data, dict):
            # keys likely '01','02' or '202401' etc. find numeric month keys
            months = sorted(data.keys())
            # attempt to build month list by extracting last two digits
            vals = [None]*12
            for k,v in data.items():
                m = int(k[-2:])
                vals[m-1] = v
            return vals
        if isinstance(data, list):
            if len(data) == 12: return data
            # pad or trim
            return (data + [None]*12)[:12]
        return [None]*12

    tlist = to_list(monthly_temp)
    rlist = to_list(monthly_rain)

    calendar = {}
    for i in range(1,13):
        t = tlist[i-1] or 0
        r = rlist[i-1] or 0
        month_name = month_index_to_name(i)

        # basic rules (can be extended):
        if r <= 30:
            activity = "Do not plant (too dry)"
        elif r >= 250:
            activity = "High flood risk — avoid planting"
        elif 100 <= r < 250 and 18 <= t <= 30:
            # typical planting window
            if i in (3,4,5):
                activity = "Planting / early growth"
            elif i in (6,7):
                activity = "Mature / Harvest"
            else:
                activity = "Growing / Maintenance"
        else:
            activity = "Off-season / Field prep"

        # if crop_profile provided, could fine-tune here
        calendar[month_name] = activity
    return calendar
