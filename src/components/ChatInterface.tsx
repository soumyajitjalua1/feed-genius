
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
}

export const ChatInterface = ({
  onUpdateFeed
}: {
  onUpdateFeed: (prompt: string) => void;
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I can help you customize your feed. Try asking for specific topics or sources.',
      sender: 'ai'
    }
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { id: Date.now().toString(), content: input, sender: 'user' as const }
    ];
    setMessages(newMessages);

    // Trigger feed update
    onUpdateFeed(input);
    
    // Clear input
    setInput('');

    // Show processing toast
    toast({
      title: "Updating your feed",
      description: "Fetching relevant content based on your preferences...",
      duration: 2000,
    });
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md p-4">
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Customize your feed..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
