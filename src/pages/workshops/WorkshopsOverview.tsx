import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Calendar, DollarSign, Star } from "lucide-react";

const WorkshopsOverview = () => {
  const stats = [
    { label: "Talleres Activos", value: "8", icon: Wrench, color: "text-primary" },
    { label: "Sesiones Reservadas", value: "24", icon: Calendar, color: "text-blue-500" },
    { label: "Ganancias (MTD)", value: "S/.3,420", icon: DollarSign, color: "text-green-500" },
    { label: "Calificación Promedio", value: "4.9", icon: Star, color: "text-yellow-500" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Resumen</h1>
        <p className="text-muted-foreground">¡Bienvenido de nuevo! Aquí está el resumen de tus talleres.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Próximas Reservas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { workshop: "Laboratorio de Electrónica A", date: "Mañana, 10:00 AM", group: "Estudiantes de TechU" },
                { workshop: "Taller de Robótica", date: "Ene 15, 2:00 PM", group: "Bootcamp XYZ" },
                { workshop: "Laboratorio de Impresión 3D", date: "Ene 18, 9:00 AM", group: "Grupo Universitario" },
              ].map((booking, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{booking.workshop}</p>
                    <p className="text-sm text-muted-foreground">{booking.group}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{booking.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default WorkshopsOverview;
