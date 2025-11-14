import { Card, CardContent } from "@/components/ui/card";
import juliImg from "@/assets/Juli.png";
import turpoImg from "@/assets/Turpo.png";
import zamataImg from "@/assets/Zamata.png";
import parejaImg from "@/assets/Pareja.png";
import fondoImg from "@/assets/fondo1.png";
import Lottie from "lottie-react";
import rocketLaunch from "@/assets/animations/rocket_launch.json";

const TeamSection = () => {
  const teamMembers = [
    { name: "Juli", role: "CEO & Founder", image: juliImg },
    { name: "Turpo", role: "Desarrollador Backend", image: turpoImg },
    { name: "Zamata", role: "Desarrollador Frontend", image: zamataImg },
    { name: "Benjamin Pareja", role: "Asesor", image: parejaImg },
  ];

  return (
    <section
      id="team"
      className="py-20 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${fondoImg})` }}
    >
      {/* Liquid Glass Effect Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/15 to-transparent backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="relative">
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_0.8),_0_0_20px_rgb(0_0_0_/_0.5)]">
            Conoce al Equipo de Novalink
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg [text-shadow:_1px_1px_4px_rgb(0_0_0_/_0.6)] backdrop-blur-sm bg-black/10 inline-block px-6 py-3 rounded-lg">
            Desarrolladores, diseñadores y especialistas en educación creando LinQiu, una plataforma que combina aprendizaje dinámico, IA adaptativa y conexión con espacios prácticos. Trabajamos para hacer la educación más accesible, moderna y conectada.
          </p>
        </div>

        {/* Multiple Rockets - Absolute Positioned */}

        {/* Rocket 1 - Left side */}
        <div className="hidden md:block absolute left-4 top-1/4 w-16 h-16 lg:w-20 lg:h-20 animate-in fade-in slide-in-from-left duration-700 z-10">
          <Lottie
            animationData={rocketLaunch}
            loop={true}
            autoplay={true}
          />
        </div>

        {/* Rocket 2 - Right side */}
        <div className="hidden lg:block absolute right-8 top-1/3 w-14 h-14 lg:w-18 lg:h-18 animate-in fade-in slide-in-from-right duration-1000 z-10">
          <Lottie
            animationData={rocketLaunch}
            loop={true}
            autoplay={true}
          />
        </div>

        {/* Rocket 3 - Bottom left */}
        <div className="hidden md:block absolute left-1/4 bottom-0 w-12 h-12 lg:w-16 lg:h-16 animate-in fade-in slide-in-from-bottom duration-1200 z-10">
          <Lottie
            animationData={rocketLaunch}
            loop={true}
            autoplay={true}
          />
        </div>

        {/* Mobile Rocket Animation */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="w-16 h-16">
            <Lottie
              animationData={rocketLaunch}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-30">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative pt-16 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 pt-14">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
