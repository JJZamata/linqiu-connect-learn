import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const BootcampsSettings = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Configuración</h1>
        <p className="text-muted-foreground">Gestiona el perfil y preferencias de tu bootcamp.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Información del Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Logo</Label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <Button variant="outline">Subir Logo</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bootcamp-name">Nombre del Bootcamp</Label>
              <Input id="bootcamp-name" placeholder="Nombre de tu bootcamp" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Correo de Contacto</Label>
              <Input id="contact-email" type="email" placeholder="contacto@ejemplo.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web</Label>
              <Input id="website" type="url" placeholder="https://tubootcamp.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configuración de Pagos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="payment-method">Método de Pago</Label>
              <Input id="payment-method" placeholder="Cuenta bancaria o PayPal" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tax-id">ID Fiscal / RFC</Label>
              <Input id="tax-id" placeholder="Tu número de identificación fiscal" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Guardar Cambios</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default BootcampsSettings;
