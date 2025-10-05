import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { impactData } from "@/data/mockData";

const COLORS = {
  progress: "hsl(var(--primary))",
  gap: "hsl(var(--destructive))",
  human: "hsl(0, 84%, 60%)",
  plant: "hsl(142, 71%, 45%)",
  microbe: "hsl(262, 83%, 58%)",
  engineering: "hsl(217, 91%, 60%)",
};

const ImpactInsights = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold hero-text">Impact Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Moon Readiness */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🌙 Moon Mission Readiness
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {impactData.moonReadiness.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Mars Readiness */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🔴 Mars Mission Readiness
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {impactData.marsReadiness.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-muted-foreground">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Subject Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Research Subject Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={impactData.subjectDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${((percent as number) * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {impactData.subjectDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.name === "Human"
                          ? COLORS.human
                          : entry.name === "Plant"
                          ? COLORS.plant
                          : entry.name === "Microbe"
                          ? COLORS.microbe
                          : COLORS.engineering
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Publications Trend */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-lg">Publications Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={impactData.yearlyPublications}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress vs Gaps Comparison */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Mission Readiness Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  ...impactData.moonReadiness.map((item) => ({
                    ...item,
                    mission: "Moon",
                  })),
                  ...impactData.marsReadiness.map((item) => ({
                    ...item,
                    mission: "Mars",
                  })),
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Bar dataKey="progress" fill={COLORS.progress} name="Progress %" />
                <Bar dataKey="gap" fill={COLORS.gap} name="Gap %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpactInsights;
