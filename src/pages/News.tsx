import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      title: "B12 Consulting breidt AI-expertise uit met nieuwe partnerships",
      excerpt: "Nieuwe samenwerkingen met toonaangevende technologiepartners versterken onze capaciteit om innovatieve AI-oplossingen te leveren.",
      date: "15 maart 2024",
      author: "Sarah Johnson",
      category: "Partnership",
      readTime: "3 min",
      featured: true
    },
    {
      title: "Succesvolle implementatie van AI-monitoring systeem voor MIVB",
      excerpt: "Het nieuwe bewakingssysteem voor bovenleidingen verhoogt de betrouwbaarheid van het Brusselse tramnetwerk aanzienlijk.",
      date: "28 februari 2024",
      author: "Marc Dubois",
      category: "Case Study",
      readTime: "5 min",
      featured: false
    },
    {
      title: "B12 wint AI Innovation Award 2024",
      excerpt: "Onze innovatieve aanpak in healthcare AI wordt erkend met prestigieuze industrie award.",
      date: "12 februari 2024",
      author: "Elena Rodriguez",
      category: "Award",
      readTime: "2 min",
      featured: false
    },
    {
      title: "Nieuwe kantooropening in Antwerpen",
      excerpt: "Uitbreiding van ons team en dienstverlening met een nieuwe vestiging in het hart van de Vlaamse technologie-hub.",
      date: "5 februari 2024",
      author: "Thomas Mueller",
      category: "Company News",
      readTime: "4 min",
      featured: false
    },
    {
      title: "Gratis AI Workshop Series voor bedrijven",
      excerpt: "Leer hoe AI uw bedrijfsprocessen kan transformeren in onze nieuwe workshop serie voor Nederlandse en Belgische ondernemers.",
      date: "20 januari 2024",
      author: "Sophie Laurent",
      category: "Event",
      readTime: "3 min",
      featured: false
    },
    {
      title: "Onderzoeksresultaten gepubliceerd in Nature AI",
      excerpt: "Ons onderzoek naar ethische AI-implementatie wordt internationaal erkend en gepubliceerd in toonaangevend wetenschappelijk tijdschrift.",
      date: "8 januari 2024",
      author: "Ahmed Hassan",
      category: "Research",
      readTime: "6 min",
      featured: false
    }
  ];

  const categories = ["All", "Partnership", "Case Study", "Award", "Company News", "Event", "Research"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nieuws & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blijf op de hoogte van onze laatste projecten, partnerships en innovaties in de wereld van AI.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "bg-primary hover:bg-primary/90" : "border-border hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {newsItems.filter(item => item.featured).map((item, index) => (
          <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth mb-12 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="text-center">
                  <Badge className="mb-4 bg-accent text-accent-foreground">Featured</Badge>
                  <div className="text-4xl font-bold gradient-text mb-2">AI</div>
                  <div className="text-2xl font-bold gradient-text">NEWS</div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {item.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {item.author} • {item.readTime} read
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                      Lees meer
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.filter(item => !item.featured).map((item, index) => (
            <Card key={index} className="card-gradient shadow-card hover:shadow-glow transition-smooth group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {item.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                  <span className="text-sm text-muted-foreground">{item.readTime}</span>
                </div>
                <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary/80 group">
                  Lees meer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-card-gradient rounded-2xl p-12 shadow-card">
          <h2 className="text-3xl font-bold mb-6">
            Blijf op de hoogte
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ontvang onze nieuwsbrief en mis geen enkel update over AI innovaties en bedrijfsinzichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
              Abonneren
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;