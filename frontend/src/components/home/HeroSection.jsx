import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, Clock, Shield, Heart, Award } from 'lucide-react';

const HeroSection = () => {
  const trustBadges = [
    { icon: Clock, text: '24×7 Pediatric ER' },
    { icon: Heart, text: 'First Consult Free' },
    { icon: Shield, text: '2 Hospitals' },
    { icon: Award, text: '40+ Specialists' },
  ];
  
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273" 
          alt="Healthcare provider with child" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Laxmi Narmada Children's Hospital
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Open 24/7 for pediatric emergencies • First consultation is free
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          
          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                >
                  <Icon className="h-6 w-6 text-primary-foreground" />
                  <span className="text-sm font-medium text-center">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-12 text-background" 
          preserveAspectRatio="none" 
          viewBox="0 0 1200 120" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,120 L1200,120 L1200,0 Q600,60 0,0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;