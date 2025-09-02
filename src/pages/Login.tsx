import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LogIn, UserPlus, Mail, Lock, User, Phone } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-32 flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full mx-4 animate-fade-in-up">
          <Card className="card-gradient border-0 shadow-xl hover-lift">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Welcome to WATP</CardTitle>
              <CardDescription className="text-muted-foreground">
                Join India's waste management revolution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login" className="transition-all duration-200">Login</TabsTrigger>
                  <TabsTrigger value="register" className="transition-all duration-200">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4 animate-scale-in">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-200 hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </TabsContent>
                
                <TabsContent value="register" className="space-y-4 animate-scale-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          placeholder="First name"
                          className="pl-10 transition-all duration-200 focus:scale-105"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        className="transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="regEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regPassword">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="regPassword"
                        type="password"
                        placeholder="Create a password"
                        className="pl-10 transition-all duration-200 focus:scale-105"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-200 hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                    <UserPlus className="ml-2 h-4 w-4" />
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;