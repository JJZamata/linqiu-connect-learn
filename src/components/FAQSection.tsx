import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("students");

  const faqData: Record<string, FAQ[]> = {
    students: [
      {
        question: "¿Qué es LinQiu y cómo puede ayudarme a aprender mejor?",
        answer: "Linqiu es una plataforma creada por Novalink que conecta estudiantes con cursos, bootcamps y talleres de instituciones educativas. Te ayuda a aprender de forma práctica, seguir un roadmap personalizado y acceder a espacios reales donde aplicar tus conocimientos.",
      },
      {
        question: "¿Necesito estar inscrito en una universidad o puedo usar LinQiu de forma independiente?",
        answer: "Puedes usar LinQiu sin estar inscrito en ninguna universidad. La plataforma está abierta a cualquier persona que desee aprender, especializarse o mejorar sus habilidades técnicas y profesionales.",
      },
      {
        question: "¿Los cursos y talleres en LinQiu tienen certificación o validez académica?",
        answer: "Depende del proveedor del contenido. Algunos bootcamps y universidades ofrecen certificaciones reconocidas, mientras que otros talleres se enfocan en la experiencia práctica. Cada programa mostrará esta información antes de inscribirte.",
      },
      {
        question: "¿Puedo acceder a talleres físicos o solo son clases en línea?",
        answer: "Ambos. LinQiu te permite acceder a contenido digital y también reservar espacios físicos (talleres, laboratorios o aulas) en instituciones asociadas, para que puedas practicar o desarrollar proyectos.",
      },
      {
        question: "¿LinQiu tiene un costo mensual o se paga por curso o taller?",
        answer: "Podrás elegir. LinQiu ofrecerá planes por suscripción mensual con acceso a contenido dinámico, y también la opción de pagar por talleres o programas específicos según tus intereses.",
      },
      {
        question: "¿Puedo seguir un roadmap personalizado según mi área o nivel de experiencia?",
        answer: "Sí. LinQiu genera un recorrido de aprendizaje inteligente (roadmap) adaptado a tu perfil, intereses y objetivos, para que avances paso a paso de manera guiada.",
      },
    ],
    bootcamps: [
      {
        question: "¿Cómo pueden los bootcamps integrar sus cursos o programas en LinQiu?",
        answer: "Los bootcamps pueden registrar su institución y subir su oferta educativa directamente o mediante integración con APIs. El equipo de LinQiu brinda asistencia durante este proceso.",
      },
      {
        question: "¿Qué ventajas tiene usar LinQiu frente a otras plataformas de cursos?",
        answer: "Linqiu no solo conecta cursos, sino que los enlaza con talleres físicos y roadmaps personalizados para los estudiantes, lo que mejora la experiencia práctica y el alcance institucional.",
      },
      {
        question: "¿Se puede personalizar la presencia o marca del bootcamp dentro de LinQiu?",
        answer: "Sí. Cada bootcamp podrá personalizar su perfil con su identidad visual, logotipo y descripción para reforzar su marca dentro del ecosistema educativo.",
      },
      {
        question: "¿LinQiu cobra comisión por cada estudiante inscrito?",
        answer: "Sí, se aplicará una pequeña comisión por gestión y visibilidad. El modelo exacto puede variar según el tipo de colaboración o plan elegido.",
      },
      {
        question: "¿Puedo ofrecer contenido gratuito o de prueba para atraer estudiantes?",
        answer: "Claro. LinQiu permitirá publicar contenido gratuito o introductorio para captar nuevos usuarios y ofrecer una muestra del valor de tu programa.",
      },
    ],
    universities: [
      {
        question: "¿Cómo pueden las universidades o escuelas técnicas unirse a LinQiu?",
        answer: "Pueden registrarse como institución asociada desde la web de LinQiu. Nuestro equipo revisará la información y las ayudará a integrar su oferta educativa o disponibilidad de talleres en la plataforma.",
      },
      {
        question: "¿Qué beneficios tiene ofrecer o alquilar mis talleres en la plataforma?",
        answer: "Permite a las instituciones aprovechar mejor sus espacios, atraer nuevos estudiantes y generar ingresos adicionales. Además, aumenta la visibilidad de la institución dentro del ecosistema educativo digital.",
      },
      {
        question: "¿Puedo controlar las reservas y disponibilidad de mis espacios?",
        answer: "Sí. Cada institución dispone de un panel de administración donde puede gestionar horarios, cupos, tarifas y disponibilidad de cada taller o espacio ofrecido.",
      },
      {
        question: "¿Qué tipo de soporte o visibilidad ofrece LinQiu a las instituciones participantes?",
        answer: "Linqiu brinda soporte técnico y visibilidad a través de campañas dentro de la app, destacando talleres o cursos relevantes para la comunidad estudiantil.",
      },
      {
        question: "¿Se requiere algún tipo de convenio o contrato con Novalink?",
        answer: "Sí, se establece un convenio de colaboración o prestación de servicios. Este acuerdo define los términos de uso, seguridad, y reparto de ingresos según el tipo de participación.",
      },
    ],
    general: [
      {
        question: "¿Quién está detrás de LinQiu?",
        answer: "Linqiu es una iniciativa de Novalink, una empresa que impulsa la innovación educativa creando puentes entre la tecnología, el aprendizaje y las oportunidades reales.",
      },
      {
        question: "¿Está disponible LinQiu en todos los países o solo en Perú / Latinoamérica?",
        answer: "Inicialmente, LinQiu se lanzará en Perú y posteriormente se expandirá a otros países de Latinoamérica.",
      },
      {
        question: "¿Puedo acceder desde mi teléfono móvil o solo desde el navegador?",
        answer: "Podrás acceder desde ambos. LinQiu contará con una app móvil y una versión web completamente funcional.",
      },
      {
        question: "¿Cómo protege LinQiu la información de los usuarios y las instituciones?",
        answer: "La plataforma cumple con los estándares de seguridad y protección de datos personales, utilizando cifrado y políticas de privacidad transparentes.",
      },
      {
        question: "¿Cuándo estará disponible la versión completa de la plataforma?",
        answer: "Actualmente LinQiu se encuentra en desarrollo. El lanzamiento oficial está programado para el próximo ciclo académico, y ya puedes registrarte para recibir acceso anticipado.",
      },
    ],
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Encuentra respuestas rápidas sobre cómo funciona LinQiu para estudiantes, bootcamps e instituciones.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-secondary">
            <TabsTrigger value="students">Estudiantes</TabsTrigger>
            <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
            <TabsTrigger value="universities">Universidades</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          {Object.entries(faqData).map(([key, faqs]) => (
            <TabsContent key={key} value={key}>
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FAQSection;
