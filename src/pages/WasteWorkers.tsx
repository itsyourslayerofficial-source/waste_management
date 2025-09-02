import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, BookOpen, MapPin, Calendar, CheckCircle } from "lucide-react";

const WasteWorkers = () => {
  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Skill Certification",
      description: "Get certified for proper waste handling and segregation techniques"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Training Programs",
      description: "Access comprehensive training modules and resources"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Route Optimization",
      description: "Efficient waste collection routes and scheduling tools"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Work Management",
      description: "Digital tools for tracking work assignments and progress"
    }
  ];

  const features = [
    "Digital work assignment system",
    "Real-time route tracking",
    "Performance analytics and feedback",
    "Safety protocol guidelines",
    "Emergency contact system",
    "Reward and recognition program"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Waste Workers Portal
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Empowering waste management professionals with digital tools, training, 
              and recognition for building a cleaner India.
            </p>
            <Button variant="hero" size="lg" className="mr-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Benefits for Waste Workers
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Join thousands of waste management professionals who are making a difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift card-gradient border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4">
                  Platform Features
                </CardTitle>
                <p className="text-muted-foreground">
                  Everything you need to excel in waste management
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="hero" size="lg" className="w-full md:w-auto max-w-sm mx-auto md:mx-0">
                    Join the Platform
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WasteWorkers;