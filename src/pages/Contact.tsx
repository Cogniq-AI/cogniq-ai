import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Hoofdkantoor",
      details: ["Rue de la Science 14", "1040 Brussels", "Belgium"],
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Telefoon",
      details: ["+32 2 123 45 67", "+32 2 123 45 68"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["info@b12-consulting.com", "sales@b12-consulting.com"],
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      details: ["Ma-Vr: 9:00-18:00", "Za-Zo: Gesloten"],
      color: "text-orange-500"
    }
  ];

  const offices = [
    {
      city: "Brussels",
      address: "Rue de la Science 14, 1040 Brussels",
      type: "Hoofdkantoor",
      description: "Ons hoofdkantoor in het hart van de Europese hoofdstad"
    },
    {
      city: "Antwerp",
      address: "Schoenmarkt 1, 2000 Antwerp",
      type: "Vestiging",
      description: "Onze nieuwe vestiging in de haven van Antwerpen"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Neem <span className="gradient-text">Contact</span> Op
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Klaar om uw AI-reis te beginnen? Laten we bespreken hoe we uw bedrijf kunnen transformeren met innovatieve technologie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="card-gradient shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Start uw project
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Vertel ons over uw uitdaging en wij nemen binnen 24 uur contact met u op.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Voornaam</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Achternaam</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@company.com"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Bedrijf</Label>
                <Input 
                  id="company" 
                  placeholder="Uw bedrijfsnaam"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefoon (optioneel)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+32 2 123 45 67"
                  className="bg-input border-border focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Onderwerp</Label>
                <select 
                  id="subject"
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Selecteer een onderwerp</option>
                  <option value="ai-solutions">AI-oplossingen</option>
                  <option value="software-development">Software ontwikkeling</option>
                  <option value="data-engineering">Data engineering</option>
                  <option value="consulting">Consultancy</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Anders</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Vertel ons over uw project of uitdaging..."
                  rows={5}
                  className="bg-input border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group">
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Verstuur bericht
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We respecteren uw privacy. Uw gegevens worden niet gedeeld met derden.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contactgegevens
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Heeft u vragen over onze diensten of wilt u meer informatie? 
                Neem gerust contact met ons op via een van onderstaande kanalen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth">
                    <CardContent className="pt-6">
                      <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                        <IconComponent className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Onze vestigingen</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="card-gradient shadow-card">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{office.city}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                      <p className="text-sm text-muted-foreground">{office.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center bg-card-gradient rounded-2xl p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-6">
            Veelgestelde vragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Hoe lang duurt een typisch AI-project?</h3>
              <p className="text-sm text-muted-foreground">
                Projectduur varieert van 3-12 maanden,afhankelijk van complexiteit en scope.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Bieden jullie ondersteuning na oplevering?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, we bieden uitgebreide ondersteuning en onderhoud voor alle onze oplossingen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Werken jullie met kleine bedrijven?</h3>
              <p className="text-sm text-muted-foreground">
                Absoluut! We werken met bedrijven van alle groottes, van startups tot multinationals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Wat zijn de kosten van een AI-project?</h3>
              <p className="text-sm text-muted-foreground">
                Kosten worden bepaald op basis van projectvereisten. Neem contact op voor een offerte.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Meer veelgestelde vragen
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;