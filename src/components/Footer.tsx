import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "How it Works", href: "/about" },
      { name: "Training Center", href: "/training" },
      { name: "Report Waste", href: "/report" },
      { name: "Dashboard", href: "/dashboard" },
    ],
    roles: [
      { name: "Citizens", href: "/citizen" },
      { name: "Waste Workers", href: "/waste-workers" },
      { name: "Green Committee", href: "/green-committee" },
      { name: "Municipality", href: "/municipality-admin" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">WATP India</span>
                <span className="text-sm text-muted-foreground">Waste Accountability Portal</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              India's first comprehensive waste accountability and tracking portal. 
              Empowering citizens, workers, and municipalities to create a cleaner, 
              more sustainable future together.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@watpindia.gov.in</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ministry of Environment, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Role Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">For Users</h3>
            <ul className="space-y-3">
              {footerLinks.roles.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WATP India. All rights reserved. Government of India Initiative.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;