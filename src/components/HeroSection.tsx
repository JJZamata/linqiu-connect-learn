import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Your connection to learning
              </h1>
              <Rocket className="text-primary w-12 h-12 animate-bounce" />
            </div>
            
            <p className="text-xl text-muted-foreground">
              LinQiu connects students, universities, and bootcamps to boost your professional growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                Explore How It Works
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Sign Up for Early Access
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <img
              src={heroImage}
              alt="Students connecting through LinQiu platform"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
