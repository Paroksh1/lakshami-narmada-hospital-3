import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Video, Calendar, Home, Shield, FileText, CreditCard } from 'lucide-react';

const PatientCarePage = () => {
  const consultationOptions = [
    {
      title: 'In-Clinic Consultation',
      description: 'Visit our hospital for comprehensive examination',
      icon: Calendar,
      features: ['Physical examination', 'Immediate tests', 'Emergency care']
    },
    {
      title: 'Video Consultation',
      description: 'Consult with doctors from the comfort of your home',
      icon: Video,
      features: ['Follow-up visits', 'Prescription renewal', 'Health advice']
    },
    {
      title: 'Home Vaccination',
      description: 'Safe vaccination services at your doorstep',
      icon: Home,
      features: ['Routine vaccines', 'Safety protocols', 'Convenience']
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            24×7 Emergency Care • First Consultation Free
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Patient Care & Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed around your family's needs with 
            flexible consultation options and transparent pricing.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Consultation Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the consultation method that works best for your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {consultationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="card-service text-center">
                  <div className="p-6">
                    <div className="p-4 rounded-lg bg-primary text-primary-foreground inline-flex mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <EnhancedButton variant="outline" size="sm" className="w-full">
                      Learn More
                    </EnhancedButton>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-medical">
                <div className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Insurance & Billing
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We accept most major insurance plans and offer transparent pricing 
                    with cashless treatment options.
                  </p>
                  <EnhancedButton variant="outline" size="sm">
                    Check Coverage
                  </EnhancedButton>
                </div>
              </Card>
              
              <Card className="card-medical">
                <div className="p-6">
                  <FileText className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Health Records
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Access your child's medical records, test results, and vaccination 
                    history through our secure patient portal.
                  </p>
                  <EnhancedButton variant="outline" size="sm">
                    Access Portal
                  </EnhancedButton>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientCarePage;