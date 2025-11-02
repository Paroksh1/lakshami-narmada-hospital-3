import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { User, Award, Quote, Star, Users, Heart, ArrowRight, Clock } from 'lucide-react';

// CSS for responsive doctor hero section
const doctorHeroStyles = `
  #doctor-hero .container,
  #doctor-hero .hero__container {
    width: min(1200px, 100% - clamp(24px, 6vw, 96px));
    margin-inline: auto;
  }

  #doctor-hero .hero__container {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: clamp(20px, 4vw, 48px);
    align-items: start;
  }

  #doctor-hero .stats-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(12px, 2vw, 16px);
  }

  #doctor-hero .cta-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  #doctor-hero .cta-row a {
    min-height: 44px;
  }

  /* Fluid Typography */
  #doctor-hero h2 {
    font-size: clamp(28px, 5vw, 56px);
    line-height: 1.08;
  }
  
  #doctor-hero .subhead,
  #doctor-hero .designation {
    font-size: clamp(15px, 2.1vw, 18px);
  }
  
  #doctor-hero blockquote,
  #doctor-hero .lede {
    font-size: clamp(15px, 2vw, 17px);
    line-height: 1.55;
  }
  
  #doctor-hero .stat__value {
    font-size: clamp(18px, 3vw, 22px);
    font-weight: 800;
  }
  
  #doctor-hero .stat__label {
    font-size: clamp(12px, 1.8vw, 14px);
  }

  /* Image Card */
  #doctor-hero .hero__image {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    min-height: clamp(260px, 38vw, 560px);
  }

  #doctor-hero .hero__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
  }

  #doctor-hero .hero__image .availability {
    position: absolute;
    left: 16px;
    bottom: 16px;
    right: 16px;
  }

  /* Tablet (≤ 1024px) */
  @media (max-width: 1024px) {
    #doctor-hero .hero__container {
      grid-template-columns: 1fr 1fr;
      gap: clamp(20px, 3vw, 28px);
    }
    #doctor-hero .hero__image {
      min-height: clamp(260px, 45vw, 520px);
    }
  }

  /* Mobile (≤ 768px) */
  @media (max-width: 768px) {
    #doctor-hero .hero__container {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    #doctor-hero .hero__content {
      order: 1;
    }
    
    #doctor-hero .hero__image {
      order: 2;
      min-height: clamp(260px, 60vw, 440px);
    }

    #doctor-hero .stats-row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    #doctor-hero .lede,
    #doctor-hero blockquote {
      max-width: 60ch;
    }

    #doctor-hero,
    #doctor-hero * {
      min-width: 0;
    }
  }

  /* Small Mobile (≤ 480px) */
  @media (max-width: 480px) {
    #doctor-hero h2 {
      font-size: clamp(26px, 8vw, 34px);
    }
    
    #doctor-hero .hero__image {
      min-height: 300px;
    }
    
    #doctor-hero .stats-row {
      grid-template-columns: 1fr;
    }
    
    #doctor-hero .cta-row {
      flex-direction: column;
    }
    
    #doctor-hero .availability {
      left: 12px;
      right: 12px;
      bottom: 12px;
    }
  }

  /* Large Desktop (≥ 1536px) */
  @media (min-width: 1536px) {
    #doctor-hero .hero__container {
      grid-template-columns: 1.1fr 0.9fr;
    }
    
    #doctor-hero .hero__content {
      max-width: 640px;
    }
    
    #doctor-hero .hero__image {
      min-height: 600px;
    }
  }

  /* Interaction & A11y */
  #doctor-hero a:focus-visible {
    outline: 3px solid rgba(26, 77, 176, 0.35);
    outline-offset: 2px;
  }
  
  #doctor-hero .stat,
  #doctor-hero .btn {
    min-height: 44px;
  }
`;

const FounderSection = () => {
  const achievements = [
    { icon: Award, label: 'Experience', value: '20+ Years', color: 'text-primary' },
    { icon: Users, label: 'Patients Treated', value: '15,000+', color: 'text-secondary' },
    { icon: Heart, label: 'Success Rate', value: '98%', color: 'text-accent' },
    { icon: Star, label: 'Patient Rating', value: '4.9/5', color: 'text-warning' }
  ];
  
  return (
    <section className="py-20 md:py-28 bg-[#F9FCFF] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#1A1E2F] mb-6">
                  Visionary Leadership in{' '}
                  <span className="text-primary block">Pediatric Care</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-24 bg-gradient-to-b from-primary to-secondary rounded-full mt-1"></div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#1A1E2F]">Dr. Sanjeev Kumar</h3>
                      <p className="text-lg text-primary font-medium mt-1">
                        Founder & Senior Pediatric Cardiologist
                      </p>
                      <p className="text-muted-foreground">
                        MD, DM Cardiology • AIIMS New Delhi
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-4">
                    <Quote className="h-10 w-10 text-primary/20 absolute -left-2 -top-2" />
                    <blockquote className="text-lg text-muted-foreground leading-relaxed italic pl-6">
                      "Every child deserves access to world-class healthcare. My mission is to ensure that no family has to compromise on their child's health due to accessibility or cost barriers."
                    </blockquote>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over two decades of experience in pediatric medicine, Dr. Kumar founded Laxmi Narmada Hospital with a revolutionary vision: to provide world-class healthcare specifically designed for children, available 24/7.
                    </p>
                    <p>
                      His pioneering work in pediatric emergency care and commitment to making quality healthcare accessible to all families has established our hospital as the most trusted name in children's healthcare across the region.
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  const color = achievement.color.replace('text-', '');
                  return (
                    <div key={index} className="group">
                      <div className="h-full flex items-center gap-3 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${color}/10 to-${color}/20 flex-shrink-0 flex items-center justify-center`}>
                          <Icon className={`h-5 w-5 ${achievement.color}`} />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-[#1A1E2F]">
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

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4 pt-4">
                <EnhancedButton size="lg" variant="outline" asChild>
                  <Link to="/doctors/dr-sanjeev-kumar" className="inline-flex items-center gap-2">
                    <User className="h-5 w-5" />
                    View Profile
                  </Link>
                </EnhancedButton>
              </div>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="relative">
              <div className="relative z-10 w-full h-[480px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-100 to-blue-100 opacity-90"></div>
                <img 
                  src="/images/sanjeev-gupta.png" 
                  alt="Dr. Sanjeev Kumar" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1676313030076-4ac0b37050fd';
                  }}
                />
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
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
              <div className="absolute -right-6 -top-6 w-48 h-48 bg-primary/5 rounded-full -z-10"></div>
              <div className="absolute -left-6 top-1/3 w-32 h-32 bg-secondary/5 rounded-full -z-10"></div>
              
              <div className="absolute -right-4 top-1/4 bg-white rounded-2xl p-4 shadow-lg border border-border/50">
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
              
              <div className="absolute -left-4 bottom-1/3 bg-white rounded-2xl p-4 shadow-lg border border-border/50">
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
    </section>
  );
};

export default FounderSection;
