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
    "Osciloscopios Digitales",
    "Wi-Fi de Alta Velocidad",
    "Impresoras 3D",
    "Estaciones de Soldadura",
    "Café y Refrigerios",
    "Pizarras Blancas",
    "Proyector y Pantalla",
    "Aire Acondicionado",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      toast({
        title: "¡Taller Publicado!",
        description: "Tu taller ahora está disponible para reservas.",
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
        <h1 className="text-3xl font-bold mb-2">Registrar Nuevo Taller</h1>
        <p className="text-muted-foreground">Agrega tu espacio de taller a la red de LinQiu.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Básica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workshop-name">Nombre del Taller</Label>
                <Input id="workshop-name" placeholder="ej., Laboratorio de Electrónica A" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Selecciona la categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electrónica</SelectItem>
                    <SelectItem value="robotics">Robótica</SelectItem>
                    <SelectItem value="mechanical">Mecánica</SelectItem>
                    <SelectItem value="programming">Programación</SelectItem>
                    <SelectItem value="manufacturing">Manufactura</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe tu espacio de taller y equipo..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacidad</Label>
                  <Input id="capacity" type="number" placeholder="20" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <Input id="location" placeholder="Edificio, Piso, Sala" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disponibilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-time">Horario de Operación (Inicio)</Label>
                  <Input id="start-time" type="time" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end-time">Horario de Operación (Fin)</Label>
                  <Input id="end-time" type="time" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="available-days">Días Disponibles</Label>
                <Input id="available-days" placeholder="Lunes - Viernes" required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Servicios y Equipamiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label>Servicios Incluidos</Label>
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
                <Label htmlFor="equipment">Equipamiento Adicional</Label>
                <Textarea
                  id="equipment"
                  placeholder="Lista cualquier equipo especializado disponible..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto y Políticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor / Persona de Contacto</Label>
                <Input id="instructor" placeholder="Nombre y contacto" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="policies">Políticas y Reglas</Label>
                <Textarea
                  id="policies"
                  placeholder="Reglas de seguridad, política de cancelación, etc..."
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Imágenes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Sube imágenes del taller (se aceptan múltiples archivos)
                </p>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG (Máx. 5MB cada una, hasta 10 imágenes)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">Guardar como Borrador</Button>
            <Button
              type="submit"
              disabled={isProcessing || isCompleted}
            >
              {isProcessing && "Publicando..."}
              {isCompleted && (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  ¡Publicado!
                </>
              )}
              {!isProcessing && !isCompleted && "Vista Previa y Enviar"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterWorkshop;
