import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The 24/7 emergency service saved my daughter's life. The staff was incredibly caring and professional throughout our stay.",
      parent: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      service: "Emergency Care"
    },
    {
      quote: "Dr. Kumar and his team provided exceptional care for my son's heart condition. The free first consultation helped us get started without any financial stress.",
      parent: "Rajesh Patel",
      location: "Pune",
      rating: 5,
      service: "Pediatric Cardiology"
    },
    {
      quote: "Outstanding facilities and child-friendly environment. My twins felt comfortable throughout their vaccination process.",
      parent: "Anita Singh",
      location: "Delhi",
      rating: 5,
      service: "Vaccination Services"
    },
    {
      quote: "The knowledge hub helped me understand my child's condition better. Truly appreciated the educational approach to healthcare.",
      parent: "Mohammad Ali",
      location: "Bangalore",
      rating: 5,
      service: "Patient Education"
    },
    {
      quote: "Excellent neonatal care for our premature baby. The NICU staff was amazing and kept us informed every step of the way.",
      parent: "Deepika Gupta",
      location: "Chennai",
      rating: 5,
      service: "Neonatal Care"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Families Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from parents who trust us with their children's health and well-being.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="card-medical text-center relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-12 w-12 text-primary" />
            </div>
            
            <div className="p-8 lg:p-12">
              {/* Service Badge */}
              <Badge variant="outline" className="mb-6">
                {testimonials[currentIndex].service}
              </Badge>
              
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 font-medium italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].parent}
                </p>
                <p className="text-sm text-muted-foreground">
                  Parent from {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </Card>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <EnhancedButton 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </EnhancedButton>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <EnhancedButton 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </EnhancedButton>
          </div>
          
          {/* Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card 
                key={index} 
                className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                  index === currentIndex ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="text-center space-y-2">
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-xs font-medium text-foreground">
                    {testimonial.parent}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;