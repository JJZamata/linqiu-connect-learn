import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

const WorkshopsSettings = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Configuración</h1>
        <p className="text-muted-foreground">Gestiona el perfil y preferencias de tu institución.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Información de la Institución</CardTitle>
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
              <Label htmlFor="institution-name">Nombre de la Institución</Label>
              <Input id="institution-name" placeholder="Nombre de tu institución" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                placeholder="Breve descripción de tu institución..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-email">Correo de Contacto</Label>
                <Input id="contact-email" type="email" placeholder="contacto@ejemplo.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Número de Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+52 123 456 7890" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Input id="address" placeholder="Dirección completa" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web</Label>
              <Input id="website" type="url" placeholder="https://tuinstitucion.com" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información de Facturación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="billing-email">Correo de Facturación</Label>
              <Input id="billing-email" type="email" placeholder="facturacion@ejemplo.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tax-id">ID Fiscal / RFC</Label>
              <Input id="tax-id" placeholder="Tu número de identificación fiscal" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bank-account">Cuenta Bancaria</Label>
              <Input id="bank-account" placeholder="Número de cuenta para pagos" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preferencias de Notificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Notificaciones por Correo</Label>
                <p className="text-sm text-muted-foreground">Recibir actualizaciones de reservas por correo</p>
              </div>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label>Notificaciones SMS</Label>
                <p className="text-sm text-muted-foreground">Recibir alertas urgentes por SMS</p>
              </div>
              <input type="checkbox" className="toggle" />
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

export default WorkshopsSettings;
