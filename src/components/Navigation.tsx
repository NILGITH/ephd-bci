
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage?: string;
}

const navigationItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
  { name: "Partenariats", href: "/partenariats" }
];

export default function Navigation({ currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const handleEmergencyCall = () => {
    window.open("tel:+225 05 54 08 92 32", "_self");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100/60 sticky top-0 z-50 shadow-sm shadow-blue-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group" 
            onClick={() => handleNavigation("/")}
          >
            <div className="w-24 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/HPHD.jpg" 
                alt="EPHD-B Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">EPHD-B</h1>
              <p className="text-sm text-blue-600 font-medium">Hôpital Général de Bingerville</p>
            </div> */}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <Button 
                key={item.name} 
                variant="ghost" 
                onClick={() => handleNavigation(item.href)}
                className={`text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 px-4 py-2 rounded-xl transition-all duration-200 font-medium ${
                  router.pathname === item.href ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Emergency Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button 
              onClick={handleEmergencyCall}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hidden sm:block text-sm font-semibold"
            >
              🚨 Urgences
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => handleNavigation(item.href)}
                className={`w-full text-left justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 rounded-xl transition-all duration-200 ${
                  router.pathname === item.href ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                {item.name}
              </Button>
            ))}
            <Button 
              onClick={handleEmergencyCall}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl shadow-md mt-4"
            >
              🚨 Urgences - Appeler maintenant
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
