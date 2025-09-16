const PartnersSection = () => {
  const partners = [
    "AI4Belgium",
    "Agoria", 
    "Digital Wallonia",
    "Reacfin",
    "BioWin",
    "Tweed",
    "B19",
    "Cercle du Lac",
    "INFOPOLE"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Verenigingen en bedrijven waar we met trots mee samenwerken
          </h2>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-smooth cursor-pointer group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:from-primary/20 group-hover:to-accent/20 transition-smooth">
                  <span className="text-xs font-bold gradient-text">
                    {partner.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            En vele andere innovatieve partners in AI en technologie
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;