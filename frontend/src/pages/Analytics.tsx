import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, AlertTriangle, Droplets, Sun } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  // Mock analytics data for Kenya
  const droughtOverview = [
    { region: "Turkana", severity: 8.5, trend: "increasing" },
    { region: "Marsabit", severity: 8.2, trend: "increasing" },
    { region: "Nakuru", severity: 6.8, trend: "stable" },
    { region: "Machakos", severity: 6.5, trend: "decreasing" },
    { region: "Isiolo", severity: 7.9, trend: "increasing" },
  ];

  const floodOverview = [
    { region: "Kisumu", severity: 7.8, trend: "increasing" },
    { region: "Busia", severity: 8.2, trend: "increasing" },
    { region: "Siaya", severity: 6.5, trend: "stable" },
    { region: "Homa Bay", severity: 7.1, trend: "increasing" },
  ];

  const vegetationStress = [
    { month: "Jan", stressed: 23, healthy: 77 },
    { month: "Feb", stressed: 28, healthy: 72 },
    { month: "Mar", stressed: 35, healthy: 65 },
    { month: "Apr", stressed: 42, healthy: 58 },
    { month: "May", stressed: 48, healthy: 52 },
    { month: "Jun", stressed: 51, healthy: 49 },
  ];

  const stressDistribution = [
    { name: "Severe Drought", value: 35, color: "hsl(0, 84%, 60%)" },
    { name: "Moderate Drought", value: 28, color: "hsl(25, 95%, 53%)" },
    { name: "Severe Flood", value: 22, color: "hsl(221, 83%, 53%)" },
    { name: "Moderate Flood", value: 15, color: "hsl(210, 100%, 60%)" },
  ];

  const regionalImpact = [
    { region: "Turkana County", publications: 45, riskScore: 8.5 },
    { region: "Kisumu County", publications: 38, riskScore: 7.8 },
    { region: "Marsabit County", publications: 32, riskScore: 8.2 },
    { region: "Busia County", publications: 28, riskScore: 8.2 },
    { region: "Nakuru County", publications: 25, riskScore: 6.8 },
  ];

  const handleExport = () => {
    // Mock export functionality
    console.log("Exporting analytics report...");
  };

  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold hero-text">Kenya Trends & Analytics</h1>
          <p className="text-muted-foreground text-lg">
            Historical drought and flood frequency vs. vegetation health in Kenyan counties
          </p>
        </div>
        <Button onClick={handleExport}>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Drought Counties</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <Sun className="h-8 w-8 text-destructive" />
            </div>
            <p className="text-xs text-destructive mt-2">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Flood Counties</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <Droplets className="h-8 w-8 text-secondary" />
            </div>
            <p className="text-xs text-secondary mt-2">+1 from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Stressed Areas</p>
                <p className="text-3xl font-bold">51%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <p className="text-xs text-destructive mt-2">+8% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Publications</p>
                <p className="text-3xl font-bold">168</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Linked to regions</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drought Overview */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Kenya Drought Severity</CardTitle>
            <CardDescription>Top 5 affected counties by severity index</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={droughtOverview}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="severity" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Flood Overview */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Kenya Flood Risk</CardTitle>
            <CardDescription>Top 4 affected counties by risk level</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={floodOverview}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="severity" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vegetation Stress Trend */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Vegetation Stress Trends</CardTitle>
            <CardDescription>6-month comparison of healthy vs stressed vegetation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vegetationStress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="stressed" stroke="hsl(var(--destructive))" strokeWidth={2} name="Stressed %" />
                <Line type="monotone" dataKey="healthy" stroke="hsl(var(--primary))" strokeWidth={2} name="Healthy %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Stress Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Stress Type Distribution</CardTitle>
            <CardDescription>Breakdown of stress severity across all regions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stressDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stressDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Regional Impact Table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>County Research Impact</CardTitle>
          <CardDescription>Kenyan counties with highest vegetation stress and related NASA publications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">County</th>
                  <th className="text-left py-3 px-4">Related Publications</th>
                  <th className="text-left py-3 px-4">Risk Score</th>
                  <th className="text-left py-3 px-4">Trend</th>
                </tr>
              </thead>
              <tbody>
                {regionalImpact.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{item.region}</td>
                    <td className="py-3 px-4">{item.publications}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-destructive"
                            style={{ width: `${(item.riskScore / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm">{item.riskScore}/10</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <TrendingUp className="h-4 w-4 text-destructive" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
