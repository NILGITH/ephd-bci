
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
    { name: "Partenariats", href: "/partenariats" }
  ];

  const services = [
    "Médecine Générale",
    "Urgences 24h/24",
    "Maternité",
    "Laboratoire",
    "Cardiologie",
    "Radiologie"
  ];
    const [isOpen, setIsOpen] = useState(false);
  
  const handleEmergencyCall = () => {
    window.open("tel:+225 05 54 08 92 32", "_self");
  };

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/HPHD.jpg" 
                  alt="EPHD-B Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">EPHD-B</h3>
                <p className="text-sm text-blue-600 font-medium">Établissement Public Hospitalier</p>
                <p className="text-sm text-emerald-600 font-medium">Départemental de Bingerville</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              L'Établissement Public Hospitalier Départemental de Bingerville est un établissement 
              de référence qui offre des soins de qualité depuis plus de 70 ans. Situé dans le 
              quartier Blanchon, nous servons la communauté avec excellence et compassion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-3 text-blue-500" />
                <span>Quartier Blanchon, Bingerville, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-3 text-emerald-500" />
                <span>+225 05 54 08 92 32</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-3 text-blue-500" />
                <span>hgbingerville@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Button 
                    variant="ghost" 
                    className="h-auto p-0 text-gray-600 hover:text-blue-600 font-normal justify-start"
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-600 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="py-6 border-t border-gray-100 bg-gradient-to-r from-red-50 to-orange-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-red-800 mb-1">🚨 Urgences Médicales</h4>
              <p className="text-red-600">Service d'urgences disponible 24h/24, 7j/7</p>
            </div>
            <div className="flex items-center space-x-3">
            <Button 
              onClick={handleEmergencyCall}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hidden sm:block text-sm font-semibold"
            >
              🚨 +225 05 54 08 92 32
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
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              © 2025 EPHD-B. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <Button variant="ghost" className="h-auto p-0 text-gray-500 hover:text-blue-600">
                Mentions légales
              </Button>
              <span>•</span>
              <Button variant="ghost" className="h-auto p-0 text-gray-500 hover:text-blue-600">
                Politique de confidentialité
              </Button>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>Site mis à jour le 26 Août 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
