import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { 
  Heart, 
  Brain, 
  Stethoscope, 
  Shield, 
  Baby, 
  Activity,
  ArrowRight,
  Users,
  Award
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Pediatric Cardiology',
      description: 'Advanced cardiovascular care for congenital heart defects, arrhythmias, and complex cardiac conditions in children.',
      icon: Heart,
      href: '/services/pediatric-cardiology',
      image: 'https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc2MTgzNzkxOXww&ixlib=rb-4.1.0&q=85',
      stats: ['200+ Cardiac Procedures', 'AIIMS-trained Specialists', '24×7 Emergency Care']
    },
    {
      title: 'Pediatric Neurology', 
      description: 'Comprehensive neurological assessment and treatment for epilepsy, developmental delays, and brain disorders.',
      icon: Brain,
      href: '/services/pediatric-neurology',
      image: 'https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc2MTgzNzkxOXww&ixlib=rb-4.1.0&q=85',
      stats: ['EEG & MRI Facilities', 'Pediatric Epilepsy Center', 'Developmental Assessments']
    },
    {
      title: 'Emergency & Critical Care',
      description: 'Round-the-clock pediatric emergency services with dedicated trauma bay and intensive care units.',
      icon: Shield,
      href: '/services/emergency-care',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc2MTgzNzkxOXww&ixlib=rb-4.1.0&q=85',
      stats: ['24×7 Availability', 'Level II Trauma Center', 'Pediatric ICU (20 beds)'],
      emergency: true
    },
    {
      title: 'Neonatal Intensive Care',
      description: 'State-of-the-art NICU providing life-saving care for premature babies and critically ill newborns.',
      icon: Baby,
      href: '/services/neonatal-care',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwZXF1aXBtZW50fGVufDB8fHx8MTc2MTgzNzkxOXww&ixlib=rb-4.1.0&q=85',
      stats: ['Level III NICU', '95% Success Rate', 'Kangaroo Mother Care']
    },
    {
      title: 'Pediatric Surgery',
      description: 'Minimally invasive surgical procedures with specialized pediatric anesthesia and post-operative care.',
      icon: Activity,
      href: '/services/pediatric-surgery',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxob3NwaXRhbHxlbnwwfHx8fDE3NjE4Mzc5MjR8MA&ixlib=rb-4.1.0&q=85',
      stats: ['Laparoscopic Surgery', '300+ Annual Procedures', 'Child-Safe Anesthesia']
    },
    {
      title: 'General Pediatrics',
      description: 'Comprehensive primary healthcare including preventive care, vaccinations, and developmental monitoring.',
      icon: Stethoscope,
      href: '/services/general-pediatrics',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxob3NwaXRhbHxlbnwwfHx8fDE3NjE4Mzc5MjR8MA&ixlib=rb-4.1.0&q=85',
      stats: ['Growth Monitoring', 'Immunization Programs', '1000+ Families Served']
    }
  ];
  
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Professional Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Medical Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Pediatric
            <span className="block text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From routine check-ups to life-saving procedures, we provide world-class healthcare solutions for children at every stage of development.
          </p>
        </div>

        {/* Professional Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className={`relative overflow-hidden rounded-2xl bg-background border-2 transition-all duration-300 ${
                  service.emergency 
                    ? 'border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10'
                    : 'border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
                }`}>
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        service.emergency 
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Emergency Badge */}
                    {service.emergency && (
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold animate-pulse">
                          24×7 AVAILABLE
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Statistics */}
                    <div className="space-y-2 mb-6">
                      {service.stats.map((stat, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-foreground font-medium">{stat}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <EnhancedButton 
                      variant={service.emergency ? "emergency" : "primary"}
                      size="sm" 
                      className="w-full"
                      asChild
                    >
                      <Link to={service.href} className="flex items-center justify-center gap-2">
                        Learn More & Book Consultation
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">25,000+</div>
              <div className="text-muted-foreground">Patients Treated</div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">42+</div>
              <div className="text-muted-foreground">Medical Specialists</div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">24×7</div>
              <div className="text-muted-foreground">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="text-center mt-12">
          <EnhancedButton variant="outline" size="lg" asChild>
            <Link to="/services" className="inline-flex items-center gap-3">
              View All Medical Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </EnhancedButton>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesGrid;