import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Vereiste velden ontbreken",
        description: "Vul alle verplichte velden in.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulier ingediend",
        description: "Neem contact op via hello@cogniqai.nl om uw bericht te versturen.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  const contactInfo = [
    { icon: MapPin, color: "text-blue-500" },
    { icon: Phone, color: "text-green-500" },
    { icon: Mail, color: "text-purple-500" },
    { icon: Clock, color: "text-orange-500" }
  ].map((info, i) => ({
    icon: info.icon,
    title: t(`contact.info.${i}.title`),
    details: i === 3 ? [t(`contact.info.${i}.detail.0`), t(`contact.info.${i}.detail.1`)] :
             i === 0 ? [t(`contact.info.${i}.detail.0`), t(`contact.info.${i}.detail.1`)] :
             [t(`contact.info.${i}.detail.0`)],
    color: info.color
  }));

  const offices = [{
    city: t('contact.office.0.city'),
    address: t('contact.office.0.address'),
    type: t('contact.office.0.type'),
    description: t('contact.office.0.description')
  }];

  return (
    <>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Neem <span className="gradient-text">Contact</span> Op
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Voornaam *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Achternaam *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Bedrijf</Label>
                  <Input 
                    id="company" 
                    placeholder="Uw bedrijfsnaam"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoon (optioneel)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+31 6 12345678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Onderwerp</Label>
                  <select 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="AI-oplossingen">AI-oplossingen</option>
                    <option value="Software ontwikkeling">Software ontwikkeling</option>
                    <option value="Data engineering">Data engineering</option>
                    <option value="Consultancy">Consultancy</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Bericht *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Vertel ons over uw project of uitdaging..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow group hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We respecteren uw privacy. Uw gegevens worden niet gedeeld met derden.
                </p>
              </form>
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
            <Button size="lg" variant="info" className="relative z-10">
              <span className="relative z-10">Meer veelgestelde vragen</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;