import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-white/80">
                Your privacy and data security are our top priorities
              </p>
            </div>

            <div className="space-y-8">
              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <CardTitle>Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    WATP India collects information necessary to provide waste management services:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personal identification information (name, email, phone)</li>
                    <li>• Location data for waste collection services</li>
                    <li>• Waste reporting and tracking data</li>
                    <li>• Usage analytics to improve our platform</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <CardTitle>How We Protect Your Data</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We implement robust security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• End-to-end encryption for data transmission</li>
                    <li>• Secure servers with regular security audits</li>
                    <li>• Limited access to personal data on a need-to-know basis</li>
                    <li>• Regular data backup and recovery procedures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Data Sharing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Your data is shared only when necessary for service delivery:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• With municipal authorities for waste collection coordination</li>
                    <li>• With certified waste management partners</li>
                    <li>• Anonymized data for research and policy development</li>
                    <li>• We never sell personal data to third parties</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Your Rights</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Access & Control</h4>
                      <p>Request access to your personal data and control how it's used.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Data Deletion</h4>
                      <p>Request deletion of your personal data when no longer needed.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Corrections</h4>
                      <p>Update or correct your personal information at any time.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Portability</h4>
                      <p>Export your data in a standard format when requested.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-white/60">
                <p>Last updated: January 2024</p>
                <p className="mt-2">
                  For questions about this privacy policy, contact us at privacy@watpindia.gov.in
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

export default PrivacyPolicy;