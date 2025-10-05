import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchFilter from "@/components/SearchFilter";
import PublicationCard from "@/components/PublicationCard";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import ImpactInsights from "@/components/ImpactInsights";
import { mockPublications } from "@/data/mockData";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMission, setSelectedMission] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");

  const filteredPublications = useMemo(() => {
    return mockPublications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.fullSummary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
      const matchesMission = selectedMission === "all" || pub.mission === selectedMission;
      const matchesSubject = selectedSubject === "all" || pub.subject.includes(selectedSubject);
      const matchesImpact = selectedImpact === "all" || pub.impact.includes(selectedImpact);

      return matchesSearch && matchesYear && matchesMission && matchesSubject && matchesImpact;
    });
  }, [searchQuery, selectedYear, selectedMission, selectedSubject, selectedImpact]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYear("all");
    setSelectedMission("all");
    setSelectedSubject("all");
    setSelectedImpact("all");
  };

  return (
    <div className="container py-8 space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold hero-text mb-2">Mission Dashboard</h1>
        <p className="text-muted-foreground text-lg">
          Explore {mockPublications.length} bioscience publications with AI-powered insights
        </p>
      </div>

      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        selectedMission={selectedMission}
        setSelectedMission={setSelectedMission}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
        selectedImpact={selectedImpact}
        setSelectedImpact={setSelectedImpact}
        onClearFilters={clearFilters}
      />

      <Tabs defaultValue="publications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Graph</TabsTrigger>
          <TabsTrigger value="insights">Impact Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="publications" className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredPublications.length} of {mockPublications.length} publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPublications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No publications found matching your criteria.
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="knowledge">
          <KnowledgeGraph />
        </TabsContent>

        <TabsContent value="insights">
          <ImpactInsights />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
