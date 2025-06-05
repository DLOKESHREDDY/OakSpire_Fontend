import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  message: string;
  sender: 'user' | 'bot';
  direction: 'incoming' | 'outgoing';
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hi! I'm your Oakspire Tek assistant. How can I help you today?",
      sender: "bot",
      direction: "incoming"
    }
  ]);

  const handleSend = (message: string) => {
    const newMessage: ChatMessage = {
      message,
      sender: "user",
      direction: "outgoing"
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, {
        message: botResponse,
        sender: "bot",
        direction: "incoming"
      }]);
    }, 1000);
  };

  const generateBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Navigation responses
    if (lowerMessage.includes('home')) {
      return "Our home page showcases our main services and latest opportunities. Would you like me to tell you more about what we offer?";
    }
    if (lowerMessage.includes('about')) {
      return "Oakspire Tek is a staffing and recruiting company that puts humans first. We help connect talented professionals with great opportunities. Would you like to know more about our mission and values?";
    }
    if (lowerMessage.includes('service')) {
      return "We offer various services including career guidance, resume optimization, skill development programs, and job placement. Which service would you like to learn more about?";
    }
    if (lowerMessage.includes('faq')) {
      return "Our FAQ section covers common questions about our services, process, and how we can help advance your career. What specific information are you looking for?";
    }
    if (lowerMessage.includes('contact')) {
      return "You can reach us at +1 703-585-4066 or email us at satya@oakspiretek.com. Would you like me to help you schedule a consultation?";
    }
    
    // Service-specific responses
    if (lowerMessage.includes('career') || lowerMessage.includes('guidance')) {
      return "Our career guidance service provides personalized advice and strategy to help you achieve your professional goals. Would you like to schedule a career consultation?";
    }
    if (lowerMessage.includes('resume')) {
      return "Our resume optimization service helps you create a compelling, ATS-friendly resume that highlights your skills and experience. Would you like to learn more about this service?";
    }
    if (lowerMessage.includes('training') || lowerMessage.includes('skill')) {
      return "We offer comprehensive skill development programs tailored to your career goals. Our training covers technical skills, soft skills, and interview preparation. What skills are you looking to develop?";
    }

    // Default response
    return "I'm here to help you with information about our services, career opportunities, and any questions you might have. What would you like to know more about?";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
      <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">Oakspire Tek Assistant</h3>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="h-[calc(100%-8rem)]">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    message: message.message,
                    sender: message.sender,
                    direction: message.direction,
                    position: "single"
                  }}
                />
              ))}
            </MessageList>
          </ChatContainer>
        </MainContainer>
      </div>
      
      <div className="p-4 border-t">
        <MessageInput
          placeholder="Type your message here..."
          onSend={handleSend}
          attachButton={false}
        />
      </div>
    </div>
  );
};

export default ChatBot;