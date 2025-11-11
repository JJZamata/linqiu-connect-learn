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

const CreateModule = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      toast({
        title: "Module Created!",
        description: "Your bootcamp module is ready for review.",
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
        <h1 className="text-3xl font-bold mb-2">Create Module</h1>
        <p className="text-muted-foreground">Upload and configure your new bootcamp module.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Module Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., React Fundamentals" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Course Type</Label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select course type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short Course</SelectItem>
                    <SelectItem value="full">Full Bootcamp</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>File Upload</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your files here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports: PDF, ZIP, MP4 (Max 500MB)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="commission" required />
                <Label htmlFor="commission" className="text-sm font-normal cursor-pointer">
                  I agree to the commission agreement and terms of service
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isProcessing || isCompleted}
              >
                {isProcessing && "Processing..."}
                {isCompleted && (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Ready for Review!
                  </>
                )}
                {!isProcessing && !isCompleted && "Submit Module"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateModule;
