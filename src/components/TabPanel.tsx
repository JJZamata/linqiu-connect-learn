import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import studentLearningPathImage from "@/assets/student-learning-path.jpg";
import generalUniversitiesImage from "@/assets/general-universities.jpg";
import studentVerifiedBootcampsImage from "@/assets/student-verified-bootcamps.jpg";
import studentWorkshopsImage from "@/assets/student-workshops.jpg";
import bootcampMatchingImage from "@/assets/bootcamp-matching.jpg";
import universityRentalImage from "@/assets/university-rental.jpg";
import bootcampManagementImage from "@/assets/bootcamp-management.jpg";
import bootcampMatching from "@/assets/bootcamp-matching.jpg";
import universityPartnershipImage from "@/assets/university-partnership.jpg";
import universityEngagementImage from "@/assets/university-engagement.jpg";

interface ContentRow {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabContent: Record<string, ContentRow[]> = {
    general: [
      {
        title: "Para Estudiantes",
        description: "Accede a un roadmap de aprendizaje personalizado adaptado a tus objetivos. Conecta con los mejores bootcamps y universidades para acelerar tu trayectoria profesional.",
        image: studentLearningPathImage,
        imagePosition: "left",
      },
      {
        title: "Para Bootcamps",
        description: "Expande tu alcance y conecta con estudiantes motivados. Presenta tus programas y encuentra las instalaciones perfectas para tus sesiones de entrenamiento.",
        image: bootcampMatching,
        imagePosition: "right",
      },
      {
        title: "Para Talleres y Universidades",
        description: "Alquila tus instalaciones a bootcamps verificados y programas educativos. Maximiza el uso de tu espacio mientras apoyas la educación.",
        image: generalUniversitiesImage,
        imagePosition: "left",
      },
    ],
    students: [
      {
        title: "Ruta de Aprendizaje Personalizada",
        description: "Obtén un roadmap personalizado basado en tus habilidades, intereses y objetivos profesionales. Seguimiento de tu progreso y logros en el camino.",
        image: studentLearningPathImage,
        imagePosition: "left",
      },
      {
        title: "Bootcamps Verificados",
        description: "Accede a una lista curada de bootcamps y cursos verificados. Lee reseñas, compara programas y toma decisiones informadas sobre tu educación.",
        image: studentVerifiedBootcampsImage,
        imagePosition: "right",
      },
      {
        title: "Talleres Prácticos",
        description: "Participa en talleres hands-on en universidades prestigiosas. Obtén experiencia práctica y conecta con profesionales de la industria.",
        image: studentWorkshopsImage,
        imagePosition: "left",
      },
    ],
    bootcamps: [
      {
        title: "Conexión con Estudiantes",
        description: "Conecta con estudiantes que coinciden con los criterios de tu programa. Construye tus cohortes con aprendices motivados listos para transformar sus carreras.",
        image: bootcampMatchingImage,
        imagePosition: "left",
      },
      {
        title: "Reserva de Instalaciones",
        description: "Encuentra y reserva espacios de entrenamiento profesionales fácilmente. Accede a universidades e instalaciones de talleres para tus programas.",
        image: universityRentalImage,
        imagePosition: "right",
      },
      {
        title: "Gestión de Programas",
        description: "Gestiona tus cursos, sigue el progreso de los estudiantes y agiliza tus operaciones, todo en una plataforma.",
        image: bootcampManagementImage,
        imagePosition: "left",
      },
    ],
    universities: [
      {
        title: "Alquiler de Instalaciones",
        description: "Lista tus espacios e instalaciones disponibles. Genera ingresos adicionales alquilando a programas educativos verificados.",
        image: universityRentalImage,
        imagePosition: "left",
      },
      {
        title: "Oportunidades de Colaboración",
        description: "Construye alianzas con bootcamps líderes y proveedores educativos. Mejora el ecosistema educativo de tu institución.",
        image: universityPartnershipImage,
        imagePosition: "right",
      },
      {
        title: "Participación Estudiantil",
        description: "Atrae estudiantes motivados a tus programas. Presenta tus instalaciones y ofertas a una audiencia más amplia.",
        image: universityEngagementImage,
        imagePosition: "left",
      },
    ],
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Cómo Funciona LinQiu
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubre cómo conectamos el ecosistema educativo
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-background">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="students">Estudiantes</TabsTrigger>
            <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
            <TabsTrigger value="universities">Universidades</TabsTrigger>
          </TabsList>

          {Object.entries(tabContent).map(([key, rows]) => (
            <TabsContent key={key} value={key} className="space-y-20">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "animate-in fade-in slide-in-from-left" : "animate-in fade-in slide-in-from-right"
                  }`}
                >
                  {row.imagePosition === "left" ? (
                    <>
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-foreground">{row.title}</h3>
                        <p className="text-lg text-muted-foreground">{row.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4 md:order-1">
                        <h3 className="text-3xl font-bold text-foreground">{row.title}</h3>
                        <p className="text-lg text-muted-foreground">{row.description}</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-xl md:order-2">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabPanel;
