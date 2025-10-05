import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Database, TrendingUp, Network, AlertTriangle, Droplets, Sun, Lightbulb } from "lucide-react";
import heroBackground from "@/assets/hero-space.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "600+ Publications",
      description: "Comprehensive bioscience research from NASA missions",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Smart summaries and trend analysis for quick understanding",
    },
    {
      icon: Network,
      title: "Knowledge Graphs",
      description: "Visual connections between studies, organisms, and missions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="container relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket className="h-12 w-12 text-white animate-pulse-glow" />
              </div>
            </div>
            
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              AI-Powered Kenya
              <br />
              <span className="text-secondary">Bio-Agro Resilience Dashboard</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Connecting NASA's bioscience research with Earth Observation data to understand and predict drought and flood resilience in Kenya's crops
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() => navigate("/dashboard")}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow-earth"
              >
                <Database className="mr-2 h-5 w-5" />
                Explore Insights
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/risk-dashboard")}
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
              >
                View Kenya Risk Dashboard
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Live Data Snapshot */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <h2 className="text-2xl font-bold hero-text text-center mb-8">Live Data Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card hover:shadow-glow-blue transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Drought Severity</p>
                    <p className="text-4xl font-bold">7.8</p>
                    <p className="text-xs text-destructive mt-1">↑ High Risk</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  8 Kenyan counties experiencing severe drought conditions
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-glow-blue transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Flood Risk Alerts</p>
                    <p className="text-4xl font-bold">18</p>
                    <p className="text-xs text-secondary mt-1">↑ Active Alerts</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Elevated flood risk in 5 Kenyan counties near Lake Victoria
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:shadow-glow-cyan transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Latest AI Insight</p>
                    <p className="text-lg font-bold leading-tight">Root adaptation detected</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Maize shows 34% root elongation under water stress in semi-arid Kenya
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold hero-text mb-4">
              Mission Control for Bioscience Data
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transform complex research into actionable insights for space exploration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-glow-blue transition-all duration-300 group"
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold hero-text text-white">
              Ready to Explore?
            </h2>
            <p className="text-lg text-white/90">
              Dive into the dashboard and discover insights that will shape humanity's future in space.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-glow-cyan"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
