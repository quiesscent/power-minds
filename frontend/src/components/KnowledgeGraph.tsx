import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { knowledgeGraphData } from "@/data/mockData";

const KnowledgeGraph = () => {
  const nodeData = knowledgeGraphData.nodes.map((node, index) => ({
    x: Math.cos((index * 2 * Math.PI) / knowledgeGraphData.nodes.length) * 100 + 150,
    y: Math.sin((index * 2 * Math.PI) / knowledgeGraphData.nodes.length) * 100 + 150,
    name: node.name,
    type: node.type,
    category: node.category,
    size: 400,
  }));

  const getColor = (type: string, category?: string) => {
    if (type === "mission") return "hsl(var(--primary))";
    if (type === "intervention") return "hsl(var(--accent))";
    if (category === "human") return "hsl(0, 84%, 60%)";
    if (category === "plant") return "hsl(142, 71%, 45%)";
    if (category === "microbe") return "hsl(262, 83%, 58%)";
    return "hsl(var(--muted))";
  };

  return (
    <Card className="glass-card animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <CardTitle className="text-xl">Knowledge Graph</CardTitle>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="bg-red-500/20 border-red-500/50">
              Human Studies
            </Badge>
            <Badge variant="outline" className="bg-green-500/20 border-green-500/50">
              Plant Studies
            </Badge>
            <Badge variant="outline" className="bg-purple-500/20 border-purple-500/50">
              Microbe Studies
            </Badge>
            <Badge variant="outline" className="bg-primary/20 border-primary/50">
              Missions
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Interactive visualization of research connections and relationships
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis type="number" dataKey="x" hide domain={[0, 300]} />
            <YAxis type="number" dataKey="y" hide domain={[0, 300]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="glass-card p-3 border border-border">
                      <p className="font-semibold">{data.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {data.type}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter data={nodeData} fill="hsl(var(--primary))">
              {nodeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(entry.type, entry.category)}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {knowledgeGraphData.nodes.slice(0, 6).map((node) => (
            <div
              key={node.id}
              className="p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <p className="text-sm font-medium">{node.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{node.type}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeGraph;
