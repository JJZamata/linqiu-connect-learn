import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileType: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll contact you soon with early access details.",
    });
    setFormData({ name: "", email: "", profileType: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-border shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Join the Waitlist
                </h2>
                <p className="text-xl text-muted-foreground">
                  Be among the first to experience LinQiu
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profileType">I am a...</Label>
                  <Select
                    value={formData.profileType}
                    onValueChange={(value) => setFormData({ ...formData, profileType: value })}
                    required
                  >
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select your profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="bootcamp">Bootcamp</SelectItem>
                      <SelectItem value="university">University/Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Early Access
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
