import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Phone, Calendar, Clock, Shield, Heart, Award, Star, Users, Building, ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    patients: 0,
    specialists: 0,
    satisfaction: 0
  });
  
  useEffect(() => {
    // Animate numbers on load
    const animateNumber = (key, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };
    
    setTimeout(() => {
      animateNumber('patients', 25000);
      animateNumber('specialists', 42);
      animateNumber('satisfaction', 98);
    }, 500);
    
    // Cycle through stats
    const statInterval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(statInterval);
  }, []);
  
  const stats = [
    { 
      label: 'Patients Treated', 
      value: animatedNumbers.patients, 
      suffix: '+',
      icon: Users,
      description: 'Families trust us with their children\'s health'
    },
    { 
      label: 'Pediatric Specialists', 
      value: animatedNumbers.specialists, 
      suffix: '+',
      icon: Award,
      description: 'Expert doctors across all specialties'
    },
    { 
      label: 'Patient Satisfaction', 
      value: animatedNumbers.satisfaction, 
      suffix: '%',
      icon: Star,
      description: 'Excellence in care and service'
    }
  ];
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 opacity-30 lg:opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273" 
          alt="Healthcare provider with child" 
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-primary-foreground">
            {/* Trust Indicator */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white"></div>
              </div>
              <span className="text-sm font-medium">Trusted by 25,000+ families</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Children's
                <span className="block">Healthcare</span>
                <span className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Advanced pediatric care available 24/7 with your first consultation absolutely free
              </p>
            </div>
            
            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">24×7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">Free First Consult</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <Building className="h-5 w-5" />
                <span className="text-sm font-medium">2 Hospitals</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <EnhancedButton 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 shadow-2xl"
                asChild
              >
                <Link to="/contact" className="inline-flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </EnhancedButton>
              
              <EnhancedButton 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <a href="tel:+91" className="inline-flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Emergency: Call Now
                </a>
              </EnhancedButton>
            </div>
            
            {/* Video CTA */}
            <div className="flex items-center gap-4 pt-4">
              <button className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="h-5 w-5 ml-1" />
                </div>
                <span className="text-sm font-medium">Watch our story</span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Interactive Stats */}
          <div className="lg:ml-auto">
            <div className="space-y-6">
              {/* Main Stat Display */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-4 p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                  {(() => {
                    const currentStatData = stats[currentStat];
                    const Icon = currentStatData.icon;
                    return (
                      <>
                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-white">
                            {currentStatData.value.toLocaleString()}{currentStatData.suffix}
                          </div>
                          <div className="text-lg font-medium text-white/90">
                            {currentStatData.label}
                          </div>
                          <div className="text-sm text-white/70 max-w-48">
                            {currentStatData.description}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
              
              {/* Stat Navigation */}
              <div className="flex justify-center lg:justify-start gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentStat(index)}
                      className={`p-4 rounded-2xl transition-all duration-300 ${
                        index === currentStat 
                          ? 'bg-white/20 scale-105' 
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </button>
                  );
                })}
              </div>
              
              {/* Additional Trust Elements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">NABH</div>
                  <div className="text-xs text-white/70">Accredited</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <Award className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">ISO</div>
                  <div className="text-xs text-white/70">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-16 text-background" 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,120 L1200,120 L1200,0 C1200,0 600,80 0,0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;