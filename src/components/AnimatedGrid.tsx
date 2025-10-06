const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-60 dark:opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(190 95% 45% / 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(190 95% 45% / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-40 dark:opacity-100" style={{ background: 'hsl(190 95% 55% / 0.3)' }} />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-40 dark:opacity-100" style={{ background: 'hsl(280 85% 65% / 0.3)', animationDelay: '1s' }} />
      
      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full animate-float opacity-80"
          style={{
            background: i % 2 === 0 ? 'hsl(190 95% 45%)' : 'hsl(280 85% 55%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedGrid;
