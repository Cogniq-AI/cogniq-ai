import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "Over ons", path: "/over-ons" },
      { name: "Team", path: "/team" },
      { name: "Carrière", path: "/carriere" },
      { name: "Nieuws", path: "/nieuws" }
    ],
    services: [
      { name: "AI-oplossingen", path: "/diensten" },
      { name: "Software ontwikkeling", path: "/diensten" },
      { name: "Data engineering", path: "/diensten" },
      { name: "Consultancy", path: "/diensten" }
    ],
    sectors: [
      { name: "Gezondheidszorg", path: "/sectoren" },
      { name: "Energie", path: "/sectoren" },
      { name: "Farmaceutisch", path: "/sectoren" },
      { name: "Transport", path: "/sectoren" }
    ],
    legal: [
      { name: "Privacy beleid", path: "/privacy" },
      { name: "Algemene voorwaarden", path: "/voorwaarden" },
      { name: "Cookies", path: "/cookies" },
      { name: "GDPR", path: "/gdpr" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="text-3xl font-black gradient-text">Morrava AI</div>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Morrava AI transformeert bedrijven met innovatieve AI-oplossingen. 
                Van strategie tot implementatie, wij zijn uw betrouwbare partner in de AI-revolutie.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  Rue de la Science 14, 1040 Brussels
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  +32 2 123 45 67
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  info@morrava-ai.com
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Bedrijf</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Diensten</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors Links */}
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Sectoren</h3>
              <ul className="space-y-2">
                {footerLinks.sectors.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Morrava AI. Alle rechten voorbehouden.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20 transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {footerLinks.legal.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="text-xs text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;