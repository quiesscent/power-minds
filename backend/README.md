# BACKEND ARCHITECTURE
🌍 Kenya Agri Intelligence Backend — App Overview

Your backend is modular — each app under nasa/apps/ handles a specific function.
Below is a simple explanation of what each app does and how they connect.

1️⃣ publications/

Purpose:
Handles NASA and scientific publications data — ingestion, processing, and search.

Main features:

Stores publications, metadata, and extracted entities.

Handles background tasks like summarization and embedding generation.

Provides REST API endpoints for publication search and filtering.

Example use:
Display or cross-reference research on climate and agriculture in Kenya.

2️⃣ knowledge_graph/

Purpose:
Builds a knowledge graph to link entities like crops, regions, and climate factors.

Main features:

Connects to a Neo4j graph database.

Establishes relationships (e.g., “County → Crop → Weather condition”).

Exposes APIs for visualizing relationships between datasets.

Example use:
Show how maize, rainfall, and soil acidity are related across Kenyan counties.

3️⃣ analytics/

Purpose:
Provides data analytics, dashboards, and trends from your datasets and APIs.

Main features:

Analyzes weather, soil, and crop data.

Generates statistical summaries and visual insights.

Prepares data for frontend graphs (rainfall trends, flood predictions, etc.).

Example use:
Display graphs showing rainfall or temperature patterns across months in each county.

4️⃣ agri_data/ ✅ (New App for You)

Purpose:
Central hub for Kenya county-level agricultural intelligence — integrates external APIs and environmental data.

Main features:

Shows all 47 counties in Kenya (via GeoJSON or API).

Integrates:

🌦 NASA POWER API (free, long-term agri-climate data).

🌍 Meteomatics API (accurate real-time forecasts).

Fetches and analyzes:

Temperature

Rainfall

Soil conditions

Flood risk and weather anomalies

Recommends suitable crops and planting calendars for each county.

Example use:
When a user clicks on “Machakos County”, they see:

Recommended crops (e.g., maize, beans).

Optimal planting/harvesting months (in a graph).

Monthly rainfall and temperature forecast.

Flood likelihood visualization.

5️⃣ scripts/

Purpose:
Holds helper scripts for background or scheduled tasks.

Example use:

Import county boundary data from GeoJSON.

Fetch and cache NASA POWER API data daily.

Update seasonal planting forecasts monthly.

6️⃣ nasa/

Purpose:
Main Django project folder — holds configuration and routing.

Main files:

settings.py → Project setup (database, installed apps, etc.)

urls.py → Root URL routing for all apps

asgi.py / wsgi.py → Deployment entry point