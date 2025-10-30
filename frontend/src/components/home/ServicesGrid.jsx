import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  Eye, 
  Shield, 
  Baby, 
  Syringe, 
  Thermometer,
  Activity,
  Bone,
  Lungs,
  Zap
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Pediatric Cardiology',
      description: 'Expert heart care for children from birth to adolescence',
      icon: Heart,
      href: '/services/pediatric-cardiology',
      featured: true
    },
    {
      title: 'Pediatric Neurology',
      description: 'Specialized neurological care and development support',
      icon: Brain,
      href: '/services/pediatric-neurology'
    },
    {
      title: 'General Pediatrics',
      description: 'Comprehensive primary care for children of all ages',
      icon: Stethoscope,
      href: '/services/general-pediatrics',
      popular: true
    },
    {
      title: 'Pediatric Ophthalmology',
      description: 'Specialized eye care and vision correction for children',
      icon: Eye,
      href: '/services/pediatric-ophthalmology'
    },
    {
      title: '24×7 Emergency Care',
      description: 'Round-the-clock emergency medical services',
      icon: Shield,
      href: '/services/emergency-care',
      emergency: true
    },
    {
      title: 'Neonatal Care',
      description: 'Specialized care for newborns and premature babies',
      icon: Baby,
      href: '/services/neonatal-care'
    },
    {
      title: 'Vaccination Services',
      description: 'Complete immunization programs and vaccine schedules',
      icon: Syringe,
      href: '/services/vaccination'
    },
    {
      title: 'Pediatric Surgery',
      description: 'Minimally invasive surgical procedures for children',
      icon: Activity,
      href: '/services/pediatric-surgery'
    },
    {
      title: 'Orthopedic Care',
      description: 'Bone, joint, and musculoskeletal care for growing children',
      icon: Bone,
      href: '/services/pediatric-orthopedics'
    },
    {
      title: 'Pulmonology',
      description: 'Respiratory and lung care including asthma management',
      icon: Lungs,
      href: '/services/pediatric-pulmonology'
    },
    {
      title: 'Pediatric ICU',
      description: 'Critical care for seriously ill children',
      icon: Zap,
      href: '/services/pediatric-icu'
    },
    {
      title: 'Fever Clinic',
      description: 'Dedicated fever management and infection control',
      icon: Thermometer,
      href: '/services/fever-clinic'
    }
  ];
  
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Pediatric Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine check-ups to specialized care, we provide complete healthcare solutions for children at every stage of their development.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="card-service group cursor-pointer"
                onClick={() => window.location.href = service.href}
              >
                <div className="flex flex-col h-full">
                  {/* Header with Icon and Badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      service.emergency 
                        ? 'bg-accent text-accent-foreground' 
                        : service.featured
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      {service.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                      {service.popular && (
                        <Badge variant="outline" className="text-xs">
                          Popular
                        </Badge>
                      )}
                      {service.emergency && (
                        <Badge className="bg-accent text-accent-foreground text-xs">
                          24×7
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-4">
                    <EnhancedButton 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <Link to={service.href}>
                        Learn More
                      </Link>
                    </EnhancedButton>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <EnhancedButton variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services & Procedures
            </Link>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;