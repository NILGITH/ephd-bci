
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  Users,
  Building2,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Award,
  Stethoscope
} from "lucide-react";

const carouselSlides = [
  {
    image: "/images/hopitalimg.jpg",
    title: "Votre santé, notre priorité",
    subtitle: "EPHD de Bingerville - Excellence en soins hospitaliers",
    description: "Un établissement public de référence au service de votre bien-être"
  },
  {
    image: "/images/soins.jpg",
    title: "Soins de qualité",
    subtitle: "Maternité et services spécialisés",
    description: "Des équipements modernes pour votre sécurité et votre confort"
  },
  {
    image: "/images/engagementcommunautaire.jpg",
    title: "Engagement communautaire",
    subtitle: "Actions sociales et partenariats",
    description: "Au cœur de la communauté, pour tous et avec tous"
  },
  {
    image: "/images/reconnaissance.jpg",
    title: "Reconnaissance officielle",
    subtitle: "Visites ministérielles et événements",
    description: "Un établissement reconnu pour son excellence"
  },
  {
    image: "/images/equipes.jpg",
    title: "Équipe d'excellence",
    subtitle: "Formation continue et expertise",
    description: "Des professionnels dévoués à votre service"
  }
];

const services = [
  {
    icon: Stethoscope,
    title: "Médecine Générale",
    description: "Consultations et soins médicaux de première ligne"
  },
  {
    icon: Heart,
    title: "Urgences 24h/24",
    description: "Prise en charge immédiate des urgences médicales"
  },
  {
    icon: Users,
    title: "Maternité",
    description: "Suivi de grossesse et accouchements sécurisés"
  },
  {
    icon: Building2,
    title: "Laboratoire",
    description: "Analyses médicales et examens complémentaires"
  }
];

const stats = [
  { number: "1954", label: "Année de création", icon: Calendar },
  { number: "150+", label: "Personnel médical", icon: Users },
  { number: "24h/24", label: "Service d'urgences", icon: Clock },
  { number: "5★", label: "Excellence reconnue", icon: Award }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <Layout currentPage="accueil">
      {/* Hero Carousel Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="relative h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-105"
              }`}
            >
              <div 
                className="h-full bg-cover  bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60  "></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-6">
                    <h2 className="text-5xl md:text-6xl font-light mb-4 tracking-wide">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-6 text-blue-100 font-medium">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-white mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Nos Services d'Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              L'EPHD de Bingerville offre une gamme complète de services médicaux 
              avec une approche centrée sur le patient et des standards de qualité élevés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/30 rounded-2xl overflow-hidden group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold mb-12 text-center">Témoignages de nos patients</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="p-6 bg-white/10 rounded-2xl">
        <p className="text-blue-100 text-sm mb-4">
          “Merci pour le professionnalisme de l’équipe médicale.”
        </p>
        <h3 className="font-semibold">Mme Adjoua</h3>
      </div>

      <div className="p-6 bg-white/10 rounded-2xl">
        <p className="text-blue-100 text-sm mb-4">
          “Accueil chaleureux et soins rapides aux urgences.”
        </p>
        <h3 className="font-semibold">M. Konan</h3>
      </div>

      <div className="p-6 bg-white/10 rounded-2xl">
        <p className="text-blue-100 text-sm mb-4">
          “Suivi excellent après mon hospitalisation.”
        </p>
        <h3 className="font-semibold">Mme Yao</h3>
      </div>

      <div className="p-6 bg-white/10 rounded-2xl">
        <p className="text-blue-100 text-sm mb-4">
          “Service de qualité et personnels très disponibles.”
        </p>
        <h3 className="font-semibold">M. Bamba</h3>
      </div>
    </div>
  </div>
</section>

    </Layout>
  );
}
