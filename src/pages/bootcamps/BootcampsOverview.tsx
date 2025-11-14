import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Star, TrendingUp } from "lucide-react";

const BootcampsOverview = () => {
  const stats = [
    { label: "Módulos Activos", value: "12", icon: BookOpen, color: "text-primary" },
    { label: "Estudiantes Inscritos", value: "342", icon: Users, color: "text-blue-500" },
    { label: "Calificación Promedio", value: "4.8", icon: Star, color: "text-yellow-500" },
    { label: "Crecimiento", value: "+23%", icon: TrendingUp, color: "text-green-500" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Resumen</h1>
        <p className="text-muted-foreground">¡Bienvenido de nuevo! Aquí está el resumen de tu bootcamp.</p>
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
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Nueva inscripción", module: "Fundamentos de React", time: "hace 2 horas" },
                { action: "Módulo completado", module: "Conceptos Básicos de TypeScript", time: "hace 5 horas" },
                { action: "Reseña enviada", module: "Backend con Node.js", time: "hace 1 día" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.module}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BootcampsOverview;
