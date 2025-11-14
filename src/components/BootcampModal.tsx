import { motion, AnimatePresence } from "framer-motion";
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
  Calendar,
  X,
  GraduationCap
} from "lucide-react";
import bootcampData from "@/assets/bootcamp-recommendations.json";
import iotBootcampData from "@/assets/iot-bootcamp-recommendations.json";

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

interface BootcampModalProps {
  isOpen: boolean;
  onClose: () => void;
  levelId: string;
  levelName: string;
}

const BootcampModal = ({ isOpen, onClose, levelId, levelName }: BootcampModalProps) => {
  // Try to get data from IoT bootcamps first, fallback to general bootcamps
  let levelData = (iotBootcampData as Record<string, LevelData>)[levelId];
  if (!levelData) {
    levelData = (bootcampData as Record<string, LevelData>)[levelId];
  }

  if (!levelData) return null;

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <div className="min-h-screen px-4 py-8 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#FBD448] to-orange-100 rounded-t-2xl p-6 border-b">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Bootcamps para {levelName}
                      </h2>
                      <p className="text-gray-700">
                        Programas especializados que complementan tu formación
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-gray-600 hover:text-gray-900 hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="bg-white rounded-b-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  {/* Level Info */}
                  <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">Contenido del nivel:</h3>
                    <div className="flex flex-wrap gap-2">
                      {levelData.levelInfo.topics.map((topic, index) => (
                        <Badge key={index} variant="secondary" className="bg-white">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

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

                  {/* Modal Footer */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          ¿Necesitas ayuda para elegir?
                        </h4>
                        <p className="text-gray-600">
                          Nuestros asesores pueden ayudarte a encontrar el programa perfecto para ti
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" onClick={onClose}>
                          Cerrar
                        </Button>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Hablar con asesor
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BootcampModal;