import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User, 
  Loader2,
  Sparkles,
  Lightbulb,
  HelpCircle
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m NorAiO\'s AI assistant. I can help you with questions about our AI solutions, pricing, implementation, or any other inquiries. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: generateId(),
      type: 'assistant',
      content: '',
      timestamp: new Date(),
      isTyping: true
    };

    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await generateAIResponse(userMessage.content);
      
      // Remove typing indicator and add response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: generateId(),
          type: 'assistant',
          content: response,
          timestamp: new Date()
        }];
      });
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, {
          id: generateId(),
          type: 'assistant',
          content: 'I apologize, but I\'m experiencing technical difficulties. Please try again in a moment.',
          timestamp: new Date()
        }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const generateAIResponse = async (userInput: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const input = userInput.toLowerCase();

    // AI-powered responses based on context
    if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      return `Our AI solutions are priced based on your specific needs and scale. We offer flexible pricing models:

• **Starter Plan**: €2,999/month - Perfect for small businesses
• **Professional Plan**: €7,999/month - For growing enterprises  
• **Enterprise Plan**: Custom pricing - For large-scale implementations

Each plan includes our core AI automation features, 24/7 support, and regular updates. Would you like me to connect you with our sales team for a personalized quote?`;
    }

    if (input.includes('implementation') || input.includes('setup') || input.includes('deploy')) {
      return `Our implementation process is designed to be smooth and efficient:

**Phase 1: Discovery** (1-2 weeks)
• Requirements analysis
• System integration assessment
• Custom solution design

**Phase 2: Development** (2-4 weeks)
• AI model training
• System configuration
• Security setup

**Phase 3: Deployment** (1-2 weeks)
• Pilot testing
• Full rollout
• Team training

**Phase 4: Support** (Ongoing)
• 24/7 monitoring
• Performance optimization
• Regular updates

Our team handles everything from start to finish. Would you like to schedule a consultation to discuss your specific requirements?`;
    }

    if (input.includes('features') || input.includes('capabilities') || input.includes('what can')) {
      return `NorAiO offers comprehensive AI-powered business solutions:

🤖 **AI Automation**
• Process automation
• Document processing
• Data extraction
• Workflow optimization

📊 **Analytics & Insights**
• Predictive analytics
• Performance monitoring
• Business intelligence
• Custom reporting

🔒 **Security & Compliance**
• Enterprise-grade security
• GDPR compliance
• Data encryption
• Audit trails

🔗 **Integrations**
• Microsoft 365
• Google Workspace
• SAP
• Custom APIs

💡 **Custom Solutions**
• Tailored AI models
• Industry-specific features
• Scalable architecture

Which area interests you most? I can provide more detailed information.`;
    }

    if (input.includes('support') || input.includes('help') || input.includes('contact')) {
      return `We're here to help! Here are the best ways to reach us:

📞 **Phone**: +47 123 45 678
📧 **Email**: support@noraio.com
💬 **Live Chat**: Available 24/7 (that's me!)
📅 **Schedule Call**: Book a consultation with our experts

**Response Times:**
• General inquiries: Within 2 hours
• Technical support: Within 1 hour
• Emergency issues: Within 30 minutes

Is there a specific issue I can help you with right now?`;
    }

    if (input.includes('demo') || input.includes('trial') || input.includes('test')) {
      return `Great! I'd love to show you what NorAiO can do for your business.

**Demo Options:**
🎯 **Live Demo**: 30-minute personalized walkthrough
📹 **Video Demo**: Self-paced product tour
🧪 **Free Trial**: 14-day full access
📊 **ROI Calculator**: See potential savings

**What to Expect:**
• See real AI automation in action
• Explore your specific use cases
• Get personalized recommendations
• No commitment required

Would you like me to schedule a demo for you? I can also send you our ROI calculator to see potential savings for your business.`;
    }

    // Default AI response
    const responses = [
      `That's an interesting question! Based on what you've shared, I'd recommend exploring our AI automation solutions. They're designed to streamline processes and boost efficiency. Would you like to know more about specific features?`,
      `I understand you're looking for more information. Our AI solutions are quite versatile and can be customized for various business needs. What specific challenge are you trying to solve?`,
      `Great question! NorAiO specializes in AI-powered business automation. We can help with everything from process optimization to predictive analytics. What aspect of AI automation interests you most?`,
      `I'd be happy to help you with that! Our team has extensive experience in AI implementation across various industries. Could you tell me more about your specific requirements?`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: 'Pricing', icon: '💰', action: 'What are your pricing plans?' },
    { label: 'Demo', icon: '🎯', action: 'I\'d like to see a demo' },
    { label: 'Features', icon: '⚡', action: 'What features do you offer?' },
    { label: 'Support', icon: '🆘', action: 'I need technical support' }
  ];

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={16} />
          </div>
          <div>
            <h3 className="font-semibold">NorAiO Assistant</h3>
            <p className="text-xs text-white/80">AI-powered support</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-white hover:bg-white/20"
        >
          <X size={16} />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : message.type === 'assistant'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {message.isTyping ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin" />
                    <span>AI is thinking...</span>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickAction(action.action)}
              className="text-xs justify-start"
            >
              <span className="mr-1">{action.icon}</span>
              {action.label}
            </Button>
          ))}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about NorAiO..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
