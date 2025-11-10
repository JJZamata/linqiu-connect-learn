import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  const teamMembers = [
    { name: "Maria Garcia", role: "CEO & Founder", initials: "MG" },
    { name: "John Smith", role: "CTO", initials: "JS" },
    { name: "Sarah Johnson", role: "Head of Education", initials: "SJ" },
    { name: "David Lee", role: "Lead Developer", initials: "DL" },
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
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24 bg-gradient-to-br from-primary to-accent">
                  <AvatarFallback className="text-2xl text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
