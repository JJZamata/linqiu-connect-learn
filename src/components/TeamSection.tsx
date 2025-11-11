import { Card, CardContent } from "@/components/ui/card";
import mariaImg from "@/assets/team-maria.jpg";
import johnImg from "@/assets/team-john.jpg";
import sarahImg from "@/assets/team-sarah.jpg";
import davidImg from "@/assets/team-david.jpg";

const TeamSection = () => {
  const teamMembers = [
    { name: "Maria Garcia", role: "CEO & Founder", image: mariaImg },
    { name: "John Smith", role: "CTO", image: johnImg },
    { name: "Sarah Johnson", role: "Head of Education", image: sarahImg },
    { name: "David Lee", role: "Lead Developer", image: davidImg },
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the Novalink Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We bridge education, technology, and opportunity to create meaningful connections
            in the learning ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative pt-16 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg"
                />
              </div>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 pt-20">
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
    </section>
  );
};

export default TeamSection;
