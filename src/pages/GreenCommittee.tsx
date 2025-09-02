import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TreePine, Users, BarChart3, Award, Target, CheckCircle } from "lucide-react";

const GreenCommittee = () => {
  const responsibilities = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Monitor Progress",
      description: "Track waste reduction and sustainability metrics across communities"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Engagement",
      description: "Organize awareness campaigns and educational programs"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Setting",
      description: "Set and achieve environmental targets and sustainability goals"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition Programs",
      description: "Recognize and reward best practices in waste management"
    }
  ];

  const tools = [
    "Real-time waste tracking dashboard",
    "Community engagement analytics",
    "Educational resource library",
    "Performance reporting tools",
    "Sustainability goal tracking",
    "Volunteer management system"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <TreePine className="h-16 w-16 text-accent mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Green Committee
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Leading environmental initiatives and driving sustainable waste management 
              practices in communities across India.
            </p>
            <Button variant="accent" size="lg" className="mr-4">
              Join Committee
            </Button>
            <Button variant="outline" size="lg">
              View Programs
            </Button>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Committee Responsibilities
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Leading change through education, monitoring, and community engagement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responsibilities.map((item, index) => (
                <Card key={index} className="hover-lift card-gradient border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4">
                  Committee Tools & Resources
                </CardTitle>
                <p className="text-muted-foreground">
                  Comprehensive tools for effective environmental leadership
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="accent" size="lg" className="w-full md:w-auto max-w-sm mx-auto md:mx-0">
                    Access Resources
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

export default GreenCommittee;