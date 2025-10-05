import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, TrendingDown, TrendingUp, Droplets, Sun, Leaf, AlertTriangle, Sparkles } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import AIInsightExplorer from "@/components/AIInsightExplorer";

const RiskDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [plantFilter, setPlantFilter] = useState<string>("all");
  const [stressFilter, setStressFilter] = useState<string>("all");
  const [aiExplorerOpen, setAiExplorerOpen] = useState(false);

  // Mock EO data
  const droughtData = [
    { month: "Jan", ndvi: 0.65, rainfall: 45 },
    { month: "Feb", ndvi: 0.62, rainfall: 38 },
    { month: "Mar", ndvi: 0.58, rainfall: 28 },
    { month: "Apr", ndvi: 0.52, rainfall: 15 },
    { month: "May", ndvi: 0.48, rainfall: 12 },
    { month: "Jun", ndvi: 0.45, rainfall: 8 },
  ];

  const floodData = [
    { month: "Jan", soilMoisture: 0.32, precipitation: 120 },
    { month: "Feb", soilMoisture: 0.42, precipitation: 145 },
    { month: "Mar", soilMoisture: 0.55, precipitation: 180 },
    { month: "Apr", soilMoisture: 0.68, precipitation: 220 },
    { month: "May", soilMoisture: 0.75, precipitation: 250 },
    { month: "Jun", soilMoisture: 0.82, precipitation: 285 },
  ];

  const regions = [
    { id: "turkana", name: "Turkana County", risk: "severe", type: "drought", lat: 3.31, lng: 35.56 },
    { id: "marsabit", name: "Marsabit County", risk: "severe", type: "drought", lat: 2.33, lng: 37.99 },
    { id: "kisumu", name: "Kisumu County", risk: "high", type: "flood", lat: -0.09, lng: 34.77 },
    { id: "nakuru", name: "Nakuru County", risk: "moderate", type: "drought", lat: -0.30, lng: 36.08 },
    { id: "busia", name: "Busia County", risk: "high", type: "flood", lat: 0.46, lng: 34.11 },
    { id: "machakos", name: "Machakos County", risk: "moderate", type: "drought", lat: -1.52, lng: 37.26 },
  ];

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "severe": return "destructive";
      case "high": return "destructive";
      case "moderate": return "default";
      default: return "secondary";
    }
  };

  const selectedRegionData = regions.find(r => r.id === selectedRegion);

  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold hero-text">Kenya Bio-Agro Resilience Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Visualize drought and flood risk across Kenyan counties using Earth Observation data (NDVI, soil moisture, rainfall anomalies)
          </p>
        </div>
        <Button onClick={() => setAiExplorerOpen(true)} className="gap-2">
          <Sparkles className="h-4 w-4" />
          AI Insight Explorer
        </Button>
      </div>

      {/* Filters */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Filters & Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Plant Type</label>
              <Select value={plantFilter} onValueChange={setPlantFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Plants</SelectItem>
                  <SelectItem value="maize">Maize</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="soybean">Soybean</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Stress Type</label>
              <Select value={stressFilter} onValueChange={setStressFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stresses</SelectItem>
                  <SelectItem value="drought">Drought</SelectItem>
                  <SelectItem value="flood">Flood</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Time Period</label>
              <Select defaultValue="6months">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">Last Month</SelectItem>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Panel */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Kenya Counties Risk Map</CardTitle>
              <p className="text-sm text-muted-foreground">Interactive map showing drought and flood risk by county</p>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-green-950 rounded-lg h-[500px] overflow-hidden">
                {/* Simplified Kenya map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
                    {regions.map((region) => (
                      <Button
                        key={region.id}
                        variant="outline"
                        onClick={() => handleRegionClick(region.id)}
                        className={`h-28 flex flex-col items-center justify-center gap-2 ${
                          selectedRegion === region.id ? "border-primary border-2" : ""
                        }`}
                      >
                        <MapPin className="h-5 w-5" />
                        <span className="font-semibold text-sm">{region.name}</span>
                        <Badge variant={getRiskColor(region.risk)}>
                          {region.risk} {region.type}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-background/90 p-3 rounded-lg">
                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span>Severe Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full" />
                      <span>High Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span>Moderate Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Graph Panel */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Time-Series Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="drought">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="drought">
                    <Sun className="h-4 w-4 mr-2" />
                    Drought Index
                  </TabsTrigger>
                  <TabsTrigger value="flood">
                    <Droplets className="h-4 w-4 mr-2" />
                    Flood Risk
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="drought" className="space-y-4">
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={droughtData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="ndvi" stroke="hsl(var(--primary))" name="NDVI" />
                      <Line yAxisId="right" type="monotone" dataKey="rainfall" stroke="hsl(var(--secondary))" name="Rainfall (mm)" />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="flood" className="space-y-4">
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={floodData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Area yAxisId="left" type="monotone" dataKey="soilMoisture" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} name="Soil Moisture" />
                      <Area yAxisId="right" type="monotone" dataKey="precipitation" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.3} name="Precipitation (mm)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* AI Insight Drawer */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedRegionData ? (
                <>
                  <div>
                    <h3 className="font-semibold mb-2">{selectedRegionData.name}</h3>
                    <Badge variant={getRiskColor(selectedRegionData.risk)}>
                      {selectedRegionData.risk} {selectedRegionData.type} risk
                    </Badge>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 mt-0.5 text-destructive" />
                        <div>
                          <p className="font-semibold">Risk Assessment</p>
                          <p className="text-muted-foreground">
                            {selectedRegionData.type === "drought" 
                              ? `NDVI shows 23% below seasonal average in ${selectedRegionData.name}. Vegetation stress detected.`
                              : `Soil moisture 45% above normal in ${selectedRegionData.name}. Flooding risk elevated.`}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Leaf className="h-4 w-4 mt-0.5 text-primary" />
                        <div>
                          <p className="font-semibold">NASA Research Findings</p>
                          <p className="text-muted-foreground">
                            {selectedRegionData.type === "drought"
                              ? `NASA studies show maize increases root length by 34% under prolonged water stress, matching observed threshold conditions in ${selectedRegionData.name}.`
                              : `Research indicates rice develops aerenchyma tissue for oxygen transport under waterlogging, critical adaptation for flood conditions in ${selectedRegionData.name}.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    View Related Publications
                  </Button>
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a region on the map to view AI-powered insights</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-lg">Regional Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Vegetation Health</span>
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-destructive" />
                  <span className="font-semibold text-destructive">-18%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Precipitation</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  <span className="font-semibold text-secondary">+42%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Related Studies</span>
                <span className="font-semibold">23</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Insight Explorer Modal */}
      <AIInsightExplorer open={aiExplorerOpen} onOpenChange={setAiExplorerOpen} />
    </div>
  );
};

export default RiskDashboard;
