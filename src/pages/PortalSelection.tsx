import { motion } from "framer-motion";
import { GraduationCap, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const PortalSelection = () => {
  const navigate = useNavigate();

  const portals = [
    {
      title: "Bootcamps",
      description: "Upload, manage, and monitor your online bootcamps.",
      icon: GraduationCap,
      path: "/portal/bootcamps",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: "Workshops / Labs",
      description: "Register and offer your technical spaces for collaboration.",
      icon: Wrench,
      path: "/portal/workshops",
      gradient: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-4 pt-20">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Bienvenido al Portal </span>
              <span className="text-primary">LinQiu</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Selecciona tu tipo de servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portals.map((portal, index) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(portal.path)}
                className={`relative cursor-pointer rounded-2xl p-8 bg-gradient-to-br ${portal.gradient} border-2 border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <portal.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {portal.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {portal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalSelection;
