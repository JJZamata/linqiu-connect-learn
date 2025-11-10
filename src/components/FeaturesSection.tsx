import { BookOpen, Building2, Map, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn at Your Own Pace",
      description: "Flexible learning paths that adapt to your schedule and learning style.",
    },
    {
      icon: Building2,
      title: "Access Real Workshops",
      description: "Connect with verified universities and professional training facilities.",
    },
    {
      icon: Map,
      title: "Follow Your Roadmap",
      description: "Personalized career paths designed to help you reach your goals faster.",
    },
    {
      icon: TrendingUp,
      title: "Boost Your Career",
      description: "Connect with top bootcamps and educational institutions to accelerate growth.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose LinQiu?
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed in your learning journey
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
