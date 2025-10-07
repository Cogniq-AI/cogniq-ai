import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="mb-6 text-6xl sm:text-8xl font-black gradient-text">404</h1>
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-foreground">Pagina niet gevonden</h2>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">
          De pagina die u zoekt bestaat niet of is verplaatst.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-glow font-medium"
        >
          Terug naar Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
