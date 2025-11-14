import { BookOpen, Building2, Map, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Aprende a Tu Ritmo",
      description: "Rutas de aprendizaje flexibles que se adaptan a tu horario y estilo de aprendizaje.",
    },
    {
      icon: Building2,
      title: "Accede a Talleres Reales",
      description: "Conecta con universidades verificadas e instalaciones de entrenamiento profesional.",
    },
    {
      icon: Map,
      title: "Sigue tu Roadmap",
      description: "Carreras profesionales personalizadas diseñadas para ayudarte a alcanzar tus objetivos más rápido.",
    },
    {
      icon: TrendingUp,
      title: "Impulsa tu Carrera",
      description: "Conecta con los mejores bootcamps e instituciones educativas para acelerar tu crecimiento.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            ¿Por Qué Elegir LinQiu?
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas para tener éxito en tu viaje de aprendizaje
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
