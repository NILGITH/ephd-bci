import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Heart,
  Users,
  Award,
  Target,
  Eye,
  UserCheck,
  History,
} from "lucide-react";
import Link from "next/link";

const leadership = [
  {
    name: "Dr. Djété Sandrine Ginette",
    position: "Directrice Générale",
    image: "/images/user-profile.svg",
    description: "20 ans d'expérience in management hospitalier",
  },
  {
    name: "Dr ODEHOURI-KOUDOU  Yannick DGA",
    position: "DGA",
    image: "/images/user-profile.svg",
    description: "Spécialiste en médecine interne",
  },
  {
    name: "Dr KOUAME Thérèse",
    position: "Médecin Chef",
    image: "/images/user-profile.svg",
    description: "Gynécologue-obstétricienne experte",
  },
  {
    name: "M. Paul KONE",
    position: "Administrateur Général",
    image: "/images/user-profile.svg",
    description: "Gestion administrative et financière",
  },
];

const values = [
  {
    icon: Heart,
    title: "Excellence médicale",
    description:
      "Nous nous engageons à fournir des soins de la plus haute qualité avec compassion et professionnalisme.",
  },
  {
    icon: Users,
    title: "Accessibilité pour tous",
    description:
      "Notre mission est de rendre les soins de santé accessibles à toute la communauté sans discrimination.",
  },
  {
    icon: Award,
    title: "Innovation continue",
    description:
      "Nous investissons dans les technologies modernes et la formation continue de notre personnel.",
  },
  {
    icon: Target,
    title: "Engagement communautaire",
    description:
      "Nous travaillons activement avec la communauté locale pour améliorer la santé publique.",
  },
];

// Variants pour les animations en cascade avec types corrects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <Layout currentPage="about">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
              À Propos de l'EPHD
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              L'Établissement Public Hospitalier Départemental de Bingerville,
              un pilier de la santé publique ivoirienne depuis plus de 70 ans.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Histoire Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-8">
                <History className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">
                  Notre Histoire
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Fondé en 1954, l'EPHD de Bingerville a été créé pour répondre
                  aux besoins sanitaires croissants de la région d'Abidjan.
                  Situé dans le quartier Blanchon, notre établissement a évolué
                  pour devenir un centre de référence départemental.
                </p>
                <p>
                  Au fil des décennies, nous avons constamment modernisé nos
                  équipements et renforcé notre expertise médicale. Notre
                  collaboration avec l'Hôpital psychiatrique de Bingerville et
                  l'Hôpital Mère-Enfant Dominique Ouattara témoigne de notre
                  engagement dans un écosystème de santé intégré.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de notre statut d'établissement
                  public, garant d'une mission de service public au cœur de nos
                  valeurs.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8">
                <img
                  src="/images/bingervillehospital.jpg"
                  alt="Façade EPHD Bingerville"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">70+</div>
                  <div className="text-sm text-gray-600">
                    Années d'excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 text-white h-full">
                <CardContent className="p-12">
                  <Target className="h-12 w-12 mb-6 text-blue-200" />
                  <h3 className="text-3xl font-bold mb-6">Notre Mission</h3>
                  <p className="text-lg leading-relaxed text-blue-100">
                    Fournir des soins de santé de qualité, accessibles et
                    humains à tous les patients, en mettant l'accent sur
                    l'excellence médicale, la sécurité des patients et
                    l'innovation continue dans nos pratiques.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-700 text-white h-full">
                <CardContent className="p-12">
                  <Eye className="h-12 w-12 mb-6 text-emerald-200" />
                  <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
                  <p className="text-lg leading-relaxed text-emerald-100">
                    Être reconnu comme l'établissement de santé de référence en
                    Côte d'Ivoire, alliant excellence clinique, innovation
                    technologique et approche humaine au service de la
                    communauté.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Nos Valeurs */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Les principes fondamentaux qui guident chacune de nos actions et
                définissent notre engagement envers nos patients et notre
                communauté.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div variants={itemVariants} key={index}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl group bg-gradient-to-br from-white to-gray-50/50 h-full">
                      <CardContent className="p-8 text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Équipe dirigeante */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">
                  Équipe Dirigeante
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Une équipe de professionnels expérimentés et dévoués, unis par
                la passion d'offrir des soins d'excellence.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {leadership.map((leader, index) => (
                <motion.div variants={itemVariants} key={index}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl overflow-hidden group bg-transparent relative h-96 [perspective:1000px]">
                    <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className="aspect-square w-full overflow-hidden mb-4">
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover transition-transform duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {leader.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-3">
                          {leader.position}
                        </p>
                      </div>
                      <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          Description
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {leader.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez notre mission de santé publique
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Découvrez comment nous pouvons vous accompagner dans vos besoins
              de santé avec nos services d'excellence et notre approche humaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                  Nos Services
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </Layout>
  );
}
