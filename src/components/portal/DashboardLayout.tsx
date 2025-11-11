import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

interface SidebarItem {
  label: string;
  path: string;
  icon: ReactNode;
}

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  title: string;
}

const DashboardLayout = ({ children, sidebarItems, title }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-border bg-card min-h-[calc(100vh-4rem)] sticky top-16">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-foreground">{title}</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
