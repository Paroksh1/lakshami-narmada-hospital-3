import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Shield } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every child deserves care that is delivered with empathy and understanding'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We maintain the highest standards of safety and hygiene in all our services'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing world-class pediatric healthcare services'
    },
    {
      icon: Users,
      title: 'Family-Centered',
      description: 'We believe in involving families as partners in their child\'s healthcare journey'
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Laxmi Narmada Hospital
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional pediatric healthcare with a commitment 
            to excellence, compassion, and innovation since our founding.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="card-medical mb-12">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Mission & Vision
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To provide comprehensive, compassionate, and accessible pediatric 
                      healthcare services that promote the health and well-being of children 
                      in our community and beyond.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the leading pediatric healthcare provider, recognized for 
                      clinical excellence, innovation, and our commitment to improving 
                      children's health outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-service text-center">
                    <div className="p-6">
                      <div className="p-4 rounded-lg bg-primary text-primary-foreground inline-flex mb-4">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;