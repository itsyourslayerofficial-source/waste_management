import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Building,
  Users,
  Truck
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "support@watp.gov.in",
      subvalue: "info@watp.gov.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 11 2345 6789",
      subvalue: "Toll-free: 1800 123 4567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "WATP Headquarters",
      subvalue: "New Delhi, India 110001"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Support Hours",
      value: "24/7 Online Support",
      subvalue: "Call Center: 9 AM - 6 PM"
    }
  ];

  const departments = [
    {
      title: "Citizen Support",
      description: "Help with reporting, training, and general inquiries",
      icon: <Users className="h-6 w-6" />,
      email: "citizens@watp.gov.in"
    },
    {
      title: "Municipal Services",
      description: "For city administrators and government officials",
      icon: <Building className="h-6 w-6" />,
      email: "municipal@watp.gov.in"
    },
    {
      title: "Worker Support",
      description: "Assistance for waste collection and processing teams",
      icon: <Truck className="h-6 w-6" />,
      email: "workers@watp.gov.in"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // You would typically show a success message here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
            <MessageCircle className="h-3 w-3 mr-1" />
            We're Here to Help
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Have questions about waste management, need technical support, or want to 
            partner with us? Our team is ready to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="text-center card-gradient border-0 shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  <p className="text-sm text-primary font-medium">{info.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{info.subvalue}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          className="transition-all duration-200 focus:scale-105"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          className="transition-all duration-200 focus:scale-105"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="transition-all duration-200 focus:scale-105"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger className="transition-all duration-200 focus:scale-105">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="citizen">Citizen Support</SelectItem>
                          <SelectItem value="municipal">Municipal Services</SelectItem>
                          <SelectItem value="worker">Worker Support</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnerships</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        className="transition-all duration-200 focus:scale-105"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        className="transition-all duration-200 focus:scale-105"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full transition-all duration-200 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Departments */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold mb-6">Department Directory</h2>
              
              {departments.map((dept, index) => (
                <Card 
                  key={index} 
                  className="card-gradient border-0 shadow-md hover-lift animate-scale-in"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {dept.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{dept.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          <Mail className="h-3 w-3 mr-1" />
                          {dept.email}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency Contact */}
              <Card className="border-destructive/20 bg-destructive/5 animate-scale-in" style={{ animationDelay: '500ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-destructive mb-2">Emergency Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        For urgent waste management emergencies or public health concerns
                      </p>
                      <Badge className="bg-destructive text-destructive-foreground">
                        Emergency Hotline: 108
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;