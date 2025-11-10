import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import studentsImage from "@/assets/students-learning.jpg";
import bootcampImage from "@/assets/bootcamp.jpg";
import workshopImage from "@/assets/workshop.jpg";

interface ContentRow {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

const TabPanel = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabContent: Record<string, ContentRow[]> = {
    general: [
      {
        title: "For Students",
        description: "Access a personalized learning roadmap tailored to your goals. Connect with top bootcamps and universities to accelerate your professional journey.",
        image: studentsImage,
        imagePosition: "left",
      },
      {
        title: "For Bootcamps",
        description: "Expand your reach and connect with motivated students. Showcase your programs and find the perfect facilities for your training sessions.",
        image: bootcampImage,
        imagePosition: "right",
      },
      {
        title: "For Workshops & Universities",
        description: "Rent your facilities to verified bootcamps and educational programs. Maximize your space utilization while supporting education.",
        image: workshopImage,
        imagePosition: "left",
      },
    ],
    students: [
      {
        title: "Personalized Learning Path",
        description: "Get a customized roadmap based on your skills, interests, and career goals. Track your progress and achievements along the way.",
        image: studentsImage,
        imagePosition: "left",
      },
      {
        title: "Verified Bootcamps",
        description: "Access a curated list of verified bootcamps and courses. Read reviews, compare programs, and make informed decisions about your education.",
        image: bootcampImage,
        imagePosition: "right",
      },
      {
        title: "Real-World Workshops",
        description: "Participate in hands-on workshops at prestigious universities. Gain practical experience and network with industry professionals.",
        image: workshopImage,
        imagePosition: "left",
      },
    ],
    bootcamps: [
      {
        title: "Student Matching",
        description: "Connect with students who match your program criteria. Build your cohorts with motivated learners ready to transform their careers.",
        image: studentsImage,
        imagePosition: "left",
      },
      {
        title: "Facility Booking",
        description: "Find and book professional training spaces easily. Access universities and workshop facilities for your programs.",
        image: workshopImage,
        imagePosition: "right",
      },
      {
        title: "Program Management",
        description: "Manage your courses, track student progress, and streamline your operations all in one platform.",
        image: bootcampImage,
        imagePosition: "left",
      },
    ],
    universities: [
      {
        title: "Facility Rental",
        description: "List your available spaces and facilities. Generate additional revenue by renting to verified educational programs.",
        image: workshopImage,
        imagePosition: "left",
      },
      {
        title: "Partnership Opportunities",
        description: "Build partnerships with leading bootcamps and educational providers. Enhance your institution's educational ecosystem.",
        image: bootcampImage,
        imagePosition: "right",
      },
      {
        title: "Student Engagement",
        description: "Attract motivated students to your programs. Showcase your facilities and offerings to a wider audience.",
        image: studentsImage,
        imagePosition: "left",
      },
    ],
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How LinQiu Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover how we connect the education ecosystem
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-background">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
          </TabsList>

          {Object.entries(tabContent).map(([key, rows]) => (
            <TabsContent key={key} value={key} className="space-y-20">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "animate-in fade-in slide-in-from-left" : "animate-in fade-in slide-in-from-right"
                  }`}
                >
                  {row.imagePosition === "left" ? (
                    <>
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold text-foreground">{row.title}</h3>
                        <p className="text-lg text-muted-foreground">{row.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4 md:order-1">
                        <h3 className="text-3xl font-bold text-foreground">{row.title}</h3>
                        <p className="text-lg text-muted-foreground">{row.description}</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-xl md:order-2">
                        <img
                          src={row.image}
                          alt={row.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabPanel;
