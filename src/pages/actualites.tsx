import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Calendar,
  Clock,
  Users,
  Award,
  Camera,
  ExternalLink,
  BookOpen,
  Stethoscope,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const actualites = [
  {
    id: 1,
    title:
      "Visite Ministérielle : Le Ministre de la Santé inaugure le nouveau service de cardiologie",
    excerpt:
      "Une visite officielle marque l'ouverture du service de cardiologie moderne de l'EPHD de Bingerville.",
    content:
      "Le Ministre de la Santé et de l'Hygiène Publique a officiellement inauguré le nouveau service de cardiologie de l'EPHD de Bingerville. Cette inauguration marque une étape importante dans l'amélioration de l'offre de soins cardiovasculaires dans la région d'Abidjan. Le service dispose d'équipements de dernière génération et d'une équipe de cardiologues expérimentés.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.sogdWduh_pUhFsDFLpnZLwHaE8?pid=Api",
    date: "15 Décembre 2024",
    category: "Événement Officiel",
    author: "Direction de la Communication",
    featured: true,
  },
  {
    id: 2,
    title:
      "Formation sur la prise en charge des brûlures : Renforcement des compétences",
    excerpt:
      "L'équipe médicale de l'EPHD participe à une formation spécialisée sur le traitement des brûlures graves.",
    content:
      "Une formation intensive sur la prise en charge des brûlures a été organisée pour l'ensemble du personnel médical et paramédical. Cette formation, animée par des experts internationaux, vise à améliorer les techniques de soins d'urgence et de suivi des patients victimes de brûlures. Cette initiative s'inscrit dans notre démarche d'amélioration continue de la qualité des soins.",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.VIrw9JO93jzCa4M38SJbQQHaEK?pid=Api",
    date: "8 Décembre 2024",
    category: "Formation",
    author: "Service Formation",
    featured: false,
  },
  {
    id: 3,
    title:
      "Don de médicaments : L'EPHD au cœur de l'action sociale communautaire",
    excerpt:
      "Une campagne de distribution gratuite de médicaments essentiels pour les populations vulnérables.",
    content:
      "Dans le cadre de son engagement social, l'EPHD de Bingerville a organisé une grande campagne de distribution gratuite de médicaments essentiels aux familles défavorisées du quartier Blanchon et des environs. Cette initiative, menée en partenariat avec des ONG locales, a permis de toucher plus de 500 familles. L'hôpital réaffirme ainsi sa mission de service public et son engagement envers la communauté.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.CHumu4Yy3rMHiK2USdc5hQHaFj?pid=Api",
    date: "25 Novembre 2024",
    category: "Action Sociale",
    author: "Service Social",
    featured: false,
  },
  {
    id: 4,
    title:
      "Modernisation du laboratoire : Nouveaux équipements d'analyses médicales",
    excerpt:
      "Investissement majeur dans l'équipement du laboratoire pour des analyses plus rapides et précises.",
    content:
      "L'EPHD de Bingerville vient d'acquérir de nouveaux équipements d'analyses médicales de dernière génération. Ces investissements permettent d'offrir des résultats plus rapides et plus précis à nos patients. Le laboratoire peut désormais traiter un plus grand volume d'échantillons et proposer de nouveaux types d'analyses spécialisées, améliorant significativement notre capacité diagnostique.",
    image: "/images/images.jpg",
    date: "10 Novembre 2024",
    category: "Équipement",
    author: "Direction Technique",
    featured: true,
  },
  {
    id: 5,
    title: "Campagne de vaccination COVID-19 : Mobilisation générale",
    excerpt:
      "L'EPHD organise une campagne de vaccination élargie pour protéger la population locale.",
    content:
      "Face aux défis sanitaires actuels, l'EPHD de Bingerville a lancé une campagne de vaccination COVID-19 élargie. Des équipes mobiles se déploient dans les quartiers pour faciliter l'accès à la vaccination. Cette initiative vise à atteindre une couverture vaccinale optimale et à protéger l'ensemble de la communauté, particulièrement les personnes vulnérables.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
    date: "28 Octobre 2024",
    category: "Santé Publique",
    author: "Service Épidémiologie",
    featured: false,
  },
];

const categories = [
  {
    name: "Tous",
    count: actualites.length,
    color: "bg-gray-100 text-gray-800",
  },
  { name: "Événement Officiel", count: 1, color: "bg-blue-100 text-blue-800" },
  { name: "Formation", count: 1, color: "bg-emerald-100 text-emerald-800" },
  { name: "Action Sociale", count: 1, color: "bg-orange-100 text-orange-800" },
  { name: "Équipement", count: 1, color: "bg-purple-100 text-purple-800" },
  { name: "Santé Publique", count: 1, color: "bg-red-100 text-red-800" },
  { name: "Partenariat", count: 1, color: "bg-indigo-100 text-indigo-800" },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ActualitesPage() {
  const featuredArticles = actualites.filter((article) => article.featured);
  const regularArticles = actualites.filter((article) => !article.featured);

  return (
    <Layout currentPage="actualites">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
                Actualités
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Suivez l'actualité de l'EPHD de Bingerville : événements,
                formations, innovations et engagements communautaires.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories Filter */}
      <AnimatedSection>
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {categories.map((category) => (
                <motion.div key={category.name} variants={itemVariants}>
                  <Badge
                    className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-pointer px-4 py-2 text-sm font-medium`}
                  >
                    {category.name} ({category.count})
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Articles */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex items-center mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Award className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Articles à la Une
              </h2>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {featuredArticles.map((article) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group bg-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white">
                          <Award className="h-3 w-3 mr-1" />À la Une
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {article.date}
                        <span className="mx-2">•</span>
                        <Users className="h-4 w-4 mr-2" />
                        {article.author}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                      <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
                        Lire la suite
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* All Articles */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex items-center mb-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <BookOpen className="h-8 w-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Toutes les Actualités
              </h2>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.07 } },
              }}
            >
              {regularArticles.map((article) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group bg-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={`${
                            article.category === "Formation"
                              ? "bg-emerald-100 text-emerald-800"
                              : article.category === "Action Sociale"
                              ? "bg-orange-100 text-orange-800"
                              : article.category === "Équipement"
                              ? "bg-purple-100 text-purple-800"
                              : article.category === "Santé Publique"
                              ? "bg-red-100 text-red-800"
                              : article.category === "Partenariat"
                              ? "bg-indigo-100 text-indigo-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      >
                        Lire plus
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter Signup */}
      <AnimatedSection>
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-50"></div>
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, duration: 0.6 },
              },
            }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Restez informés de nos actualités
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Inscrivez-vous à notre newsletter pour recevoir nos dernières
              nouvelles, événements et informations de santé publique.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                S'abonner
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}
