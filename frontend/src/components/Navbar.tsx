import { Link, useLocation } from "react-router-dom";
import { Rocket, Database, Info, Menu, Map, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Home", icon: Rocket },
    { path: "/dashboard", label: "Publications", icon: Database },
    { path: "/risk-dashboard", label: "Risk Dashboard", icon: Map },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/about", label: "About", icon: Info },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive(item.path) ? "default" : "ghost"}
              className={`${mobile ? "w-full justify-start" : ""} ${
                isActive(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="hero-text text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            NASA BioExplorer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-3 mt-6">
              <NavLinks mobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
