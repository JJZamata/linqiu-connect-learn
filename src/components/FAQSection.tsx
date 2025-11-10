import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("students");

  const faqData: Record<string, FAQ[]> = {
    students: [
      {
        question: "How do I create a personalized learning roadmap?",
        answer: "Answer coming soon...",
      },
      {
        question: "Is LinQiu free for students?",
        answer: "Answer coming soon...",
      },
      {
        question: "How do I find and apply to bootcamps?",
        answer: "Answer coming soon...",
      },
      {
        question: "Can I track my progress on LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "What types of programs are available?",
        answer: "Answer coming soon...",
      },
    ],
    bootcamps: [
      {
        question: "How do I list my bootcamp on LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "What are the benefits of joining LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "How does student matching work?",
        answer: "Answer coming soon...",
      },
      {
        question: "Can I book facilities through LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "What verification process do bootcamps go through?",
        answer: "Answer coming soon...",
      },
      {
        question: "How do I manage my program listings?",
        answer: "Answer coming soon...",
      },
    ],
    universities: [
      {
        question: "How can we rent our facilities on LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "What types of spaces can be listed?",
        answer: "Answer coming soon...",
      },
      {
        question: "How does the booking process work?",
        answer: "Answer coming soon...",
      },
      {
        question: "Is there a verification process for facility renters?",
        answer: "Answer coming soon...",
      },
      {
        question: "How do we set pricing for our spaces?",
        answer: "Answer coming soon...",
      },
    ],
    general: [
      {
        question: "What is LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "How does LinQiu connect the education ecosystem?",
        answer: "Answer coming soon...",
      },
      {
        question: "Is LinQiu available in my country?",
        answer: "Answer coming soon...",
      },
      {
        question: "How do I get started with LinQiu?",
        answer: "Answer coming soon...",
      },
      {
        question: "How can I contact LinQiu support?",
        answer: "Answer coming soon...",
      },
      {
        question: "When will LinQiu officially launch?",
        answer: "Answer coming soon...",
      },
    ],
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find quick answers about how LinQiu works for students, bootcamps, and institutions.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-secondary">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          {Object.entries(faqData).map(([key, faqs]) => (
            <TabsContent key={key} value={key}>
              <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FAQSection;
