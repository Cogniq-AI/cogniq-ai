import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StatsSection = () => {
  const stats = [
    {
      number: "12+",
      label: "jarenlange ervaring",
      description: "Expertise in AI en machine learning"
    },
    {
      number: "400+",
      label: "afgeronde projecten",
      description: "Succesvolle implementaties"
    },
    {
      number: "40+",
      label: "in-house experts",
      description: "Gespecialiseerd team"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ons team van meer dan 40 experts is gespecialiseerd in het omzetten van uw meest complexe uitdagingen in innovatieve, AI-gestuurde oplossingen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-glow transition-smooth group-hover:scale-105">
                <span className="text-4xl font-black gradient-text">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Link to="/team">
              Maak kennis met het team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;