import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, FileText } from "lucide-react";

interface AIInsightExplorerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AIInsightExplorer = ({ open, onOpenChange }: AIInsightExplorerProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [insights, setInsights] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation with mock data
    setTimeout(() => {
      const mockInsight = generateMockInsight(prompt);
      setInsights(mockInsight);
      setIsGenerating(false);
    }, 2000);
  };

  const generateMockInsight = (userPrompt: string) => {
    // Mock AI-generated insights based on keywords
    if (userPrompt.toLowerCase().includes("maize") || userPrompt.toLowerCase().includes("drought")) {
      return `**Plant Stress Adaptations for Maize in Semi-Arid Kenya**

**Key Findings:**
- Maize cultivars in drought-prone regions show 34% increase in root elongation
- Enhanced osmotic adjustment mechanisms detected in leaf tissues
- Stomatal density reduced by 18% to minimize water loss

**NASA Research Connections:**
1. **Publication**: "Morphological Adaptations of Zea mays Under Water Stress" (2021)
   - Root system architecture changes correlate with soil moisture levels below 25%
   - Enhanced aquaporin expression in root cells

2. **Publication**: "Drought Tolerance Mechanisms in Space Agriculture" (2022)
   - Similar stress response patterns observed in controlled microgravity experiments
   - Implications for Kenyan agriculture under climate stress

**Relevant Counties:**
- Turkana: Severe drought conditions (NDVI: 0.45, 23% below average)
- Marsabit: High stress levels (NDVI: 0.48, 19% below average)

**Adaptation Strategies:**
- Root elongation increases water uptake capacity by 40%
- Reduced transpiration maintains plant vigor during extended dry periods`;
    } else if (userPrompt.toLowerCase().includes("rice") || userPrompt.toLowerCase().includes("flood")) {
      return `**Flood Adaptation Mechanisms in Rice for Lake Victoria Region**

**Key Findings:**
- Rice varieties develop aerenchyma tissue for oxygen transport
- 25% increase in stem thickness under waterlogging conditions
- Enhanced anaerobic metabolism pathways activated

**NASA Research Connections:**
1. **Publication**: "Waterlogging Tolerance in Oryza sativa" (2020)
   - Aerenchyma formation begins within 48 hours of flooding
   - Metabolic shift to anaerobic respiration prevents tissue damage

2. **Publication**: "Hypoxia Response in Plant Biology" (2023)
   - Similar oxygen deprivation responses in closed-system agriculture
   - Applications for flood-prone agricultural zones

**Relevant Counties:**
- Kisumu: High flood risk (Soil moisture: 0.78, 45% above normal)
- Busia: Elevated flooding (Precipitation: 285mm, 52% above average)

**Adaptation Strategies:**
- Aerenchyma creates internal oxygen channels in roots and stems
- Adventitious roots form at higher nodes to access surface oxygen`;
    } else {
      return `**AI-Generated Agricultural Insight for Kenya**

Based on your query, here are relevant findings:

**General Plant Stress Response:**
- Plants in Kenya show remarkable adaptation to both drought and flood stresses
- NASA bioscience research provides foundational understanding of these mechanisms
- Earth Observation data confirms stress patterns across multiple counties

**Research Applications:**
- 168 publications linked to Kenyan agricultural regions
- Integration of space biology findings with terrestrial applications
- Real-time monitoring through satellite data (NDVI, soil moisture, precipitation)

**Recommendations:**
Try more specific queries like:
- "Summarize plant stress adaptations relevant to maize in semi-arid Kenya"
- "How does rice adapt to flooding in Kisumu County?"
- "Drought tolerance mechanisms for Turkana region"`;
    }
  };

  const examplePrompts = [
    "Summarize plant stress adaptations relevant to maize in semi-arid Kenya",
    "How does rice adapt to flooding in Lake Victoria region?",
    "Drought tolerance mechanisms for Turkana County",
    "Root elongation response in water-stressed crops",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            AI Insight Explorer
          </DialogTitle>
          <DialogDescription>
            Ask questions about plant adaptations, stress responses, or regional climate data. 
            AI will summarize relevant NASA research and connect it to Kenyan counties.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Prompt Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Query</label>
            <Textarea
              placeholder="e.g., 'Summarize plant stress adaptations relevant to maize in semi-arid Kenya'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                Ask about specific crops, regions, or stress conditions
              </p>
              <Button 
                onClick={handleGenerate} 
                disabled={!prompt.trim() || isGenerating}
                className="gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Insight
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Example Prompts */}
          {!insights && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Example Queries:</p>
              <div className="grid grid-cols-1 gap-2">
                {examplePrompts.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start text-left h-auto py-2 px-3"
                    onClick={() => setPrompt(example)}
                  >
                    <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{example}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Generated Insights */}
          {insights && (
            <Card className="glass-card">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI-Generated Summary
                  </Badge>
                </div>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {insights}
                  </div>
                </div>
                <div className="flex gap-2 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setInsights(null);
                      setPrompt("");
                    }}
                  >
                    New Query
                  </Button>
                  <Button variant="outline">
                    View Related Publications
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIInsightExplorer;
