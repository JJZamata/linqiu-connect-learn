import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  Target,
  BookOpen,
  Briefcase,
  DollarSign,
  Star,
  GraduationCap,
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootcampModal from "@/components/BootcampModal";
import roadmapData from "@/assets/ia-leadership-roadmap.json";

const RoadmapPage = () => {
  const progressPercentage = 25; // Example progress
  const [selectedLevel, setSelectedLevel] = useState<{ id: string; name: string } | null>(null);

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Navbar />
      <div className="pt-20 pb-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {roadmapData.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {roadmapData.subtitle}
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {roadmapData.summary}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progreso del Programa</span>
            <span className="font-medium">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Clock className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Duración: {roadmapData.totalDurationMonths} meses</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Users className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Modalidad: Virtual</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
            <Award className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium">Certificado: U. Lima</span>
          </div>
        </div>
      </motion.div>

      {/* Main Roadmap Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

        {/* Levels */}
        <div className="space-y-12">
          {roadmapData.levels.map((level, index) => (
            <div key={level.id} className="relative">
              {/* Level Number Badge */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-[#FBD448] rounded-full flex items-center justify-center text-black font-bold shadow-lg border-4 border-white">
                  {index + 1}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Main Content (alternating sides) */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {level.stage}
                          </h3>
                          <Badge variant="secondary" className="mb-3">
                            {level.durationWeeks} semanas
                          </Badge>
                        </div>
                        <Target className="w-6 h-6 text-[#FBD448]" />
                      </div>

                      {/* Topics */}
                      <div className="space-y-3">
                        {level.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-[#FBD448]/20 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-[#FBD448] rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>

                      {/* Learning Outcome */}
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-blue-900 mb-1">
                              Resultado de aprendizaje:
                            </p>
                            <p className="text-sm text-blue-700">
                              {level.learningOutcome}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bootcamp Button */}
                      <div className="mt-4">
                        <Button
                          onClick={() => setSelectedLevel({ id: level.id, name: level.stage })}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium group"
                        >
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Ver Bootcamps Disponibles
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Prerequisite */}
                      {level.prerequisite && (
                        <div className="mt-4 text-sm text-gray-600 italic">
                          <span className="font-medium">Prerrequisito:</span> {level.prerequisite}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Complementary Box */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}
                >
                  <Card className="shadow-md hover:shadow-lg transition-shadow border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-purple-600" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          {level.complementary.title}
                        </h4>
                      </div>
                      <Badge variant="outline" className="mb-3 bg-white">
                        {level.complementary.durationWeeks} semanas
                      </Badge>
                      <div className="space-y-2 mb-3">
                        {level.complementary.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        {level.complementary.outcome}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Information Badges */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white p-3 rounded-lg shadow-md border"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-xs font-medium text-gray-900">Audiencia</p>
                <p className="text-xs text-gray-600">{roadmapData.targetAudience}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white p-3 rounded-lg shadow-md border"
          >
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <div>
                <p className="text-xs font-medium text-gray-900">Inversión</p>
                <p className="text-xs text-gray-600">{roadmapData.investment}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Outcomes Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <Card className="bg-gradient-to-r from-[#FBD448]/20 to-orange-100 border-0 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¿Qué lograrás al completar el programa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roadmapData.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Certification Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-3">
              {roadmapData.certification.award}
            </h3>
            <p className="text-blue-100">
              Obtén un reconocimiento oficial de la Universidad de Lima que validarás tu liderazgo en Inteligencia Artificial
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bootcamp Modal */}
      <BootcampModal
        isOpen={!!selectedLevel}
        onClose={() => setSelectedLevel(null)}
        levelId={selectedLevel?.id || ''}
        levelName={selectedLevel?.name || ''}
      />

      </div>
      <Footer />
    </div>
  );
};

export default RoadmapPage;