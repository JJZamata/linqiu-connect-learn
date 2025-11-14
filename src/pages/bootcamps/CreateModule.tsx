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
        title: "¡Módulo Creado!",
        description: "Tu módulo de bootcamp está listo para revisión.",
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
        <h1 className="text-3xl font-bold mb-2">Crear Módulo</h1>
        <p className="text-muted-foreground">Sube y configura tu nuevo módulo de bootcamp.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Información del Módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input id="title" placeholder="ej., Fundamentos de React" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe qué aprenderán los estudiantes..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Curso</Label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecciona el tipo de curso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Curso Corto</SelectItem>
                    <SelectItem value="full">Bootcamp Completo</SelectItem>
                    <SelectItem value="workshop">Taller</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Subida de Archivos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Arrastra y suelta tus archivos aquí, o haz clic para explorar
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Formatos compatibles: PDF, ZIP, MP4 (Máx. 500MB)
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="commission" required />
                <Label htmlFor="commission" className="text-sm font-normal cursor-pointer">
                  Acepto el acuerdo de comisión y los términos de servicio
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isProcessing || isCompleted}
              >
                {isProcessing && "Procesando..."}
                {isCompleted && (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    ¡Listo para Revisión!
                  </>
                )}
                {!isProcessing && !isCompleted && "Enviar Módulo"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateModule;
