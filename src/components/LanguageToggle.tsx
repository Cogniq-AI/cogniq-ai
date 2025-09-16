import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-foreground hover:text-primary flex items-center gap-1"
    >
      <Globe className="h-4 w-4" />
      <span className="text-xs font-medium">
        {language === 'nl' ? 'EN' : 'NL'}
      </span>
    </Button>
  );
};

export default LanguageToggle;