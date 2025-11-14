import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Minimize2, Maximize2, X } from "lucide-react";
import { Button as A } from "@/components/ui/button";
import chatbotImage from "@/assets/astroneer4.png";
import responsesData from "@/assets/chatbot-responses.json";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: "¡Hola! 👋 Soy el asistente virtual de LinQiu. Estoy aquí para ayudarte con información sobre nuestra plataforma educativa. ¿En qué puedo asistirte hoy?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findResponse = (userMessage: string): string => {
    const normalizedMessage = userMessage.toLowerCase().trim();

    // Check for exact matches first
    if (responsesData.responses[normalizedMessage]) {
      return responsesData.responses[normalizedMessage];
    }

    // Check for partial matches
    for (const [key, value] of Object.entries(responses.responses)) {
      if (normalizedMessage.includes(key) || key.includes(normalizedMessage)) {
        return value;
      }
    }

    // Default response
    return responsesData.defaultResponse;
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = findResponse(userMessage.text);

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds response time
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button
            onClick={toggleChat}
            className="w-28 h-28 rounded-full flex items-center justify-center p-0 bg-transparent hover:bg-transparent/10 transition-colors"
          >
            <div className="relative w-full h-full">
              {isOpen ? (
                <Minimize2 className="absolute inset-0 m-auto w-16 h-16 text-foreground" />
              ) : (
                <img
                  src={chatbotImage}
                  alt="Asistente LinQiu"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </button>
          {!isOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-48 px-3 py-2 bg-background border border-border rounded-lg shadow-lg">
              <p className="text-xs text-foreground">
                ¿Necesitas ayuda? Habla con nuestro asistente 🤖
              </p>
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-background border-r border-b border-border transform rotate-45"></div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] z-50">
          <Card className="shadow-2xl border-border bg-background">
            {/* Header */}
            <CardHeader className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-primary to-primary/80">
              <div className="flex items-center gap-2">
                <img
                  src={chatbotImage}
                  alt="LinQiu Assistant"
                  className="w-8 h-8 rounded-full"
                />
                <CardTitle className="text-white text-sm font-medium">
                  Asistente LinQiu
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-8 w-8"
                onClick={toggleChat}
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
            </CardHeader>

            {/* Messages */}
            <CardContent className="h-80 overflow-y-auto p-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] px-3 py-2 rounded-2 ${
                        message.sender === "user"
                          ? "bg-primary text-white ml-auto"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground max-w-[70%] px-3 py-2 rounded-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                      <p className="text-sm">Escribiendo...</p>
                    </div>
                  </div>
                )}
              </div>
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input */}
            <CardFooter className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2 w-full items-center"
              >
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 h-10"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 flex-shrink-0"
                  disabled={inputMessage.trim() === "" || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;