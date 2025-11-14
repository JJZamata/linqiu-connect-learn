import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortalSelection from "./pages/PortalSelection";
import BootcampsDashboard from "./pages/bootcamps/BootcampsDashboard";
import WorkshopsDashboard from "./pages/workshops/WorkshopsDashboard";
import RoadmapsPage from "./pages/RoadmapsPage";
import RoadmapPage from "./pages/RoadmapPage";
import RoadmapIoTPage from "./pages/RoadmapIoTPage";
import ChatBot from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/roadmap-ia-leadership" element={<RoadmapPage />} />
          <Route path="/roadmap-iot" element={<RoadmapIoTPage />} />
          <Route path="/roadmap-iot-transformation" element={<RoadmapIoTPage />} />
          <Route path="/portal" element={<PortalSelection />} />
          <Route path="/portal/bootcamps/*" element={<BootcampsDashboard />} />
          <Route path="/portal/workshops/*" element={<WorkshopsDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
