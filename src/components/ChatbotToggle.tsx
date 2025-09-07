import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from 'lucide-react';
import AIChatbot from './AIChatbot';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        size="sm"
      >
        {isOpen ? (
          <X size={20} className="text-white" />
        ) : (
          <MessageCircle size={20} className="text-white group-hover:scale-110 transition-transform" />
        )}
      </Button>
      
      <AIChatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatbotToggle;
