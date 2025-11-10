import { GraduationCap, Laptop, Building, Trophy } from "lucide-react";

const RoadmapSection = () => {
  const steps = [
    { icon: GraduationCap, label: "Student", color: "from-primary to-primary-light" },
    { icon: Laptop, label: "Bootcamp", color: "from-primary-light to-accent" },
    { icon: Building, label: "Workshop", color: "from-accent to-primary" },
    { icon: Trophy, label: "Professional Growth", color: "from-primary to-primary-dark" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Follow the path from student to professional
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.label}
                  </h3>
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-1 h-12 bg-gradient-to-b from-primary to-accent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
