import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  DollarSign,
  Star,
  ArrowRight,
  Brain,
  Cpu,
  Target,
  Calendar,
  BarChart3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

interface RoadmapData {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  targetAudience: string;
  outcomes: string[];
  totalDurationMonths: number;
  modality: string;
  investment: string;
  certification: {
    award: string;
  };
  levels: number;
  image: string;
  icon: React.ReactNode;
  color: string;
  stats: {
    type: string;
    label: string;
  }[];
}

const roadmapsData: RoadmapData[] = [
  {
    id: "ia-leadership",
    title: "IA Aplicada para Liderazgo",
    subtitle: "Especialízate en liderazgo estratégico con Inteligencia Artificial",
    summary: "Conviértete en un líder estratégico en IA + negocio, capaz de diseñar, implementar y escalar iniciativas de IA en tu organización.",
    targetAudience: "Profesional de TI, negocio o gestión que desea liderar proyectos de IA",
    outcomes: [
      "Evaluar oportunidades de IA alineadas al negocio",
      "Diseñar un roadmap de IA para su empresa",
      "Liderar equipos multidisciplinarios en iniciativas de IA",
      "Gobernar la adopción de IA de forma ética y escalable"
    ],
    totalDurationMonths: 8,
    modality: "Virtual (Part-time, 10-15 horas semanales)",
    investment: "S/ 5,200 aprox.",
    certification: {
      award: "Diploma Especializado en IA para Líderes – Universidad de Lima"
    },
    levels: 4,
    image: "🤖",
    icon: <Brain className="w-8 h-8" />,
    color: "from-blue-600 to-purple-600",
    stats: [
      { type: "duration", label: "8 meses" },
      { type: "levels", label: "4 niveles" },
      { type: "outcome", label: "Liderazgo IA" }
    ]
  },
  {
    id: "iot-transformation",
    title: "Internet de las Cosas (IoT) / Transformación Digital",
    subtitle: "Domina el diseño e implementación de soluciones IoT",
    summary: "Desarrolla competencias para diseñar, implementar e integrar soluciones IoT que impulsen la transformación digital de empresas, servicios o industrias.",
    targetAudience: "Profesionales con conocimientos básicos en programación o electrónica que desean especializarse en IoT",
    outcomes: [
      "Diseñar y desplegar dispositivos conectados y sistemas IoT completos",
      "Construir arquitecturas IoT usando nube, edge y procesamiento de datos",
      "Garantizar seguridad, escalabilidad e integración de soluciones IoT",
      "Realizar un proyecto IoT real listo para producción"
    ],
    totalDurationMonths: 11,
    modality: "Part-time recomendado (10-15 horas semanales), con hardware y nube",
    investment: "S/ 4,800 aprox.",
    certification: {
      award: "Diploma Especializado en IoT y Transformación Digital – Universidad de Lima"
    },
    levels: 5,
    image: "🌐",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-teal-600 to-cyan-600",
    stats: [
      { type: "duration", label: "11 meses" },
      { type: "levels", label: "5 niveles" },
      { type: "outcome", label: "IoT Expert" }
    ]
  }
];

const RoadmapsPage = () => {
  const navigate = useNavigate();

  const getStatIcon = (type: string) => {
    switch (type) {
      case "duration":
        return <Clock className="w-4 h-4" />;
      case "levels":
        return <BarChart3 className="w-4 h-4" />;
      case "outcome":
        return <Target className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12 text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nuestros Roadmaps de Aprendizaje
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre rutas de aprendizaje especializadas diseñadas por expertos para transformar tu carrera profesional
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">+500 graduados</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Award className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">Certificados U. Lima</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Star className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium">4.9/5 rating</span>
            </div>
          </div>
        </motion.div>

        {/* Roadmaps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roadmapsData.map((roadmap, index) => (
              <motion.div
                key={roadmap.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                  {/* Header with Gradient */}
                  <div className={`bg-gradient-to-r ${roadmap.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          {roadmap.icon}
                        </div>
                        <div className="text-4xl">{roadmap.image}</div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{roadmap.title}</h2>
                      <p className="text-white/90">{roadmap.subtitle}</p>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-6">
                    {/* Stats */}
                    <div className="flex gap-3">
                      {roadmap.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                          <div className="text-gray-600">{getStatIcon(stat.type)}</div>
                          <span className="text-sm font-medium text-gray-800">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-gray-700 leading-relaxed">
                      {roadmap.summary}
                    </p>

                    {/* Key Points */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        Lo que lograrás:
                      </h4>
                      <div className="space-y-2">
                        {roadmap.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                      {roadmap.outcomes.length > 3 && (
                        <p className="text-sm text-gray-500 italic">+{roadmap.outcomes.length - 3} resultados más</p>
                      )}
                    </div>

                    {/* Target Audience */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900 mb-1">
                            Dirigido a:
                          </p>
                          <p className="text-sm text-blue-700">
                            {roadmap.targetAudience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{roadmap.totalDurationMonths} meses</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{roadmap.levels} niveles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{roadmap.investment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">Certificado</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => navigate(`/roadmap-${roadmap.id}`)}
                      className={`w-full bg-gradient-to-r ${roadmap.color} hover:opacity-90 text-white font-medium group flex items-center justify-center gap-2`}
                    >
                      Explorar Roadmap
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿No sabes cuál elegir?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Nuestros asesores te ayudarán a identificar el roadmap perfecto según tus objetivos,
                experiencia actual y metas profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Hablar con un asesor
                </Button>
                <Button variant="outline">
                  Ver todos los programas
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default RoadmapsPage;