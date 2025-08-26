
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Stethoscope,
  Users,
  Building2,
  Activity,
  Baby,
  Microscope,
  Zap,
  Clock,
  Shield,
  UserCheck,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Médecine Générale",
    description: "Consultations médicales pour tous types de pathologies avec une approche globale du patient",
    features: [
      "Consultation adulte et pédiatrique",
      "Suivi des maladies chroniques", 
      "Médecine préventive",
      "Orientation spécialisée"
    ],
    hours: "Lun-Ven: 7h00 - 17h00",
    emergency: false
  },
  {
    icon: Zap,
    title: "Service d'Urgences",
    description: "Prise en charge immédiate 24h/24 et 7j/7 de toutes les urgences médicales et chirurgicales",
    features: [
      "Accueil d'urgence permanent",
      "Équipe médicale spécialisée",
      "Plateau technique complet",
      "Réanimation d'urgence"
    ],
    hours: "24h/24 - 7j/7",
    emergency: true
  },
  {
    icon: Baby,
    title: "Maternité",
    description: "Accompagnement complet de la grossesse avec des conditions optimales pour l'accouchement",
    features: [
      "Suivi prénatal complet",
      "Accouchements physiologiques",
      "Césariennes programmées",
      "Soins néonataux"
    ],
    hours: "24h/24 - 7j/7",
    emergency: true
  },
  {
    icon: Microscope,
    title: "Laboratoire",
    description: "Analyses biologiques complètes avec des équipements de dernière génération",
    features: [
      "Analyses sanguines complètes",
      "Microbiologie et parasitologie",
      "Biochimie clinique",
      "Sérologie et immunologie"
    ],
    hours: "Lun-Sam: 6h00 - 16h00",
    emergency: false
  },
  {
    icon: Activity,
    title: "Cardiologie",
    description: "Diagnostic et traitement des pathologies cardiovasculaires avec plateau technique moderne",
    features: [
      "Électrocardiogrammes (ECG)",
      "Échocardiographie",
      "Tests d'effort",
      "Holter ECG et tensionnel"
    ],
    hours: "Lun-Ven: 8h00 - 16h00",
    emergency: false
  },
  {
    icon: Building2,
    title: "Radiologie",
    description: "Imagerie médicale complète pour un diagnostic précis et rapide",
    features: [
      "Radiographie conventionnelle",
      "Échographie générale",
      "Scanner (tomodensitométrie)",
      "Mammographie"
    ],
    hours: "Lun-Sam: 7h00 - 17h00",
    emergency: false
  }
];

const specialties = [
  {
    icon: Users,
    title: "Pédiatrie",
    description: "Soins spécialisés pour enfants et adolescents"
  },
  {
    icon: UserCheck,
    title: "Chirurgie Générale",
    description: "Interventions chirurgicales diverses en ambulatoire et hospitalisation"
  },
  {
    icon: Heart,
    title: "Médecine Interne",
    description: "Prise en charge des pathologies complexes et maladies systémiques"
  },
  {
    icon: Shield,
    title: "Médecine Préventive",
    description: "Programmes de prévention et de dépistage"
  }
];

const stats = [
  { number: "15,000+", label: "Consultations/an", icon: Calendar },
  { number: "2,400+", label: "Urgences/an", icon: Zap },
  { number: "800+", label: "Naissances/an", icon: Baby },
  { number: "12,000+", label: "Examens/an", icon: Microscope }
];

export default function ServicesPage() {
  return (
    <Layout currentPage="services">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Une gamme complète de services médicaux avec des équipements modernes 
              et une équipe de professionnels dévoués à votre bien-être.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Principaux */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Services Principaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos départements spécialisés offrent des soins de qualité 
              avec une approche personnalisée pour chaque patient.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden bg-white"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                        service.emergency 
                          ? "bg-gradient-to-br from-red-500 to-orange-500" 
                          : "bg-gradient-to-br from-blue-500 to-emerald-500"
                      }`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.hours}
                          </div>
                          {service.emergency && (
                            <div className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-medium">
                              URGENCES
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Services inclus :</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécialités Complémentaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Spécialités Complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des services spécialisés pour répondre aux besoins spécifiques 
              de nos patients avec expertise et bienveillance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl group bg-gradient-to-br from-white to-gray-50/30"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {specialty.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Informations Pratiques</h2>
            <p className="text-blue-100 text-lg">
              Pour faciliter votre venue et optimiser votre prise en charge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <Calendar className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Rendez-vous</h3>
                <p className="text-blue-100 text-sm">
                  Consultations sur rendez-vous<br />
                  Tél: +225 05 54 08 92 32
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <Shield className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Assurances</h3>
                <p className="text-blue-100 text-sm">
                  CMU, CNPS, Mutuelles<br />
                  Règlement comptant accepté
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <Zap className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Urgences</h3>
                <p className="text-blue-100 text-sm">
                  24h/24 - 7j/7<br />
                  Accès direct sans rendez-vous
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
