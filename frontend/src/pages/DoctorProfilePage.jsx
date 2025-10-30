import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Calendar, Award, Languages, Clock, MapPin } from 'lucide-react';

const DoctorProfilePage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container mx-auto">
        <Card className="card-medical max-w-4xl mx-auto">
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1676313030076-4ac0b37050fd" 
                    alt="Dr. Sanjeev Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  Dr. Sanjeev Kumar
                </h1>
                <p className="text-primary font-medium mb-4">
                  Founder & Senior Pediatric Cardiologist
                </p>
                <Badge className="bg-secondary text-secondary-foreground">
                  Free First Consult Available
                </Badge>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    About Dr. Kumar
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Sanjeev Kumar is a renowned pediatric cardiologist with over 20 years of experience 
                    in treating children with heart conditions. He founded Laxmi Narmada Hospital with a 
                    vision to provide world-class pediatric cardiac care accessible to all families.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Experience</h3>
                    <p className="text-muted-foreground text-sm">20+ Years</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                    <p className="text-muted-foreground text-sm">Hindi, English</p>
                  </div>
                </div>
                
                <EnhancedButton variant="primary" size="lg" className="w-full">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Free First Consultation
                </EnhancedButton>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DoctorProfilePage;