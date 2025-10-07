import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();
  
  // Generate news items array from translations
  const newsItems = Array.from({ length: 6 }, (_, i) => ({
    title: t(`news.item.${i}.title`),
    excerpt: t(`news.item.${i}.excerpt`),
    date: t(`news.item.${i}.date`),
    author: t(`news.item.${i}.author`),
    category: t(`news.item.${i}.category`),
    readTime: t(`news.item.${i}.readTime`),
    featured: i === 0
  }));

  const categories = ["All", "Partnership", "Case Study", "Award", "Company News", "Event", "Research"];

  return (
    <>
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
                    <Button variant="info" className="group/btn relative z-10">
                      <span className="relative z-10">Lees meer</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 relative z-10" />
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
                <Button variant="info" className="w-full mt-4 group/btn relative z-10">
                  <span className="relative z-10">Lees meer</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 relative z-10" />
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
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:scale-105 transition-all">
              Abonneren
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default News;