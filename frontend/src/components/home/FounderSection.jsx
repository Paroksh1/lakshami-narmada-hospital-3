import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { User, Award, Clock } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="card-medical overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-trust">
                  <img 
                    src="https://images.unsplash.com/photo-1676313030076-4ac0b37050fd" 
                    alt="Dr. Sanjeev Kumar - Founder" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    Founder & Senior Pediatrician
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Dr. Sanjeev Kumar
                  </h2>
                  <p className="text-lg text-primary font-medium">
                    Founder & Senior Pediatric Specialist
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    With over 20 years of experience in pediatric medicine, Dr. Kumar founded Laxmi Narmada Hospital with a vision to provide world-class healthcare specifically designed for children.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    His dedication to pediatric emergency care and commitment to making quality healthcare accessible to all families has established our hospital as a trusted name in children's healthcare.
                  </p>
                </div>
                
                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Experience</p>
                      <p className="text-sm text-muted-foreground">20+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <User className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Patients Treated</p>
                      <p className="text-sm text-muted-foreground">15,000+</p>
                    </div>
                  </div>
                </div>
                
                <EnhancedButton variant="primary" size="lg" asChild>
                  <Link to="/doctors/dr-sanjeev-kumar" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    View Full Profile
                  </Link>
                </EnhancedButton>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;