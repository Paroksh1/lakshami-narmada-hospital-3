import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { User, Award, Clock, Quote, Star, Users, Heart, ArrowRight } from 'lucide-react';

const FounderSection = () => {
  const achievements = [
    { icon: Award, label: 'Experience', value: '20+ Years', color: 'text-primary' },
    { icon: Users, label: 'Patients Treated', value: '15,000+', color: 'text-secondary' },
    { icon: Heart, label: 'Success Rate', value: '98%', color: 'text-accent' },
    { icon: Star, label: 'Patient Rating', value: '4.9/5', color: 'text-warning' }
  ];
  
  return (
    <section className="section-padding bg-gradient-to-br from-muted/30 to-trust/20 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Meet Our Founder
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Visionary Leadership in
              <span className="block text-primary">Pediatric Care</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Doctor Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                      Dr. Sanjeev Kumar
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      Founder & Senior Pediatric Cardiologist
                    </p>
                    <p className="text-muted-foreground">
                      MD, DM Cardiology • AIIMS New Delhi
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="relative">
                <Quote className="h-12 w-12 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed pl-8 italic">
                  "Every child deserves access to world-class healthcare. My mission is to ensure that no family has to compromise on their child's health due to accessibility or cost barriers."
                </blockquote>
              </div>
              
              {/* Story */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  With over two decades of experience in pediatric medicine, Dr. Kumar founded Laxmi Narmada Hospital with a revolutionary vision: to provide world-class healthcare specifically designed for children, available 24/7.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  His pioneering work in pediatric emergency care and commitment to making quality healthcare accessible to all families has established our hospital as the most trusted name in children's healthcare across the region.
                </p>
              </div>
              
              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${achievement.color.split('-')[1]}/10 to-${achievement.color.split('-')[1]}/20 flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${achievement.color}`} />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground">
                            {achievement.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA */}
              <div className="flex gap-4">
                <EnhancedButton size="lg" asChild>
                  <Link to="/doctors/dr-sanjeev-kumar" className="inline-flex items-center gap-2">
                    <User className="h-5 w-5" />
                    View Complete Profile
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </EnhancedButton>
                
                <EnhancedButton variant="outline" size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Book Consultation
                  </Link>
                </EnhancedButton>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative">
                {/* Background Decorations */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-trust/20 rounded-3xl blur-2xl"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Doctor Image */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1676313030076-4ac0b37050fd" 
                    alt="Dr. Sanjeev Kumar - Founder" 
                    className="w-full h-[600px] object-cover"
                  />
                  
                  {/* Image Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">Available for Consultation</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Next Available: Today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -right-8 top-1/4 bg-white rounded-2xl p-4 shadow-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Excellence Award</div>
                      <div className="text-xs text-muted-foreground">Pediatric Care 2023</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-8 bottom-1/3 bg-white rounded-2xl p-4 shadow-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">15,000+</div>
                      <div className="text-xs text-muted-foreground">Children Treated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;