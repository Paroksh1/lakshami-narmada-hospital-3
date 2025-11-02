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
    <section className="section-padding overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className={`space-y-6 md:space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-3 md:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Comprehensive Care
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Pediatric
                  <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  From routine check-ups to life-saving procedures, we provide world-class healthcare solutions for children at every stage of development.
                </p>
              </div>
              
              {/* Specialties Overview */}
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {specialties.map((specialty, index) => {
                  const Icon = specialty.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-foreground">{specialty.count}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{specialty.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <EnhancedButton size="xl" className="group" asChild>
                <Link to="/services" className="inline-flex items-center gap-3">
                  View All Services
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </EnhancedButton>
            </div>
            
            {/* Right Side - Interactive Service Showcase */}
            <div className="relative mt-8 lg:mt-0">
              <div className="space-y-3 sm:space-y-4">
                {mainServices.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === activeService;
                  
                  return (
                    <div
                      key={index}
                      className={`relative cursor-pointer transition-opacity duration-300 ${
                        isActive ? 'z-10' : 'opacity-70 hover:opacity-90'
                      }`}
                      onClick={() => setActiveService(index)}
                    >
                      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-muted/50 shadow-sm sm:shadow-md hover:shadow-lg transition-shadow">
                        <div className="relative flex items-start sm:items-center gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                            <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 text-foreground line-clamp-1">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3">
                              {service.description}
                            </p>
                            <div className="text-xs font-medium text-primary mt-1.5">
                              {service.stats}
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0 ml-2 sm:ml-4">
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeService 
                        ? 'bg-primary w-6' 
                        : 'bg-muted-foreground/30 w-2'
                    }`}
                    aria-label={`Go to service ${index + 1}`}
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