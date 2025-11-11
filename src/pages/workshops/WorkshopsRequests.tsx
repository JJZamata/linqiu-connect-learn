import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Clock } from "lucide-react";

const WorkshopsRequests = () => {
  const requests = [
    {
      id: 1,
      requester: "TechU Bootcamp",
      workshop: "Electronics Lab A",
      date: "Jan 15, 2025",
      time: "10:00 AM - 2:00 PM",
      participants: 15,
      status: "Pending",
    },
    {
      id: 2,
      requester: "Code Academy",
      workshop: "Computer Lab",
      date: "Jan 18, 2025",
      time: "9:00 AM - 12:00 PM",
      participants: 25,
      status: "Pending",
    },
    {
      id: 3,
      requester: "Robotics Club",
      workshop: "Robotics Workshop",
      date: "Jan 20, 2025",
      time: "2:00 PM - 6:00 PM",
      participants: 12,
      status: "Approved",
    },
    {
      id: 4,
      requester: "Maker Group",
      workshop: "3D Printing Lab",
      date: "Jan 22, 2025",
      time: "1:00 PM - 4:00 PM",
      participants: 8,
      status: "Rejected",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500";
      case "Rejected":
        return "bg-red-500";
      case "Pending":
        return "bg-yellow-500";
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
        <h1 className="text-3xl font-bold mb-2">Booking Requests</h1>
        <p className="text-muted-foreground">Review and manage reservation requests.</p>
      </motion.div>

      <Card>
        <CardHeader>
          <CardTitle>All Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-lg">{request.requester}</h3>
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Workshop:</span> {request.workshop}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>
                      <Clock className="w-4 h-4 inline mr-1" />
                      {request.date} • {request.time}
                    </span>
                    <span>{request.participants} participants</span>
                  </div>
                </div>

                {request.status === "Pending" && (
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <Check className="w-4 h-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkshopsRequests;
