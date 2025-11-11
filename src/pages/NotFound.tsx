import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import notFoundImg from "@/assets/404-image.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8 flex justify-center">
          <img
            src={notFoundImg}
            alt="404 - Página no encontrada"
            className="w-64 h-64 object-contain rounded-lg"
          />
        </div>
        <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
          Parece que te saliste del camino de aprendizaje... pero cada error también enseña algo. ¡Volvamos a conectar!
        </p>
        <Button asChild size="lg" className="shadow-lg">
          <a href="/">Volver al Inicio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
