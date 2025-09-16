import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StatsSection = () => {
  const stats = [
    {
      number: "95%",
      label: "klanttevredenheid",
      description: "Consistente waardering voor impact en samenwerking"
    },
    {
      number: "≤ 6",
      label: "weken tot prototype",
      description: "Van idee naar eerste werkende AI-oplossing in weken"
    },
    {
      number: "30 - 40%",
      label: "productiviteitsverbetering",
      description: "Aantoonbare efficiency-winst bij implementaties"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titel / Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Snel resultaat, hoge tevredenheid, meetbare impact
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We richten ons op wat ertoe doet: blije klanten, korte doorlooptijd en tastbare waarde.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-glow transition-smooth group-hover:scale-105">
                <span className="text-4xl font-black gradient-text select-none">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground capitalize">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Link to="/cases">
              Bekijk resultaten & cases
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
