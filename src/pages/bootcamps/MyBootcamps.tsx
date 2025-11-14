import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Trash2, Users, Calendar } from "lucide-react";

const MyBootcamps = () => {
  const bootcamps = [
    {
      id: 1,
      title: "Fundamentos de React",
      date: "Ene 2025",
      status: "Activo",
      students: 45,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Conceptos Básicos de TypeScript",
      date: "Dic 2024",
      status: "Completado",
      students: 62,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Backend con Node.js",
      date: "Feb 2025",
      status: "Borrador",
      students: 0,
      rating: 0,
    },
    {
      id: 4,
      title: "Desarrollo Full Stack",
      date: "Mar 2025",
      status: "Activo",
      students: 38,
      rating: 4.7,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-500";
      case "Completado":
        return "bg-blue-500";
      case "Borrador":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Mis Bootcamps</h1>
        <p className="text-muted-foreground">Gestiona y monitorea tus módulos de bootcamp.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bootcamps.map((bootcamp, index) => (
          <motion.div
            key={bootcamp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{bootcamp.title}</CardTitle>
                  <Badge className={getStatusColor(bootcamp.status)}>
                    {bootcamp.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{bootcamp.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{bootcamp.students} estudiantes inscritos</span>
                </div>
                {bootcamp.rating > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">Calificación:</span>
                    <span className="text-yellow-500">★ {bootcamp.rating}</span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyBootcamps;
