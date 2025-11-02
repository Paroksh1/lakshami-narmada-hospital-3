import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Upload, Phone, MessageCircle, Clock, MapPin, Stethoscope, Calendar, AlertTriangle, ChevronDown } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'quick-reply' | 'card' | 'form' | 'emergency';
  options?: { text: string; value: string }[];
};

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  profileUrl: string;
};

const HOSPITAL_THEME = {
  name: "Laxmi Narmada Hospital",
  primary: "#1E69F2",
  accentMint: "#36D6B8",
  accentPeach: "#FFC8A8",
  dark: "#0A2540",
  light: "#F7FAFD",
  logoText: "LN"
};

const SERVICES = [
  'Pediatric Cardiology', 'Pediatric Neurology', 'Neonatology',
  'General Pediatrics', 'Pediatric Surgery', 'Pediatric Orthopedics',
  'Pediatric Ophthalmology', 'Pediatric ENT', 'Pediatric Pulmonology',
  'Pediatric Gastroenterology', 'Vaccinations', 'Emergency Care'
];

const MOCK_DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Ananya Sharma', specialty: 'Pediatric Cardiology', experience: 12, rating: 4.9, profileUrl: '/doctors/1' },
  { id: '2', name: 'Dr. Rajiv Malhotra', specialty: 'Neonatology', experience: 15, rating: 4.8, profileUrl: '/doctors/2' },
  { id: '3', name: 'Dr. Priya Patel', specialty: 'Pediatric Neurology', experience: 10, rating: 4.7, profileUrl: '/doctors/3' },
  { id: '4', name: 'Dr. Amit Khanna', specialty: 'Pediatric Surgery', experience: 14, rating: 4.9, profileUrl: '/doctors/4' },
  { id: '5', name: 'Dr. Neha Gupta', specialty: 'Pediatric Orthopedics', experience: 8, rating: 4.6, profileUrl: '/doctors/5' },
  { id: '6', name: 'Dr. Sameer Joshi', specialty: 'Pediatric Pulmonology', experience: 11, rating: 4.7, profileUrl: '/doctors/6' }
];

const HospitalChatbot: React.FC<{ defaultOpen?: boolean; onHandoff?: () => void }> = ({ 
  defaultOpen = false, 
  onHandoff 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatLN_messages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        })));
      } catch (e) {
        console.error('Failed to load chat history', e);
      }
    } else {
      // Initial greeting
      showWelcomeMessage();
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatLN_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const showWelcomeMessage = () => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Hi! I'm your hospital assistant. How can I help today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'quick-reply',
      options: [
        { text: 'Book First Consult (Free)', value: 'book' },
        { text: 'Find a Doctor', value: 'find_doctor' },
        { text: 'Departments & Services', value: 'services' },
        { text: 'Locations & Timings', value: 'locations' },
        { text: 'Vaccinations', value: 'vaccinations' },
        { text: 'Contact & WhatsApp', value: 'contact' }
      ]
    };
    setMessages([welcomeMessage]);
  };

  const addMessage = (text: string, sender: 'user' | 'bot', type: Message['type'] = 'text', options?: any[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickReply = (value: string) => {
    addMessage(value, 'user');
    handleIntent(value);
  };

  const handleIntent = (intent: string) => {
    // Simple intent detection
    const lowerIntent = intent.toLowerCase();
    
    if (/(emerg|accident|bleed|unconscious|pain)/i.test(lowerIntent)) {
      handleEmergency();
    } else if (/(vaccin|immuniz|shot)/i.test(lowerIntent)) {
      handleVaccinations();
    } else if (/(book|appointment|consult|visit|schedule)/i.test(lowerIntent)) {
      startBookingFlow();
    } else if (/(doctor|specialist|cardio|neuro|ortho|ent|eye|lungs|surgery|neonat|gastro)/i.test(lowerIntent)) {
      handleFindDoctor();
    } else if (/(hour|timing|open|where|location|address|map)/i.test(lowerIntent)) {
      showLocationInfo();
    } else if (/(call|phone|contact|whatsapp)/i.test(lowerIntent)) {
      showContactInfo();
    } else {
      // For any other query, show quick actions
      showQuickActions();
    }
  };

  const handleEmergency = () => {
    addMessage(
      '🚨 If this is a medical emergency, call 102/112 immediately or our ER desk: +91 9XX XXX XXXX. I can help you with directions to our emergency room.",
      'bot',
      'emergency'
    );
    setCurrentStep('emergency');
  };

  const startBookingFlow = () => {
    setCurrentStep('book_name');
    addMessage("Let's book your first consultation. What's your child's first name?", 'bot');
  };

  const handleFindDoctor = () => {
    addMessage(
      'Which specialty are you looking for?',
      'bot',
      'quick-reply',
      SERVICES.map(service => ({
        text: service.replace('Pediatric ', ''),
        value: service
      }))
    );
    setCurrentStep('find_doctor');
  };

  const handleVaccinations = () => {
    addMessage(
      'For vaccination bookings, please download our app from the Google Play Store:',
      'bot'
    );
    
    // Add Play Store link
    addMessage(
      '📱 [Download Laxmi Narmada Hospital App](https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN)',
      'bot',
      'text'
    );

    // Add hospital information
    showLocationInfo();
    setCurrentStep(null);
  };

  const showLocationInfo = () => {
    addMessage(
      `📍 *Laxmi Narmada Hospital*\n\n` +
      `🏥 *Location*\n` +
      `BPTP Parklands / Piyush Heights side, Sector 89\n` +
      `Faridabad, Haryana 121002\n` +
      `Landmark: Near BPTP Society\n\n` +
      `📞 *Contact*\n` +
      `+91 85868 60125\n` +
      `laxmi.narmada.hospital@gmail.com\n\n` +
      `🕒 *Opening Hours*\n` +
      `Monday - Friday: 8:00 AM - 8:00 PM\n` +
      `Saturday: 9:00 AM - 6:00 PM\n` +
      `Sunday: 9:00 AM - 1:00 PM\n` +
      `Emergency: 24/7\n\n` +
      `👨‍⚕️ *Founded by*: Dr. Sanjeev Kumar (MD Pediatrics)`,
      'bot'
    );
    setCurrentStep(null);
  };

  const showContactInfo = () => {
    addMessage(
      "📞 *Contact Us*\n\n📱 General Inquiries: +91 85868 60125\n🚑 Emergency: +91 85868 60125\n📧 info@laxminarmadahospital.com\n\n💬 *Continue on WhatsApp*: [Start Chat](https://wa.me/918586860125)",
      'bot'
    );
    setCurrentStep(null);
  };

  const showQuickActions = () => {
    addMessage(
      'How else can I help you today?',
      'bot',
      'quick-reply',
      [
        { text: 'Book First Consult', value: 'book' },
        { text: 'Find a Doctor', value: 'find_doctor' },
        { text: 'View Services', value: 'services' },
        { text: 'See Location', value: 'location' }
      ]
    );
    setCurrentStep(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    
    // Handle form steps
    if (currentStep === 'book_name') {
      setFormData({ ...formData, childName: inputValue });
      setCurrentStep('book_age');
      addMessage(`Thanks! How old is ${inputValue}?`, 'bot');
    } else if (currentStep === 'book_age') {
      setFormData({ ...formData, childAge: inputValue });
      setCurrentStep('book_phone');
      addMessage('Great! What\'s the best phone number to reach you?', 'bot');
    } else if (currentStep === 'book_phone') {
      setFormData({ ...formData, phone: inputValue });
      setCurrentStep('book_date');
      addMessage('When would you like to schedule the appointment? (e.g., "tomorrow 4pm" or "Friday morning")', 'bot');
    } else if (currentStep === 'book_date') {
      const bookingLink = `/book?child=${encodeURIComponent(formData.childName)}&age=${formData.childAge}&phone=${formData.phone}&date=${encodeURIComponent(inputValue)}`;
      addMessage(`Got it! I've prepared your appointment request for ${formData.childName}. [Click here to confirm](${bookingLink}).`, 'bot');
      setCurrentStep(null);
      setFormData({});
      setTimeout(showQuickActions, 1000);
    } else {
      // Default NLU handling
      handleIntent(inputValue);
    }

    setInputValue('');
  };

  const renderMessage = (message: Message) => {
    const isBot = message.sender === 'bot';
    const messageClasses = `max-w-[85%] p-3 rounded-2xl mb-3 ${
      isBot 
        ? 'bg-[#F7FAFD] text-[#0A2540] rounded-tl-sm' 
        : 'bg-[#1E69F2] text-white rounded-tr-sm ml-auto'
    }`;

    return (
      <div key={message.id} className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
        <div className={messageClasses}>
          <div className="whitespace-pre-line">{message.text}</div>
          {message.type === 'quick-reply' && message.options && (
            <div className="flex flex-wrap gap-2 mt-2">
              {message.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleQuickReply(option.value)}
                  className="px-3 py-1.5 text-sm bg-white border border-[#E7EEF7] rounded-full hover:bg-gray-50 transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
          {message.type === 'emergency' && (
            <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded-r">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium text-red-700">Emergency Assistance</span>
              </div>
              <p className="text-sm text-red-600 mt-1">
                For immediate medical attention, please call our emergency number: 
                <a href="tel:+91102" className="font-semibold underline ml-1">102/112</a> or 
                <a href="tel:+919XXXXXXXX" className="font-semibold underline ml-1">+91 9XX XXX XXXX</a>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="w-[360px] h-[520px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1E69F2] to-[#4AA0FF] text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white text-[#1E69F2] flex items-center justify-center font-bold mr-2">
                {HOSPITAL_THEME.logoText}
              </div>
              <div>
                <div className="font-semibold">Laxmi Narmada Hospital</div>
                <div className="text-xs bg-white/20 px-2 py-0.5 rounded-full inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                  24×7 Pediatric Emergency
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {messages.map(renderMessage)}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-100 bg-white">
            <p className="text-xs text-gray-500 text-center mb-2">
              Don't share sensitive medical data here. In emergencies call 102/112.
            </p>
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1E69F2] focus:border-transparent"
              />
              <button 
                type="submit"
                className="p-2 rounded-full bg-[#1E69F2] text-white hover:bg-[#1557D1] transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E69F2] to-[#4AA0FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E69F2]"
          aria-label="Open chat"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">Chat with us</span>
        </button>
      )}
    </div>
  );
};

export default HospitalChatbot;
