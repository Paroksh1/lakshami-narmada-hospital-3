import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Phone, Calendar, Clock, User, Shield, CheckCircle } from 'lucide-react';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  
  // Mock service data - in real app this would come from API
  const service = {
    title: 'Pediatric Cardiology',
    description: 'Comprehensive heart care for children including diagnosis, treatment, and management of congenital and acquired heart conditions.',
    icon: Heart,
    conditions: [
      'Congenital heart defects',
      'Heart murmurs',
      'Arrhythmias',
      'Cardiomyopathy',
      'Chest pain evaluation',
      'Syncope (fainting)',
      'Hypertension in children',
      'Kawasaki disease'
    ],
    procedures: [
      { name: 'Echocardiography', description: 'Ultrasound imaging of the heart' },
      { name: 'ECG/EKG', description: 'Electrical activity recording of the heart' },
      { name: 'Holter monitoring', description: '24-hour continuous heart rhythm monitoring' },
      { name: 'Exercise stress testing', description: 'Heart function assessment during physical activity' },
      { name: 'Cardiac catheterization', description: 'Minimally invasive diagnostic and therapeutic procedures' }
    ],
    preparation: [
      'Bring any previous cardiac reports and test results',
      'List current medications and dosages',
      'Ensure child is well-rested before the appointment',
      'Comfortable clothing recommended for examinations',
      'Fasting may be required for certain procedures (we will inform you)'
    ],
    recovery: [
      'Most diagnostic tests require no recovery time',
      'Follow specific post-procedure instructions if given',
      'Schedule follow-up appointments as recommended',
      'Monitor for any unusual symptoms and report immediately',
      'Continue prescribed medications unless advised otherwise'
    ],
    doctors: [
      {
        name: 'Dr. Sanjeev Kumar',
        title: 'Senior Pediatric Cardiologist',
        experience: '20+ years',
        image: 'https://images.unsplash.com/photo-1676313030076-4ac0b37050fd'
      },
      {
        name: 'Dr. Priya Sharma',
        title: 'Pediatric Interventional Cardiologist',
        experience: '15+ years',
        image: 'https://images.unsplash.com/photo-1676313027775-a5a3dca6f98b'
      }
    ],
    costRange: '₹2,000 - ₹15,000',
    insuranceNote: 'Most procedures covered under major insurance plans'
  };
  
  const faqs = [
    {
      question: 'At what age should a child see a cardiologist?',
      answer: 'Children may need cardiac evaluation at any age, from newborns with congenital conditions to teenagers with symptoms like chest pain or fainting.'
    },
    {
      question: 'Are heart murmurs in children serious?',
      answer: 'Most heart murmurs in children are innocent (harmless). However, some may indicate structural heart problems requiring evaluation.'
    },
    {
      question: 'How long does a pediatric echo take?',
      answer: 'A pediatric echocardiogram typically takes 30-45 minutes, depending on the child\'s cooperation and the complexity of the study.'
    },
    {
      question: 'Is cardiac catheterization safe in children?',
      answer: 'Pediatric cardiac catheterization is generally very safe when performed by experienced specialists, with low complication rates.'
    },
    {
      question: 'Can children with heart conditions play sports?',
      answer: 'Many children with heart conditions can participate in sports with proper evaluation and clearance from their cardiologist.'
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 rounded-xl bg-primary text-primary-foreground">
                <Heart className="h-12 w-12" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Available</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <Heart className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm font-medium text-foreground">First Consult</p>
                  <p className="text-sm text-muted-foreground">Free for New Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium text-foreground">Insurance</p>
                  <p className="text-sm text-muted-foreground">Most Plans Accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Conditions We Treat */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Conditions We Treat
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Procedures */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Procedures & Tests
              </h2>
              <div className="space-y-4">
                {service.procedures.map((procedure, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {procedure.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {procedure.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Preparation & Recovery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Preparation
                </h2>
                <ul className="space-y-3">
                  {service.preparation.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Recovery & Follow-up
                </h2>
                <ul className="space-y-3">
                  {service.recovery.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* FAQs */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-medical sticky top-8">
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Book Consultation
                </h3>
                
                <EnhancedButton variant="primary" size="lg" className="w-full" asChild>
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Free First Consult
                  </Link>
                </EnhancedButton>
                
                <EnhancedButton variant="emergency" size="lg" className="w-full" asChild>
                  <a href="tel:+91" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 24×7 Emergency
                  </a>
                </EnhancedButton>
                
                <Separator />
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">Cost Range</p>
                    <p className="text-sm text-muted-foreground">{service.costRange}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Insurance</p>
                    <p className="text-sm text-muted-foreground">{service.insuranceNote}</p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Doctors */}
            <Card className="card-medical">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Specialists
                </h3>
                <div className="space-y-4">
                  {service.doctors.map((doctor, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-trust">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm">
                          {doctor.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {doctor.title}
                        </p>
                        <p className="text-xs text-primary">
                          {doctor.experience}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <EnhancedButton variant="outline" size="sm" className="w-full mt-4" asChild>
                  <Link to="/doctors">
                    View All Doctors
                  </Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;