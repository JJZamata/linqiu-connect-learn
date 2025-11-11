import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutDashboard, Wrench, Plus, Inbox, Settings } from "lucide-react";
import DashboardLayout from "@/components/portal/DashboardLayout";
import WorkshopsOverview from "./WorkshopsOverview";
import MyWorkshops from "./MyWorkshops";
import RegisterWorkshop from "./RegisterWorkshop";
import WorkshopsRequests from "./WorkshopsRequests";
import WorkshopsSettings from "./WorkshopsSettings";

const WorkshopsDashboard = () => {
  const sidebarItems = [
    { label: "Overview", path: "/portal/workshops/overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: "My Workshops", path: "/portal/workshops/my-workshops", icon: <Wrench className="w-5 h-5" /> },
    { label: "Register New", path: "/portal/workshops/register", icon: <Plus className="w-5 h-5" /> },
    { label: "Requests", path: "/portal/workshops/requests", icon: <Inbox className="w-5 h-5" /> },
    { label: "Settings", path: "/portal/workshops/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Workshops Portal">
      <Routes>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<WorkshopsOverview />} />
        <Route path="my-workshops" element={<MyWorkshops />} />
        <Route path="register" element={<RegisterWorkshop />} />
        <Route path="requests" element={<WorkshopsRequests />} />
        <Route path="settings" element={<WorkshopsSettings />} />
      </Routes>
    </DashboardLayout>
  );
};

export default WorkshopsDashboard;
