import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Import Home Components
import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import FounderSection from '@/components/home/FounderSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

// Import Icons
import { 
  MapPin, 
  Clock, 
  Phone, 
  Calendar,
  Building,
  Navigation
} from 'lucide-react';

const HomePage = () => {
  const knowledgeHighlights = [
    {
      title: 'Newborn Care Guide',
      type: 'Article',
      summary: 'Essential tips for caring for your newborn in the first few weeks',
      href: '/knowledge-hub/newborn-care-guide',
      icon: FileText
    },
    {
      title: 'Vaccination Schedule',
      type: 'Video',
      summary: 'Complete guide to childhood immunizations and timing',
      href: '/knowledge-hub/vaccination-schedule',
      icon: Video
    },
    {
      title: 'Fever Management',
      type: 'Guide',
      summary: 'When to worry and how to manage fever in children',
      href: '/knowledge-hub/fever-management',
      icon: BookOpen
    },
    {
      title: 'Emergency First Aid',
      type: 'Video',
      summary: 'Essential first aid techniques every parent should know',
      href: '/knowledge-hub/emergency-first-aid',
      icon: Video
    }
  ];
  
  const locations = [
    {
      name: 'Main Hospital - Central',
      address: '123 Medical Center Drive, Central District',
      hours: 'Open 24/7 for Emergency',
      phone: '+91-XXXXXXXXX',
      image: 'https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1'
    },
    {
      name: 'Branch Hospital - North',
      address: '456 Healthcare Avenue, North District',
      hours: 'OPD: 8:00 AM - 8:00 PM | Emergency: 24/7',
      phone: '+91-XXXXXXXXY',
      image: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d'
    }
  ];
  
  const faqData = [
    {
      question: "Is the first consultation really free?",
      answer: "Yes! We offer free first consultations for new patients for standard OPD visits (both in-clinic and video consultations). This excludes emergency services, procedures, tests, and follow-up visits. T&Cs apply - valid for one child per family with proper ID verification."
    },
    {
      question: "Is emergency care available 24/7?",
      answer: "Absolutely! Both our hospitals have fully equipped pediatric emergency departments that operate round-the-clock, 365 days a year. Our emergency teams are specially trained in pediatric care and equipped to handle all types of medical emergencies."
    },
    {
      question: "Do you accept insurance and provide cashless treatment?",
      answer: "Yes, we accept most major insurance providers and TPAs. We offer cashless treatment for covered services. Our billing team can help verify your coverage and guide you through the process."
    },
    {
      question: "What age groups do you treat?",
      answer: "We provide comprehensive care from birth to 18 years of age. Our services include neonatal care for premature babies, pediatric care for children, and adolescent medicine for teenagers."
    },
    {
      question: "Can I book appointments online?",
      answer: "Yes! You can book appointments through our website or by calling our OPD booking number. We also offer video consultations for follow-ups and non-emergency consultations."
    },
    {
      question: "What should I bring for the first visit?",
      answer: "Please bring a valid ID proof, any previous medical records, current medications list, insurance card (if applicable), and for the free consultation - mention it's your first visit with us."
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Founder Section */}
      <FounderSection />
      
      {/* Impact Metrics */}
      <ImpactMetrics />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Knowledge Hub Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Knowledge Hub Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert-backed articles, videos, and guides to help you make informed decisions about your child's health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {knowledgeHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="card-service group cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-trust text-trust-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <EnhancedButton 
                        variant="ghost" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        asChild
                      >
                        <Link to={item.href} className="flex items-center justify-center gap-2">
                          Read More
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </EnhancedButton>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <EnhancedButton variant="outline" size="lg" asChild>
              <Link to="/knowledge-hub">
                Explore Knowledge Hub
              </Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Hospital Locations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two convenient locations serving families across the region with comprehensive pediatric care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="card-medical overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      <Building className="h-3 w-3 mr-1" />
                      Hospital {index + 1}
                    </Badge>
                  </div>
                </div>
                
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
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <EnhancedButton variant="outline" size="sm" className="flex-1" asChild>
                      <a href="#" className="flex items-center justify-center gap-2">
                        <Navigation className="h-4 w-4" />
                        Directions
                      </a>
                    </EnhancedButton>
                    <EnhancedButton variant="primary" size="sm" className="flex-1" asChild>
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Book Visit
                      </Link>
                    </EnhancedButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance & Cashless */}
      <section className="section-padding bg-gradient-trust">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Insurance & Cashless Treatment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We accept all major insurance providers and offer cashless treatment for covered services. Our dedicated billing team ensures a smooth, hassle-free experience for your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">
                Mediclaim Coverage
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Corporate TPA
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                CGHS Empanelled
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Ayushman Bharat
              </Badge>
            </div>
            <EnhancedButton variant="primary" size="lg" asChild>
              <Link to="/patient-care">
                Learn More About Coverage
              </Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services, policies, and procedures.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/20"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Give Your Child the Best Care?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of families who trust us with their children's health. Book your free first consultation today or call our 24×7 emergency line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton 
                variant="secondary" 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  Book Free First Consult
                </Link>
              </EnhancedButton>
              
              <EnhancedButton 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+91" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  Call 24×7 Emergency
                </a>
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;