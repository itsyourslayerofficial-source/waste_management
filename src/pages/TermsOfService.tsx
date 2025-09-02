import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertCircle, UserCheck } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-white/80">
                Terms and conditions for using the WATP India platform
              </p>
            </div>

            <div className="space-y-8">
              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <UserCheck className="h-6 w-6 text-primary" />
                    <CardTitle>User Responsibilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    By using WATP India, you agree to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Provide accurate and complete information</li>
                    <li>• Follow proper waste segregation guidelines</li>
                    <li>• Report waste issues truthfully and responsibly</li>
                    <li>• Respect other users and platform guidelines</li>
                    <li>• Comply with local waste management regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Scale className="h-6 w-6 text-primary" />
                    <CardTitle>Platform Usage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    WATP India provides waste management services subject to these conditions:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Services are available to residents of participating municipalities</li>
                    <li>• Collection schedules may vary based on local conditions</li>
                    <li>• Platform availability is subject to maintenance and updates</li>
                    <li>• Users must be 18 years or older, or have parental consent</li>
                    <li>• Account sharing or unauthorized access is prohibited</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-6 w-6 text-primary" />
                    <CardTitle>Prohibited Activities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The following activities are strictly prohibited:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Submitting false or misleading waste reports</li>
                    <li>• Attempting to hack or compromise platform security</li>
                    <li>• Using the platform for commercial waste without authorization</li>
                    <li>• Harassment or inappropriate behavior towards other users</li>
                    <li>• Violating any applicable laws or regulations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Service Availability</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Platform Access</h4>
                      <p>We strive for 99.9% uptime but cannot guarantee uninterrupted service.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Service Changes</h4>
                      <p>We may modify or discontinue services with appropriate notice.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Data Backup</h4>
                      <p>Users are responsible for backing up important data.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Support</h4>
                      <p>Technical support is available during business hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Liability and Disclaimer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    WATP India is provided "as is" without warranties. The Government of India and its 
                    partners are not liable for damages arising from platform use, except as required by law.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These terms are governed by Indian law. Any disputes will be resolved in Indian courts.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-white/60">
                <p>Last updated: January 2024</p>
                <p className="mt-2">
                  For questions about these terms, contact us at legal@watpindia.gov.in
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;