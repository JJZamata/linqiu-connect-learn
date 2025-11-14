import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import workshopImg from "@/assets/workshop.png";
import bootcampImg from "@/assets/bootcamp.png";
import Lottie from "lottie-react";
import readingAstronaut from "@/assets/animations/reading_astronaut.json";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 lg:pt-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Tu conexión para aprender
              </h1>
              <Rocket className="text-primary w-12 h-12 animate-bounce" />
            </div>

            <p className="text-xl text-muted-foreground">
              LinQiu conecta estudiantes, universidades y bootcamps para impulsar tu crecimiento profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Explora cómo funciona
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Regístrate para acceso anticipado
              </Button>
            </div>
          </div>

          {/* Hero Animation/Image */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="relative">
              {/* Workshop Image - Superior Izquierda */}
              <div
                className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 animate-in fade-in slide-in-from-left duration-1000"
                style={{
                  animation: 'floatUpDown 3s ease-in-out infinite',
                }}
              >
                <img
                  src={workshopImg}
                  alt="Workshop"
                  className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Astronaut Animation */}
              <Lottie
                animationData={readingAstronaut}
                className="w-full h-full max-w-lg mx-auto relative z-10"
                loop={true}
                autoplay={true}
              />

              {/* Bootcamp Image - Inferior Derecha */}
              <div
                className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-24 h-24 md:w-32 md:h-32 animate-in fade-in slide-in-from-right duration-1200"
                style={{
                  animation: 'floatUpDown 3s ease-in-out infinite 1.5s',
                }}
              >
                <img
                  src={bootcampImg}
                  alt="Bootcamp"
                  className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* CSS para animación personalizada y corrección de navbar */}
          <style jsx>{`
            @keyframes floatUpDown {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            /* Corrección para secciones con navbar fijo */
            html {
              scroll-padding-top: 80px;
            }

            /* Para móviles específicamente */
            @media (max-width: 768px) {
              html {
                scroll-padding-top: 100px;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
