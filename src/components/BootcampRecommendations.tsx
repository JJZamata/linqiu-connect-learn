import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Users,
  DollarSign,
  BookOpen,
  ArrowRight,
  Star,
  CheckCircle2,
  Calendar
} from "lucide-react";
import bootcampData from "@/assets/bootcamp-recommendations.json";

interface BootcampPrice {
  original: string;
  installments: string;
}

interface Bootcamp {
  name: string;
  duration: string;
  modality: string;
  price: BootcampPrice;
  description: string;
}

interface LevelData {
  levelInfo: {
    stage: string;
    topics: string[];
  };
  bootcamps: Bootcamp[];
}

interface BootcampRecommendationsProps {
  levelId: string;
}

const BootcampRecommendations = ({ levelId }: BootcampRecommendationsProps) => {
  const levelData = (bootcampData as Record<string, LevelData>)[levelId];

  if (!levelData) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No se encontraron bootcamps para este nivel.</p>
      </div>
    );
  }

  const getModalityColor = (modality: string) => {
    switch (modality.toLowerCase()) {
      case "virtual":
        return "bg-blue-100 text-blue-800";
      case "híbrido":
        return "bg-purple-100 text-purple-800";
      case "presencial":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Level Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <Badge variant="secondary" className="text-sm px-4 py-2">
          {levelData.levelInfo.stage}
        </Badge>
        <h2 className="text-2xl font-bold text-gray-900">
          Bootcamps Recomendados
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Programas especializados que complementan tu formación en{' '}
          <span className="font-semibold">{levelData.levelInfo.stage.toLowerCase()}</span>
        </p>
      </motion.div>

      {/* Bootcamps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levelData.bootcamps.map((bootcamp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group">
              {/* Card Header */}
              <CardHeader className="bg-gradient-to-r from-[#FBD448] to-orange-100 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {bootcamp.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={getModalityColor(bootcamp.modality)}
                        variant="secondary"
                      >
                        {bootcamp.modality}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        {bootcamp.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium ml-1">4.8</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Users className="w-3 h-3 mr-1" />
                      127 inscritos
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                {/* Price Section */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-sm font-medium text-gray-700">Inversión</span>
                    </div>
                    <Badge variant="outline" className="bg-white">
                      15% descuento
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500 line-through">
                      {bootcamp.price.original}
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {bootcamp.price.installments}
                    </div>
                    <div className="text-xs text-gray-600">
                      Cuotas por etapa sin intereses
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                    ¿Qué aprenderás?
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {bootcamp.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Certificado reconocido
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Acceso por 12 meses
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Mentoría personalizada
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium group">
                  Ver más detalles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <Card className="bg-gradient-to-r from-[#FBD448]/10 to-orange-100 border-2 border-[#FBD448]/30 p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-900">
              ¿Listo para comenzar tu viaje en IA?
            </h3>
          </div>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Estos bootcamps están diseñados para complementar perfectamente tu formación en{' '}
            <span className="font-semibold">{levelData.levelInfo.stage.toLowerCase()}</span>.
            Combina varios programas para tener una educación completa y acelerada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Hablar con un asesor
            </Button>
            <Button variant="outline" size="lg">
              Ver todos los programas
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default BootcampRecommendations;