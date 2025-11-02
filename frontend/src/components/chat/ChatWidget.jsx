import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, AlertTriangle, Phone, Calendar, MapPin, Syringe } from 'lucide-react';

/** ---------- Hospital Constants (Authoritative) ---------- **/
const HOSPITAL = {
  name: 'Laxmi Narmada Children’s Hospital',
  short: 'Laxmi Narmada Hospital',
  phone: '+91 85868 60125',
  emergencyPhone: '+91 85868 60125',
  addressMain: `BPTP Parklands / Piyush Heights side, Sector 89, Faridabad, Haryana 121002`,
  landmarkMain: 'Near BPTP Society',
  addressBranch: `Faridabad Medical Centre (The Children Hospital), Plot No. 458, Sector 21B, Near Ryan International School, Faridabad 121001`,
  mapsMain: 'https://www.google.com/maps/search/?api=1&query=Laxmi+Narmada+Children+Hospital+Sector+89+Faridabad',
  mapsBranch: 'https://www.google.com/maps/search/?api=1&query=Faridabad+Medical+Centre+Plot+458+Sector+21B+Faridabad',
  playStore:
    'https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN',
  hoursOPD: [
    { label: 'Monday - Friday', value: '8:00 AM – 8:00 PM' },
    { label: 'Saturday', value: '9:00 AM – 6:00 PM' },
    { label: 'Sunday', value: '9:00 AM – 1:00 PM' },
    { label: 'Emergency', value: '24/7' }
  ]
};

const THEME = {
  primary: '#1E69F2',
  primaryDark: '#1557D1',
  gradientFrom: '#1E69F2',
  gradientTo: '#4AA0FF',
  lightBg: '#F7FAFD',
  textDark: '#0A2540',
  logoText: 'LN'
};

const SERVICES = [
  'Pediatric Cardiology', 'Pediatric Neurology', 'Neonatology',
  'General Pediatrics', 'Pediatric Surgery', 'Pediatric Orthopedics',
  'Pediatric Ophthalmology', 'Pediatric ENT', 'Pediatric Pulmonology',
  'Pediatric Gastroenterology', 'Vaccinations', 'Emergency Care'
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(null);
  const [formData, setFormData] = useState({});
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /** -------- Conversation Flows (All answers corrected) -------- **/
  const flows = {
    welcome: {
      message:
        `👋 Welcome to *${HOSPITAL.short}*! I’m your virtual assistant.\n\n` +
        `How can I help you today?`,
      options: [
        { icon: <Calendar className="w-4 h-4 mr-2" />, text: 'Book First Consult (Free)', value: 'book_appointment' },
        { icon: <Syringe className="w-4 h-4 mr-2" />, text: 'Vaccinations', value: 'vaccinations' },
        { icon: <MapPin className="w-4 h-4 mr-2" />, text: 'Locations & Timings', value: 'locations' },
        { icon: <Phone className="w-4 h-4 mr-2" />, text: 'Contact & WhatsApp', value: 'contact' }
      ]
    },

    book_appointment: {
      message:
        '🚀 *Book Your First Free Consultation*\n\n' +
        'Please download our official app to book appointments, view doctor schedules, and manage records.',
      options: [
        { text: '📱 Download App & Book', value: 'open_link', link: HOSPITAL.playStore, isExternal: true },
        { text: 'Back to Main Menu', value: 'welcome' }
      ]
    },

    vaccinations: {
      message:
        '💉 *Vaccination Services*\n\n' +
        'We follow the national immunization schedule. You can book and track doses in the app.',
      options: [
        { text: '📱 Download App', value: 'open_link', link: HOSPITAL.playStore, isExternal: true },
        { text: 'View Location & Timings', value: 'locations' },
        { text: 'Back to Main Menu', value: 'welcome' }
      ]
    },

    locations: {
      message:
        `📍 *${HOSPITAL.short}*\n\n` +
        `🏥 *Main Centre*\n${HOSPITAL.addressMain}\nLandmark: ${HOSPITAL.landmarkMain}\n[Open in Google Maps](${HOSPITAL.mapsMain})\n\n` +
        `🏥 *Branch*\n${HOSPITAL.addressBranch}\n[Open in Google Maps](${HOSPITAL.mapsBranch})\n\n` +
        `🕒 *OPD Timings*\n` +
        HOSPITAL.hoursOPD.map(h => `• ${h.label}: ${h.value}`).join('\n'),
      options: [{ text: 'Back to Main Menu', value: 'welcome' }]
    },

    contact: {
      message:
        `📞 *Contact Us*\n\n` +
        `Phone (General & Emergency): ${HOSPITAL.phone}\n` +
        `WhatsApp: ${HOSPITAL.phone}\n\n` +
        `[Call Now](tel:${HOSPITAL.phone.replace(/\s/g, '')})  •  [WhatsApp](https://wa.me/${HOSPITAL.phone.replace(/[^\d]/g, '')})`,
      options: [
        { text: '📱 Download App', value: 'open_link', link: HOSPITAL.playStore, isExternal: true },
        { text: 'Back to Main Menu', value: 'welcome' }
      ]
    },

    emergency: {
      message:
        '🚨 *EMERGENCY ASSISTANCE*\n\n' +
        `If this is a medical emergency, please call immediately:\n\n` +
        `• Emergency Helpline: 102 / 112\n` +
        `• Our ER (24/7): ${HOSPITAL.emergencyPhone}\n\n` +
        `I can also help with directions to the ER.`,
      options: [
        { text: 'Get Directions to ER', value: 'er_directions' },
        { text: 'Back to Main Menu', value: 'welcome' }
      ]
    },

    er_directions: {
      message:
        '🚑 *Emergency Room Directions*\n\n' +
        `ER at Main Centre (Ground Floor)\n` +
        `[Open in Google Maps](${HOSPITAL.mapsMain})\n` +
        `Phone (ER): ${HOSPITAL.emergencyPhone}\n\n*Available 24/7*`,
      options: [{ text: 'Back to Main Menu', value: 'welcome' }]
    },

    // Simple inline booking intake (kept for future use; not pushed in menu)
    start_booking: { message: "Great! Let's start with the child's full name:", input: true, storeField: 'childName', nextStep: 'get_dob' },
    get_dob: { message: "What is the child's date of birth? (DD/MM/YYYY)", input: true, storeField: 'dob', nextStep: 'get_phone' },
    get_phone: { message: 'Please provide a contact number where we can reach you:', input: true, storeField: 'phone', nextStep: 'get_preferred_date' },
    get_preferred_date: { message: "When would you prefer to schedule the visit? (e.g., 'tomorrow afternoon')", input: true, storeField: 'preferredDate', nextStep: 'confirm_booking' },
    confirm_booking: {
      message: (data) =>
        `📝 *Appointment Request Summary*\n\n` +
        `👶 Name: ${data.childName || 'Not provided'}\n` +
        `📅 DOB: ${data.dob || 'Not provided'}\n` +
        `📱 Contact: ${data.phone || 'Not provided'}\n` +
        `⏰ Preferred Time: ${data.preferredDate || 'Not specified'}\n\nIs this information correct?`,
      options: [
        { text: '✅ Confirm Booking', value: 'booking_confirmed' },
        { text: '✏️ Edit Details', value: 'start_booking' },
        { text: '❌ Cancel', value: 'welcome' }
      ]
    },
    booking_confirmed: {
      message:
        `✅ *Appointment Request Received!*\n\n` +
        `Thank you. Our team will contact you shortly to confirm the slot.\n` +
        `Your reference no.: LN${Math.floor(100000 + Math.random() * 900000)}\n\n` +
        `Tip: You can also book instantly via our app.`,
      options: [
        { text: '📱 Open App', value: 'open_link', link: HOSPITAL.playStore, isExternal: true },
        { text: 'Back to Main Menu', value: 'welcome' }
      ]
    }
  };

  /** ---------------- Lifecycle ---------------- **/
  useEffect(() => {
    if (isOpen && messages.length === 0) handleFlow('welcome');
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /** ---------------- Helpers ---------------- **/
  const addMessage = (text, sender, type = 'text', options) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        text,
        sender,
        timestamp: new Date(),
        type,
        options
      }
    ]);
  };

  const handleFlow = (flowId, data = {}) => {
    const flow = flows[flowId];
    if (!flow) return;

    if (Object.keys(data).length > 0) setFormData(prev => ({ ...prev, ...data }));

    const msg = typeof flow.message === 'function' ? flow.message({ ...formData, ...data }) : flow.message;
    addMessage(msg, 'bot', flow.options ? 'quick-reply' : 'text', flow.options);
    setCurrentStep(flow.nextStep || flowId);
  };

  // NEW: Quick reply now accepts the whole option object (so links can open)
  const handleQuickReply = (option) => {
    // show user’s tap as message
    addMessage(option.text || option.value, 'user');

    // external link handling
    if (option.isExternal && option.link) {
      try { window.open(option.link, '_blank', 'noopener,noreferrer'); } catch (e) {}
    }

    // open tel:/wa.me when the option is crafted as a link flow
    if (option.value === 'open_link' && option.link && !option.isExternal) {
      window.location.href = option.link;
      return;
    }

    // proceed to next flow if provided
    const next = option.value && option.value !== 'open_link' ? option.value : null;
    if (next) setTimeout(() => handleFlow(next, formData), 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    addMessage(text, 'user');

    const step = flows[currentStep];
    if (step?.input) {
      const data = { [step.storeField]: text };
      setFormData(prev => ({ ...prev, ...data }));
      if (step.nextStep) setTimeout(() => handleFlow(step.nextStep, data), 400);
    }

    setInputValue('');
  };

  // Basic markdown-like render
  const renderMessageContent = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      if (line.startsWith('• ')) {
        return (
          <div key={i} className="flex items-start mb-1">
            <span className="mr-2">•</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      }
      if (/^\*.*\*$/.test(line)) {
        return <div key={i} className="font-bold my-1">{line.replace(/\*/g, '')}</div>;
      }
      // links: [text](url)
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [_, label, url] = linkMatch;
        const before = line.split('[')[0];
        const after = line.split(')')[1] || '';
        return (
          <div key={i} className="mb-1">
            {before}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#1E69F2] underline">
              {label}
            </a>
            {after}
          </div>
        );
      }
      return <div key={i} className="mb-1">{line}</div>;
    });
  };

  const renderMessage = (message) => {
    const isBot = message.sender === 'bot';
    const bubble =
      `max-w-[85%] p-3 rounded-2xl mb-3 ${
        isBot ? 'bg-[#F7FAFD] text-[#0A2540] rounded-tl-sm' : 'bg-[#1E69F2] text-white rounded-tr-sm ml-auto'
      }`;

    return (
      <div key={message.id} className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
        <div className={bubble}>
          <div className="whitespace-pre-line">{renderMessageContent(message.text)}</div>

          {/* Quick Replies */}
          {message.type === 'quick-reply' && message.options?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.options.map((opt, idx) => (
                <button
                  key={`${opt.value}-${idx}`}
                  onClick={() => handleQuickReply(opt)}
                  className={`px-3 py-2 text-sm rounded-full flex items-center transition-colors
                    ${opt.value === 'welcome'
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-white border border-[#E7EEF7] hover:bg-gray-50 text-[#0A2540]'
                    }`}
                >
                  {opt.icon || null}
                  {opt.text}
                </button>
              ))}
            </div>
          )}

          {/* Emergency hint banner */}
          {message.text.includes('EMERGENCY') && (
            <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded-r">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium text-red-700">Emergency Assistance</span>
              </div>
              <p className="text-sm text-red-600 mt-1">
                Call 102/112 or{' '}
                <a href={`tel:${HOSPITAL.emergencyPhone.replace(/\s/g, '')}`} className="font-semibold underline">
                  {HOSPITAL.emergencyPhone}
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  /** ---------------- UI ---------------- **/
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#1E69F2] to-[#4AA0FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E69F2] z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="sr-only">Chat with us</span>
      </button>
    );
  }

  return (
    <div
      className="
        fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 md:right-6
        bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-50
        w-[92vw] max-w-[380px] md:max-w-[400px]
        h-[70vh] md:h-[520px]
      "
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E69F2] to-[#4AA0FF] text-white p-3 md:p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-white text-[#1E69F2] flex items-center justify-center font-bold mr-2">
            {THEME.logoText}
          </div>
          <div>
            <div className="font-semibold">{HOSPITAL.short}</div>
            <div className="text-[10px] md:text-xs bg-white/20 px-2 py-0.5 rounded-full inline-flex items-center">
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
      <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-white">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">Loading chat...</div>
        ) : (
          messages.map(renderMessage)
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 md:p-3 border-t border-gray-100 bg-white">
        <p className="text-[10px] md:text-xs text-gray-500 text-center mb-2">
          Don’t share sensitive medical data here. In emergencies call 102/112.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={flows[currentStep]?.input ? 'Type your response…' : 'Use the quick options above'}
            className="flex-1 px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1E69F2] focus:border-transparent text-sm"
            disabled={!flows[currentStep]?.input}
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-[#1E69F2] text-white hover:bg-[#1557D1] transition-colors disabled:opacity-50"
            aria-label="Send message"
            disabled={!inputValue.trim() || !flows[currentStep]?.input}
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
