import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedMission: string;
  setSelectedMission: (mission: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
  selectedImpact: string;
  setSelectedImpact: (impact: string) => void;
  onClearFilters: () => void;
}

const SearchFilter = ({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  selectedMission,
  setSelectedMission,
  selectedSubject,
  setSelectedSubject,
  selectedImpact,
  setSelectedImpact,
  onClearFilters,
}: SearchFilterProps) => {
  const activeFiltersCount = [
    selectedYear !== "all",
    selectedMission !== "all",
    selectedSubject !== "all",
    selectedImpact !== "all",
  ].filter(Boolean).length;

  return (
    <div className="glass-card p-6 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Search & Filter</h2>
        {activeFiltersCount > 0 && (
          <Badge variant="secondary" className="animate-pulse-glow">
            {activeFiltersCount} active
          </Badge>
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search publications (e.g., bone density, plant growth)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-background"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedMission} onValueChange={setSelectedMission}>
          <SelectTrigger>
            <SelectValue placeholder="Mission" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Missions</SelectItem>
            <SelectItem value="ISS">ISS</SelectItem>
            <SelectItem value="Ground-based">Ground-based</SelectItem>
            <SelectItem value="Apollo">Apollo</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger>
            <SelectValue placeholder="Subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="Human">Human</SelectItem>
            <SelectItem value="Plant">Plant</SelectItem>
            <SelectItem value="Microbe">Microbe</SelectItem>
            <SelectItem value="Engineering">Engineering</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedImpact} onValueChange={setSelectedImpact}>
          <SelectTrigger>
            <SelectValue placeholder="Impact" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Impact</SelectItem>
            <SelectItem value="Moon">Moon</SelectItem>
            <SelectItem value="Mars">Mars</SelectItem>
            <SelectItem value="Earth">Earth</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {activeFiltersCount > 0 && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );
};

export default SearchFilter;
