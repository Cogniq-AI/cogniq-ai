import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const WEBHOOK_URL = "https://n8n-cogniqai.cogniqai.nl/webhook/f61242f5-b299-4e64-92b0-2adc67461a91";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      // Extract the actual output from the nested webhook response
      let botText = "Message received";
      try {
        // Handle the unusual nested structure from n8n webhook
        const firstKey = Object.keys(data)[0];
        if (firstKey && data[firstKey]) {
          const secondKey = Object.keys(data[firstKey])[0];
          if (secondKey && data[firstKey][secondKey]?.output) {
            botText = data[firstKey][secondKey].output;
          }
        }
        // Fallback to common response fields
        if (botText === "Message received") {
          botText = data.response || data.message || data.output || "Message received";
        }
      } catch (e) {
        console.error("Error parsing webhook response:", e);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Failed to send message. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Orb Button */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-500",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl animate-pulse" />
          <MessageCircle className="absolute inset-0 m-auto w-7 h-7 text-white" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-500 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none",
        )}
      >
        <div className="w-[380px] h-[600px] rounded-2xl backdrop-blur-2xl bg-background/65 border border-border/50 shadow-elegant overflow-hidden flex flex-col">
          {/* Header */}
          <div className="relative p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Chat Assistant</h3>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-background/50">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/65 backdrop-blur-sm border-b border-border">
            {messages.length === 0 && (
              <div className="h-full flex items-center justify-center">
                <p className="text-muted-foreground text-center px-8">
                  Start a conversation by sending a message below
                </p>
              </div>
            )}
            {messages.map((message) => (
              <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
                <div className="relative">
                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-2 backdrop-blur-sm relative",
                      message.sender === "user"
                        ? "bg-gradient-to-br from-primary to-accent text-white ml-auto"
                        : "bg-muted/80 text-foreground",
                    )}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted/80 rounded-2xl px-4 py-2 backdrop-blur-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t border-border/50 bg-background/50">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus-visible:ring-primary/50"
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-br from-primary to-accent hover:shadow-glow transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
