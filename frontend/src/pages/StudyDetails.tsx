import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { mockPublications } from "@/data/mockData";
import { toast } from "sonner";

const StudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const publication = mockPublications.find((p) => p.id === id);

  if (!publication) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Study Not Found</h1>
        <Button onClick={() => navigate("/dashboard")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success("Download started! PDF will be ready shortly.");
  };

  const relatedStudies = mockPublications.filter((p) =>
    publication.relatedStudies.includes(p.id)
  );

  return (
    <div className="container py-8 space-y-8 animate-fade-in">
      <Button
        variant="ghost"
        onClick={() => navigate("/dashboard")}
        className="mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      <div className="glass-card p-8 space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{publication.year}</Badge>
            <Badge variant="outline">Mission: {publication.mission}</Badge>
            {publication.subject.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
            {publication.impact.map((i) => (
              <Badge key={i} className="bg-primary/20">
                {i}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl font-bold hero-text">{publication.title}</h1>

          <div className="flex gap-3">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on NASA OSDR
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {publication.fullSummary}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Key Findings</h2>
            <ul className="space-y-2">
              {publication.keyFindings.map((finding, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Implications</h2>
            <div className="space-y-3">
              {publication.implications.map((implication, index) => (
                <Card key={index} className="bg-accent/50">
                  <CardContent className="pt-4">
                    <p>{implication}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Organisms Studied</h2>
            <div className="flex flex-wrap gap-2">
              {publication.organisms.map((organism) => (
                <Badge key={organism} variant="outline" className="text-base">
                  {organism}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>

      {relatedStudies.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold hero-text">Related Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedStudies.map((study) => (
              <Card
                key={study.id}
                className="glass-card hover:shadow-glow-cyan transition-all cursor-pointer"
                onClick={() => navigate(`/study/${study.id}`)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {study.summary}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      {study.year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyDetails;
