import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react";

const BootcampsNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Module Approved",
      message: "Your 'React Fundamentals' module has been approved and is now live.",
      time: "2 hours ago",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "info",
      title: "New Enrollment",
      message: "5 new students enrolled in 'TypeScript Basics'.",
      time: "5 hours ago",
      icon: Info,
    },
    {
      id: 3,
      type: "warning",
      title: "Review Required",
      message: "Your 'Node.js Backend' module needs some updates before approval.",
      time: "1 day ago",
      icon: AlertCircle,
    },
    {
      id: 4,
      type: "info",
      title: "Payment Received",
      message: "You received $450 from December enrollments.",
      time: "2 days ago",
      icon: CheckCircle,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
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
        <div className="flex items-center gap-3 mb-2">
          <Bell className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Notifications</h1>
        </div>
        <p className="text-muted-foreground">Stay updated with your bootcamp activities.</p>
      </motion.div>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-start gap-4 p-6">
                <div className={`p-2 rounded-full bg-muted ${getIconColor(notification.type)}`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <Badge className={getBadgeVariant(notification.type)}>
                      {notification.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BootcampsNotifications;
