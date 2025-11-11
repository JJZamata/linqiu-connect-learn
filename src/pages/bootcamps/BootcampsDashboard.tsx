import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutDashboard, BookOpen, Plus, Bell, Settings } from "lucide-react";
import DashboardLayout from "@/components/portal/DashboardLayout";
import BootcampsOverview from "./BootcampsOverview";
import MyBootcamps from "./MyBootcamps";
import CreateModule from "./CreateModule";
import BootcampsNotifications from "./BootcampsNotifications";
import BootcampsSettings from "./BootcampsSettings";

const BootcampsDashboard = () => {
  const sidebarItems = [
    { label: "Overview", path: "/portal/bootcamps/overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: "My Bootcamps", path: "/portal/bootcamps/my-bootcamps", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Create Module", path: "/portal/bootcamps/create", icon: <Plus className="w-5 h-5" /> },
    { label: "Notifications", path: "/portal/bootcamps/notifications", icon: <Bell className="w-5 h-5" /> },
    { label: "Settings", path: "/portal/bootcamps/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} title="Bootcamps Portal">
      <Routes>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<BootcampsOverview />} />
        <Route path="my-bootcamps" element={<MyBootcamps />} />
        <Route path="create" element={<CreateModule />} />
        <Route path="notifications" element={<BootcampsNotifications />} />
        <Route path="settings" element={<BootcampsSettings />} />
      </Routes>
    </DashboardLayout>
  );
};

export default BootcampsDashboard;
