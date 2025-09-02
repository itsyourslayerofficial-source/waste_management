import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Zap,
  Shield,
  Globe,
  Lightbulb,
  Recycle
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transparency & Accountability",
      description: "Real-time tracking ensures complete transparency in waste management operations."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Engagement",
      description: "Empowering citizens to actively participate in creating cleaner communities."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Technology",
      description: "AI-powered analytics and IoT integration for efficient waste management."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Environmental Impact",
      description: "Reducing carbon footprint through optimized collection routes and recycling."
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Technology Officer",
      expertise: "Environmental Engineering"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      expertise: "Waste Management Systems"
    },
    {
      name: "Amit Patel",
      role: "Community Outreach Lead",
      expertise: "Public Policy & Engagement"
    },
    {
      name: "Sneha Gupta",
      role: "Data Analytics Manager",
      expertise: "Environmental Data Science"
    }
  ];

  const achievements = [
    { metric: "50+", label: "Cities Connected" },
    { metric: "2.5M+", label: "Citizens Engaged" },
    { metric: "15,000+", label: "Waste Workers Trained" },
    { metric: "40%", label: "Waste Reduction Achieved" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <Badge variant="outline" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Heart className="h-3 w-3 mr-1" />
            Making India Cleaner
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-white font-extrabold">WATP India</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            The Waste Accountability & Tracking Portal is India's first comprehensive 
            digital platform designed to revolutionize waste management through 
            transparency, technology, and community participation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-gradient border-0 shadow-lg hover-lift animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create a transparent, accountable, and efficient waste management 
                  ecosystem that empowers every stakeholder - from citizens to municipal 
                  corporations - to contribute towards a cleaner, more sustainable India.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 shadow-lg hover-lift animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To establish India as a global leader in smart waste management, where 
                  technology drives transparency, communities actively participate, and 
                  environmental sustainability is at the heart of urban development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Why Choose WATP?</h2>
            <p className="text-xl text-muted-foreground">
              Discover the features that make us India's most trusted waste management platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-gradient border-0 shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Real numbers showcasing our contribution to India's cleanliness mission
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center card-gradient border-0 shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experts driving India's waste management transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center card-gradient border-0 shadow-md hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="card-gradient rounded-2xl p-12 shadow-xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Recycle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of India's largest waste management initiative and help build 
              a cleaner, more sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted transition-all duration-200 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;