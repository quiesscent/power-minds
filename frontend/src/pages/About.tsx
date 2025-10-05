import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket, Database, Target } from "lucide-react";

const About = () => {
  const resources = [
    {
      title: "NASA OSDR",
      description: "Open Science Data Repository - Access raw bioscience data",
      url: "https://osdr.nasa.gov/",
    },
    {
      title: "Space Life Sciences Library",
      description: "Comprehensive collection of space biology research",
      url: "https://lsda.jsc.nasa.gov/",
    },
    {
      title: "NASA Task Book",
      description: "Current space life sciences research projects",
      url: "https://taskbook.nasaprs.com/",
    },
  ];

  const objectives = [
    {
      icon: Database,
      title: "Centralize Knowledge",
      description: "Aggregate 600+ bioscience publications from multiple NASA sources into one searchable platform",
    },
    {
      icon: Target,
      title: "Identify Gaps",
      description: "Surface knowledge gaps and research priorities for Moon and Mars mission preparation",
    },
    {
      icon: Rocket,
      title: "Enable Discovery",
      description: "Accelerate insights through AI summaries, visualizations, and interconnected research networks",
    },
  ];

  return (
    <div className="container py-12 space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold hero-text">
          About NASA Bioscience Knowledge Explorer
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Empowering the next generation of space exploration through data-driven insights
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl">The Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            NASA has accumulated over 600 bioscience publications from decades of research aboard
            the International Space Station, Space Shuttle, and ground-based studies. This wealth
            of knowledge holds critical insights for preparing humans for long-duration missions
            to the Moon and Mars.
          </p>
          <p>
            However, this research is scattered across multiple databases, making it difficult for
            scientists, mission planners, and decision-makers to quickly identify key findings,
            track progress, and spot knowledge gaps.
          </p>
          <p className="text-primary font-semibold">
            This platform solves that problem by bringing everything together in one intelligent,
            searchable, and visual interface powered by AI.
          </p>
        </CardContent>
      </Card>

      {/* Objectives */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold hero-text text-center">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="glass-card hover:shadow-glow-blue transition-all">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <objective.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{objective.title}</h3>
                <p className="text-muted-foreground">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl">How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">1. Data Aggregation</h3>
              <p className="text-muted-foreground">
                Publications are collected from NASA OSDR, Space Life Sciences Library, and NASA
                Task Book, standardized, and enriched with metadata.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">2. AI Summarization</h3>
              <p className="text-muted-foreground">
                Each study is processed through AI models to generate structured summaries
                highlighting background, results, and implications.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">3. Knowledge Mapping</h3>
              <p className="text-muted-foreground">
                Research connections are identified and visualized in interactive knowledge graphs
                showing relationships between studies, organisms, and missions.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">4. Gap Analysis</h3>
              <p className="text-muted-foreground">
                Automated analysis identifies areas with robust research and areas needing more
                investigation for Moon and Mars mission readiness.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold hero-text text-center">External Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="glass-card hover:shadow-glow-cyan transition-all">
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{resource.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Credits */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl">Credits & Acknowledgments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            This platform was developed as part of NASA's initiative to democratize access to space
            bioscience research and accelerate preparation for lunar and Martian exploration.
          </p>
          <p>
            Special thanks to the NASA Open Science Data Repository team, Space Life Sciences
            researchers, and the countless scientists whose work forms the foundation of this
            knowledge base.
          </p>
          <p className="text-sm italic">
            Data sources: NASA OSDR, Space Life Sciences Data Archive, NASA Task Book
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
