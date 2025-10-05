import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Publication } from "@/data/mockData";

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const subjectColors: Record<string, string> = {
    Human: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/50",
    Plant: "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/50",
    Microbe: "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/50",
    Engineering: "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50",
  };

  const impactColors: Record<string, string> = {
    Moon: "bg-accent/20 text-accent-foreground border-accent/50",
    Mars: "bg-destructive/20 text-destructive-foreground border-destructive/50",
    Earth: "bg-primary/20 text-primary-foreground border-primary/50",
  };

  return (
    <Card className="glass-card hover:shadow-glow-cyan transition-all duration-300 animate-fade-in group">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {publication.title}
          </CardTitle>
          <Badge variant="outline" className="shrink-0">
            {publication.year}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {publication.subject.map((subject) => (
            <Badge
              key={subject}
              variant="outline"
              className={subjectColors[subject] || ""}
            >
              {subject}
            </Badge>
          ))}
          {publication.impact.map((impact) => (
            <Badge
              key={impact}
              variant="outline"
              className={impactColors[impact] || ""}
            >
              {impact}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{publication.summary}</p>
        
        {isExpanded && (
          <div className="space-y-3 animate-fade-in">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm">{publication.fullSummary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Mission: {publication.mission}</Badge>
              {publication.organisms.map((org) => (
                <Badge key={org} variant="secondary">
                  {org}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View More
              </>
            )}
          </Button>
          <Button
            size="sm"
            onClick={() => navigate(`/study/${publication.id}`)}
            className="flex-1"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Full Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
