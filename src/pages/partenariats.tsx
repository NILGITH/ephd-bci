
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Handshake,
  Users,
  Award,
  Building2,
  Globe,
  Target,
  ArrowRight,
  CheckCircle,
  UserCheck
} from "lucide-react";

const partnerships = [
  {
    name: "Hôpital Mère-Enfant Dominique Ouattara",
    type: "Partenariat Stratégique",
    description: "Collaboration pour l'amélioration des soins pédiatriques et maternels avec partage d'expertise et de ressources.",
    image: "/images/hopitalmereenfant.jpg",
    since: "2023",
    activities: [
      "Formation croisée du personnel",
      "Protocoles de soins communs",
      "Transfert de patients spécialisés",
      "Recherche collaborative"
    ],
    status: "Actif"
  },
  {
    name: "Hôpital Psychiatrique de Bingerville",
    type: "Partenariat Local",
    description: "Coopération pour une prise en charge holistique des patients nécessitant des soins psychiatriques.",
    image: "/images/hopitalpsychiatrique.jpg",
    since: "2019",
    activities: [
      "Consultations psychiatriques",
      "Suivi psychologique",
      "Urgences psychiatriques",
      "Programmes de réhabilitation"
    ],
    status: "Actif"
  },
  {
    name: "Ministère de la Santé et de l'Hygiène Publique",
    type: "Partenariat Institutionnel",
    description: "Collaboration officielle dans le cadre des politiques nationales de santé publique.",
    image: "/images/ministère.png",
    since: "2020",
    activities: [
      "Campagnes de vaccination",
      "Programmes de prévention",
      "Formation du personnel",
      "Politique de santé publique"
    ],
    status: "Actif"
  },
  {
    name: "ONG Médecins Sans Frontières",
    type: "Partenariat Humanitaire",
    description: "Collaboration pour les missions humanitaires et l'amélioration de l'accès aux soins.",
    image: "/images/medecin.jpg",
    since: "2022",
    activities: [
      "Missions médicales",
      "Formation spécialisée",
      "Don d'équipements",
      "Soins gratuits"
    ],
    status: "Actif"
  }
];

const communityActions = [
  {
    icon: Heart,
    title: "Campagnes de Santé Publique",
    description: "Organisation régulière de campagnes de dépistage et de prévention dans les communautés locales.",
    impact: "Plus de 2,000 personnes sensibilisées"
  },
  {
    icon: Users,
    title: "Dons de Médicaments",
    description: "Distribution gratuite de médicaments essentiels aux populations vulnérables.",
    impact: "500 familles bénéficiaires"
  },
  {
    icon: Award,
    title: "Formation Communautaire",
    description: "Programmes de formation en premiers secours et hygiène pour les leaders communautaires.",
    impact: "150 leaders formés"
  },
  {
    icon: Building2,
    title: "Projets Sociaux",
    description: "Participation active dans les projets de développement social du quartier Blanchon.",
    impact: "5 projets soutenus"
  }
];

const stats = [
  { number: "8", label: "Partenariats Actifs", icon: Handshake },
  { number: "5", label: "Années de collaboration", icon: Globe },
  { number: "15", label: "Projets communs", icon: Target },
  { number: "95%", label: "Taux de satisfaction", icon: CheckCircle }
];

export default function PartenariatsPage() {
  return (
    <Layout currentPage="partenariats">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Partenariats & Engagement Social
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Construire ensemble un système de santé fort et accessible pour tous, 
              à travers des collaborations stratégiques et un engagement communautaire constant.
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

      {/* Partenariats Stratégiques */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Handshake className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-4xl font-light text-gray-900">Nos Partenariats</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des collaborations stratégiques qui renforcent notre capacité à offrir 
              des soins de qualité et à servir notre communauté.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden bg-white"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={partnership.image}
                    alt={partnership.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white">
                      {partnership.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-800">
                      Depuis {partnership.since}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {partnership.name}
                      </CardTitle>
                      <Badge className="bg-blue-100 text-blue-800 mb-4">
                        {partnership.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {partnership.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Activités communes :</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {partnership.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Communautaire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <UserCheck className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-4xl font-light text-gray-900">Engagement Communautaire</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Au cœur de notre mission : servir et soutenir activement notre communauté 
              à travers des actions concrètes et impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityActions.map((action, index) => {
              const IconComponent = action.icon;
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
                      {action.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {action.description}
                    </p>
                    <div className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-sm font-medium">
                      {action.impact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Devenir Partenaire
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Vous représentez une organisation qui souhaite collaborer avec l'EPHD de Bingerville ? 
            Rejoignez notre réseau de partenaires engagés pour la santé communautaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Proposer un Partenariat
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Découvrir nos Actions
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
