import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  GraduationCap, 
  FileText, 
  BarChart3, 
  Info, 
  Mail,
  Leaf
} from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Report", href: "/report", icon: FileText },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-lg">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">WATP India</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Waste Accountability Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="btn-scale" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="hero" size="sm" className="btn-glow" asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" className="justify-start w-full btn-scale" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" className="justify-start w-full btn-glow" asChild>
                  <Link to="/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;