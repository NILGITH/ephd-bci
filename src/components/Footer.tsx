import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
    { name: "Partenariats", href: "/partenariats" },
  ];

  const services = [
    "Médecine Générale",
    "Urgences 24h/24",
    "Maternité",
    "Laboratoire",
    "Cardiologie",
    "Radiologie",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();

  const handleEmergencyWhatsApp = () => {
    const phoneNumber = "2250554089232";
    const message = "Bonjour, j'ai une urgence médicale.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 flex flex-col lg:flex-row gap-12 text-center md:text-left">
          {/* About Section */}
          <div className="lg:w-1/2">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={
                    theme === "dark"
                      ? "/EPHD-B_logo_dark_mode.png"
                      : "/EPHD-B_logo_white_mode.png"
                  }
                  alt="EPHD-B Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  EPHD-B
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Établissement Public Hospitalier
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  Départemental de Bingerville
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              L'Établissement Public Hospitalier Départemental de Bingerville
              est un établissement de référence qui offre des soins de qualité
              depuis plus de 70 ans. Situé dans le quartier Blanchon, nous
              servons la communauté avec excellence et compassion.
            </p>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" />
                <span>Quartier Blanchon, Bingerville, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-emerald-500 flex-shrink-0" />
                <span>+225 05 54 08 92 32</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-blue-500 flex-shrink-0" />
                <span>hgbingerville@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Services Container */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-8">
            {/* Quick Links */}
            <div className="w-full sm:w-1/2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Liens Rapides
              </h4>
              <ul className="space-y-3 flex flex-col items-center md:items-start">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-normal justify-start"
                    >
                      {link.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="w-full sm:w-1/2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Nos Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="py-6 border-t border-gray-100 dark:border-slate-800 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/50 dark:to-orange-900/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-1">
                🚨 Urgences Médicales
              </h4>
              <p className="text-red-600 dark:text-red-400">
                Service d'urgences disponible 24h/24, 7j/7
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleEmergencyWhatsApp}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm font-semibold"
              >
                🚨 Urgences (WhatsApp)
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="lg:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center w-full">
            © 2025 EPHD-B. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
