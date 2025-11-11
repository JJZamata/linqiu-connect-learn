import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Power, Users, MapPin } from "lucide-react";

const MyWorkshops = () => {
  const workshops = [
    {
      id: 1,
      name: "Electronics Lab A",
      category: "Electronics",
      location: "Building 3, Floor 2",
      status: "Active",
      capacity: 20,
      bookings: 12,
    },
    {
      id: 2,
      name: "Robotics Workshop",
      category: "Robotics",
      location: "Innovation Center",
      status: "Active",
      capacity: 15,
      bookings: 8,
    },
    {
      id: 3,
      name: "3D Printing Lab",
      category: "Manufacturing",
      location: "Maker Space",
      status: "Inactive",
      capacity: 10,
      bookings: 0,
    },
    {
      id: 4,
      name: "Computer Lab",
      category: "Programming",
      location: "Building 1, Floor 3",
      status: "Active",
      capacity: 30,
      bookings: 25,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-500" : "bg-gray-500";
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">My Workshops</h1>
        <p className="text-muted-foreground">Manage your registered workshop spaces.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workshops.map((workshop, index) => (
          <motion.div
            key={workshop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{workshop.name}</CardTitle>
                    <Badge variant="outline">{workshop.category}</Badge>
                  </div>
                  <Badge className={getStatusColor(workshop.status)}>
                    {workshop.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{workshop.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>
                    {workshop.bookings} / {workshop.capacity} capacity
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${(workshop.bookings / workshop.capacity) * 100}%` }}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  <Power className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkshops;
