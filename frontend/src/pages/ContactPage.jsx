import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare,
  Shield,
  Heart,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    concern: '',
    preferredLocation: '',
    preferredTime: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Appointment request submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        phone: '',
        childAge: '',
        concern: '',
        preferredLocation: '',
        preferredTime: '',
        consent: false
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const quickActions = [
    {
      title: 'Call 24×7 Emergency',
      description: 'Immediate medical attention for urgent cases',
      icon: Phone,
      action: 'tel:+91',
      variant: 'emergency',
      badge: 'Emergency'
    },
    {
      title: 'Book Free First Consult',
      description: 'Schedule your child\'s first consultation at no cost',
      icon: Calendar,
      action: '#booking-form',
      variant: 'primary',
      badge: 'Free'
    }
  ];
  
  const locations = [
    {
      name: 'Main Hospital - Central',
      address: '123 Medical Center Drive, Central District, City 123456',
      phone: '+91-XXXXXXXXX',
      hours: 'Emergency: 24/7 | OPD: 8:00 AM - 8:00 PM',
      map: '#'
    },
    {
      name: 'Branch Hospital - North',
      address: '456 Healthcare Avenue, North District, City 123456',
      phone: '+91-XXXXXXXXY',
      hours: 'Emergency: 24/7 | OPD: 9:00 AM - 6:00 PM',
      map: '#'
    }
  ];
  
  const faqItems = [
    {
      question: 'Is the first consultation really free?',
      answer: 'Yes! New patients get their first OPD consultation absolutely free. Valid for one child per family with proper ID verification.'
    },
    {
      question: 'How do I book an emergency appointment?',
      answer: 'For emergencies, please call our 24×7 helpline directly or visit the emergency department. No prior appointment needed for emergencies.'
    },
    {
      question: 'What documents should I bring?',
      answer: 'Please bring valid ID proof, previous medical records, current medications list, and insurance card if applicable.'
    },
    {
      question: 'Do you provide video consultations?',
      answer: 'Yes, we offer video consultations for follow-ups and non-emergency cases. Book through our website or call our OPD number.'
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Contact & Book Appointment
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with our healthcare team or book your consultation. 
              We're here to help 24/7 for emergency cases.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm bg-primary/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <Shield className="h-5 w-5 text-accent" />
              <span>24×7 Emergency Available</span>
              <span>•</span>
              <Heart className="h-5 w-5 text-secondary" />
              <span>First Consultation Free</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Actions */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card key={index} className="card-medical group cursor-pointer" onClick={() => {
                  if (action.action.startsWith('tel:')) {
                    window.location.href = action.action;
                  } else {
                    document.querySelector(action.action)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <div className="flex items-center gap-4 p-6">
                    <div className={`p-4 rounded-lg ${
                      action.variant === 'emergency' 
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {action.title}
                        </h3>
                        <Badge className={action.variant === 'emergency' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}>
                          {action.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Booking Form */}
      <section id="booking-form" className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="card-medical">
              <div className="p-8">
                <div className="text-center mb-6">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Book Free First Consultation
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll contact you to confirm your appointment
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Parent/Guardian Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Child's Age *
                      </label>
                      <Select value={formData.childAge} onValueChange={(value) => handleInputChange('childAge', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newborn">Newborn (0-1 month)</SelectItem>
                          <SelectItem value="infant">Infant (1-12 months)</SelectItem>
                          <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
                          <SelectItem value="child">Child (3-12 years)</SelectItem>
                          <SelectItem value="adolescent">Adolescent (12-18 years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Location *
                      </label>
                      <Select value={formData.preferredLocation} onValueChange={(value) => handleInputChange('preferredLocation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select hospital" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="main">Main Hospital - Central</SelectItem>
                          <SelectItem value="branch">Branch Hospital - North</SelectItem>
                          <SelectItem value="video">Video Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Chief Concern/Reason for Visit
                    </label>
                    <Textarea
                      value={formData.concern}
                      onChange={(e) => handleInputChange('concern', e.target.value)}
                      placeholder="Please describe your child's symptoms or reason for the visit..."
                      rows={4}
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked)}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      I agree to the{' '}
                      <a href="/terms/free-first-consult" className="text-primary hover:underline">
                        terms and conditions
                      </a>{' '}
                      for the free first consultation offer and consent to being contacted by the hospital for appointment confirmation.
                    </label>
                  </div>
                  
                  <EnhancedButton 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Submit Appointment Request
                      </div>
                    )}
                  </EnhancedButton>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Hospital Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit us at either of our convenient locations or contact us directly
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="card-medical">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {location.address}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        {location.hours}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm">
                      <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                      <a 
                        href={`tel:${location.phone}`}
                        className="text-accent hover:underline font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        info@laxminaramada.com
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex gap-2">
                    <EnhancedButton variant="outline" size="sm" className="flex-1" asChild>
                      <a href={location.map} className="flex items-center justify-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Get Directions
                      </a>
                    </EnhancedButton>
                    <EnhancedButton variant="primary" size="sm" className="flex-1" asChild>
                      <a href={`tel:${location.phone}`} className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </EnhancedButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about appointments and our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="card-medical">
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;