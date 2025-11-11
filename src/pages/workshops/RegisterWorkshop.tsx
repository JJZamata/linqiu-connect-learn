import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegisterWorkshop = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const services = [
    "Digital Oscilloscopes",
    "High-Speed Wi-Fi",
    "3D Printers",
    "Soldering Stations",
    "Coffee & Refreshments",
    "Whiteboards",
    "Projector & Screen",
    "Air Conditioning",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      toast({
        title: "Workshop Published!",
        description: "Your workshop is now available for booking.",
      });
      
      setTimeout(() => {
        setIsCompleted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Register New Workshop</h1>
        <p className="text-muted-foreground">Add your workshop space to LinQiu's network.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workshop-name">Workshop Name</Label>
                <Input id="workshop-name" placeholder="e.g., Electronics Lab A" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="robotics">Robotics</SelectItem>
                    <SelectItem value="mechanical">Mechanical</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your workshop space and equipment..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" type="number" placeholder="20" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Building, Floor, Room" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Operating Hours (Start)</Label>
                  <Input id="start-time" type="time" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-time">Operating Hours (End)</Label>
                  <Input id="end-time" type="time" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="available-days">Available Days</Label>
                <Input id="available-days" placeholder="Monday - Friday" required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services & Equipment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Services Included</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox id={service} />
                      <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="equipment">Additional Equipment</Label>
                <Textarea
                  id="equipment"
                  placeholder="List any specialized equipment available..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor / Contact Person</Label>
                <Input id="instructor" placeholder="Name and contact" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="policies">Policies & Rules</Label>
                <Textarea
                  id="policies"
                  placeholder="Safety rules, cancellation policy, etc..."
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload workshop images (multiple files accepted)
                </p>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG (Max 5MB each, up to 10 images)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">Save as Draft</Button>
            <Button
              type="submit"
              disabled={isProcessing || isCompleted}
            >
              {isProcessing && "Publishing..."}
              {isCompleted && (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Published!
                </>
              )}
              {!isProcessing && !isCompleted && "Preview & Submit"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterWorkshop;
