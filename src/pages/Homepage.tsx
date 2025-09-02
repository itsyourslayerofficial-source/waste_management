import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import RoleCard from "@/components/RoleCard";
import { 
  ArrowRight, 
  Trash2, 
  Recycle, 
  TrendingUp, 
  Users, 
  Truck, 
  Shield, 
  Building,
  PlayCircle,
  CheckCircle,
  Star,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-waste-management.jpg";

const Homepage = () => {
  const stats = [
    {
      title: "Daily Waste Generated",
      value: "2.5M",
      subtitle: "Tonnes across India",
      icon: <Trash2 className="h-5 w-5 text-primary" />,
      trend: { value: "2.3%", isPositive: false }
    },
    {
      title: "Waste Treated",
      value: "68%",
      subtitle: "Processing efficiency",
      icon: <Recycle className="h-5 w-5 text-primary" />,
      trend: { value: "5.7%", isPositive: true }
    },
    {
      title: "Accountability Score",
      value: "82%",
      subtitle: "Tracking coverage",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      trend: { value: "12.1%", isPositive: true }
    }
  ];

  const roles = [
    {
      title: "Citizens",
      description: "Report waste, earn rewards, learn segregation",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Easy waste reporting with geo-tagging",
        "Segregation training modules",
        "Reward points and incentives",
        "Track your environmental impact"
      ],
      buttonText: "Start as Citizen",
      href: "/citizen",
      variant: "primary" as const
    },
    {
      title: "Waste Workers",
      description: "Optimize routes, track collection, access training",
      icon: <Truck className="h-6 w-6" />,
      features: [
        "GPS-optimized collection routes",
        "Real-time task management",
        "Training and skill development",
        "Performance tracking dashboard"
      ],
      buttonText: "Worker Dashboard",
      href: "/waste-workers",
      variant: "default" as const
    },
    {
      title: "Green Committee",
      description: "Monitor compliance, validate reports, organize events",
      icon: <Shield className="h-6 w-6" />,
      features: [
        "Area compliance monitoring",
        "Citizen report validation",
        "Community event organization",
        "Environmental analytics"
      ],
      buttonText: "Committee Portal",
      href: "/green-committee",
      variant: "default" as const
    },
    {
      title: "Municipality",
      description: "Track operations, manage facilities, analyze data",
      icon: <Building className="h-6 w-6" />,
      features: [
        "Real-time vehicle tracking",
        "Facility status monitoring",
        "Citywide waste analytics",
        "Citizen complaint management"
      ],
      buttonText: "Admin Dashboard",
      href: "/municipality-admin",
      variant: "accent" as const
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Train",
      description: "Learn proper waste segregation and environmental practices",
      icon: <PlayCircle className="h-8 w-8 text-primary" />
    },
    {
      step: "2",
      title: "Report",
      description: "Submit waste reports with photos and location data",
      icon: <CheckCircle className="h-8 w-8 text-primary" />
    },
    {
      step: "3",
      title: "Track",
      description: "Monitor collection, processing, and environmental impact",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      step: "4",
      title: "Reward",
      description: "Earn points, badges, and incentives for positive actions",
      icon: <Star className="h-8 w-8 text-primary" />
    }
  ];

  const latestUpdates = [
    {
      title: "New Segregation Guidelines Released",
      date: "Dec 15, 2024",
      description: "Updated guidelines for plastic waste segregation now available in the training center."
    },
    {
      title: "Mumbai Achieves 90% Compliance",
      date: "Dec 12, 2024",
      description: "Mumbai becomes the first city to achieve 90% waste segregation compliance through WATP."
    },
    {
      title: "Worker Training Program Launch",
      date: "Dec 10, 2024",
      description: "New comprehensive training program for waste collection workers launched nationwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                India's First{" "}
                <span className="text-gradient">Waste Accountability</span>{" "}
                & Tracking Portal
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering citizens, workers, and municipalities to create a cleaner, 
                more sustainable India through transparent waste management and 
                accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group" asChild>
                  <a href="/login">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/training">
                    Learn Segregation
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Waste Management Portal"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-Time Impact</h2>
            <p className="text-xl text-muted-foreground">
              Track India's waste management progress in real-time
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                {...stat}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How WATP Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple 4-step process that transforms waste management across India
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Entry Points */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your role to access customized tools and dashboards
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                {...role}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
            <p className="text-xl text-muted-foreground">
              Stay informed about the latest developments in waste management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestUpdates.map((update, index) => (
              <div 
                key={index} 
                className="card-gradient rounded-xl p-6 hover-lift animate-fade-in-up"
              >
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {update.date}
                </div>
                <h3 className="text-lg font-semibold mb-3">{update.title}</h3>
                <p className="text-muted-foreground">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;