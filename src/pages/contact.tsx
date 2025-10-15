import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Building2,
  Users,
  FileText,
  Send,
  CheckCircle,
  Stethoscope,
  X,
  Menu,
  Loader2
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: [
      "Quartier Blanchon",
      "Bingerville",
      "District Autonome d'Abidjan",
      "Côte d'Ivoire",
    ],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Phone,
    title: "Téléphones",
    details: ["Standard: +225 05 54 08 92 32"],
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Mail,
    title: "Adresses Email",
    details: ["hgbingerville@yahoo.com"],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    details: [
      "Lun-Ven: 7h00 - 18h00",
      "Samedi: 8h00 - 16h00",
      "Dimanche: Urgences uniquement",
      "Urgences: 24h/24, 7j/7",
    ],
    color: "text-emerald-600 dark:text-emerald-400",
  },
];

const services = [
  {
    icon: Stethoscope,
    name: "Consultation Générale",
    description: "Prise de rendez-vous pour consultation",
  },
  {
    icon: Zap,
    name: "Urgences Médicales",
    description: "Information ou signalement d'urgence",
  },
  {
    icon: Users,
    name: "Recrutement",
    description: "Candidature spontanée ou réponse à annonce",
  },
  {
    icon: FileText,
    name: "Informations",
    description: "Demande de renseignements généraux",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({ 
          title: "Message envoyé !", 
          description: "Merci, nous vous répondrons dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", phone: "", service: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000); // Reset form view after 5s
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "Erreur", 
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleEmergencyWhatsApp = () => {
    const phoneNumber = "2250554089232";
    const message = "Bonjour, j'ai une urgence médicale.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Layout currentPage="contact">
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
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Nous sommes à votre écoute pour toutes vos questions, demandes
                de rendez-vous ou informations sur nos services.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Quick Services */}
      <AnimatedSection>
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Comment pouvons-nous vous aider ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Sélectionnez le service qui correspond à votre besoin
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div variants={itemVariants} key={index}>
                    <Card className="bg-white dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl cursor-pointer group h-full">
                      <CardContent className="p-6 text-center">
                        <div className="bg-gradient-to-br from-blue-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Send className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  Contactez-nous
                </h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Remplissez le formulaire ci-dessous ou contactez-nous
                directement pour toute demande d'information.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="border-0 shadow-xl rounded-2xl bg-white dark:bg-slate-800">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Envoyez-nous un message
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Message envoyé !
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Merci pour votre message. Notre équipe vous contactera
                          sous 24 heures.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="dark:text-gray-300">Nom complet *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-1 bg-white dark:bg-slate-700"
                              required
                              disabled={isLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="dark:text-gray-300">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="mt-1 bg-white dark:bg-slate-700"
                              required
                              disabled={isLoading}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone" className="dark:text-gray-300">Téléphone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="mt-1 bg-white dark:bg-slate-700"
                              disabled={isLoading}
                            />
                          </div>
                          <div>
                            <Label htmlFor="service" className="dark:text-gray-300">Service concerné</Label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="mt-1 w-full px-3 py-2 border border-gray-300 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              disabled={isLoading}
                            >
                              <option value="">Sélectionner un service</option>
                              <option value="consultation">Consultation</option>
                              <option value="urgences">Urgences</option>
                              <option value="recrutement">Recrutement</option>
                              <option value="information">
                                Information générale
                              </option>
                              <option value="autre">Autre</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="subject" className="dark:text-gray-300">Objet *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 bg-white dark:bg-slate-700"
                            required
                            disabled={isLoading}
                          />
                        </div>

                        <div>
                          <Label htmlFor="message" className="dark:text-gray-300">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="mt-1 bg-white dark:bg-slate-700"
                            required
                            disabled={isLoading}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Envoyer le message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div variants={itemVariants} key={index}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white dark:bg-slate-800 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div
                              className={`p-3 rounded-xl bg-gradient-to-br ${
                                info.color.includes("blue") 
                                  ? "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50" 
                                  : "from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${info.color}`}
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                {info.title}
                              </h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-gray-600 dark:text-gray-400">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection>
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Nous trouver
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                EPHD de Bingerville, Quartier Blanchon, Bingerville, Côte
                d'Ivoire
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.64825964096!2d-3.951559125555543!3d5.368688535282246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc191a2082a7f53%3A0x6b801a629b3a5a41!2sEPHD%20de%20Bingerville!5e0!3m2!1sfr!2sci!4v1719266579601!5m2!1sfr!2sci"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:grayscale"
                ></iframe>
              </Card>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Emergency Contact */}
      <AnimatedSection>
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-50"></div>
          <motion.div
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Zap className="h-16 w-16 mx-auto mb-6 text-red-200" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Urgences Médicales
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-red-100 mb-8 leading-relaxed"
            >
              En cas d'urgence médicale, contactez immédiatement notre service
              d'urgences
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={handleEmergencyWhatsApp}
                className="bg-white hover:bg-gray-200 text-red-600 px-8 py-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-lg font-semibold"
              >
                🚨 Urgences (WhatsApp)
              </Button>
              
              <Link href="https://www.google.com/maps/dir//Hôpital+Général+de+Bingerville+9467%2B4PH+Bingerville/@5.3603125,-3.8856406,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfc1f2eaae9b8d3d:0xfa3287a75ddb7801!2m2!1d-3.8856406!2d5.3603125?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold transition-all duration-200 text-lg"
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  Se rendre aux urgences
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}