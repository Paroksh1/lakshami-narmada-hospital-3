import React, { useState, useEffect } from 'react';
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
  Plus
} from 'lucide-react';

const ServicesGrid = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6); // Cycle through first 6 services
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  const specialties = [
    { title: 'Specialties', icon: Heart, count: '12+' },
    { title: 'Procedures', icon: Activity, count: '50+' }
  ];
  
  const mainServices = [
    {
      title: 'Pediatric Cardiology',
      description: 'Advanced heart care from congenital conditions to complex interventions',
      icon: Heart,
      href: '/services/pediatric-cardiology',
      stats: '200+ surgeries',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Pediatric Neurology', 
      description: 'Comprehensive brain and nervous system care for developing minds',
      icon: Brain,
      href: '/services/pediatric-neurology',
      stats: '500+ patients',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Emergency Care',
      description: 'Round-the-clock critical care with specialized pediatric protocols',
      icon: Shield,
      href: '/services/emergency-care',
      stats: '24×7 available',
      color: 'from-red-600 to-orange-500'
    },
    {
      title: 'Neonatal ICU',
      description: 'Life-saving care for premature babies and critical newborns',
      icon: Baby,
      href: '/services/neonatal-care', 
      stats: '95% success rate',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Pediatric Surgery',
      description: 'Minimally invasive procedures with faster recovery times',
      icon: Activity,
      href: '/services/pediatric-surgery',
      stats: '300+ procedures',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'General Pediatrics',
      description: 'Comprehensive primary care from infancy through adolescence',
      icon: Stethoscope,
      href: '/services/general-pediatrics',
      stats: '1000+ families',
      color: 'from-emerald-500 to-green-500'
    }
  ];
  
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto">
        {/* Revolutionary Header Design */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Plus className="h-4 w-4" />
                  Comprehensive Care
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Pediatric
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  From routine check-ups to life-saving procedures, we provide world-class healthcare solutions for children at every stage of development.
                </p>
              </div>
              
              {/* Specialties Overview */}
              <div className="flex gap-8">
                {specialties.map((specialty, index) => {
                  const Icon = specialty.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{specialty.count}</div>
                        <div className="text-sm text-muted-foreground">{specialty.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <EnhancedButton size="xl" className="group" asChild>
                <Link to="/services" className="inline-flex items-center gap-3">
                  View All Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </EnhancedButton>
            </div>
            
            {/* Right Side - Interactive Service Showcase */}
            <div className="relative">
              <div className="space-y-4">
                {mainServices.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === activeService;
                  
                  return (
                    <div
                      key={index}
                      className={`relative cursor-pointer ${
                        isActive 
                          ? 'z-10' 
                          : 'opacity-70'
                      }`}
                      onClick={() => setActiveService(index)}
                    >
                      <div className={`relative overflow-hidden rounded-3xl p-6 ${
                        isActive 
                          ? 'bg-gradient-to-r shadow-2xl shadow-primary/25' 
                          : 'bg-muted/50'
                      }`} 
                      style={isActive ? { backgroundImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))` } : {}}>
                        
                        {/* Animated Background Pattern */}
                        {isActive && (
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
                          </div>
                        )}
                        
                        <div className="relative flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-primary/10 text-primary'
                          }`}>
                            <Icon className="h-8 w-8" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-1 ${
                              isActive ? 'text-white' : 'text-foreground'
                            }`}>
                              {service.title}
                            </h3>
                            <p className={`text-sm mb-2 ${
                              isActive ? 'text-white/90' : 'text-muted-foreground'
                            }`}>
                              {service.description}
                            </p>
                            <div className={`text-xs font-medium ${
                              isActive ? 'text-white/80' : 'text-primary'
                            }`}>
                              {service.stats}
                            </div>
                          </div>
                          
                          <div className={`transition-all duration-500 ${
                            isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                          }`}>
                            <ArrowRight className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Service Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {mainServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeService 
                        ? 'bg-primary w-6' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServicesGrid;