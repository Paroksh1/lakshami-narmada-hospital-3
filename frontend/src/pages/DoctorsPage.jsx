import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Clock, Calendar, Languages, Award } from 'lucide-react';

const DoctorsPage = () => {
  const doctors = [
    {
      name: 'Dr. Sanjeev Kumar',
      specialty: 'Pediatric Cardiology',
      experience: '20+ years',
      qualifications: 'MD, DM Cardiology',
      image: 'https://images.unsplash.com/photo-1676313030076-4ac0b37050fd',
      languages: ['Hindi', 'English'],
      availability: 'Mon, Wed, Fri',
      freeConsult: true,
      featured: true
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatric Neurology',
      experience: '15+ years',
      qualifications: 'MD, DM Neurology',
      image: 'https://images.unsplash.com/photo-1676313027775-a5a3dca6f98b',
      languages: ['Hindi', 'English'],
      availability: 'Tue, Thu, Sat',
      freeConsult: true
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Pediatric Specialists
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced team of pediatric specialists committed to providing exceptional care for your children.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="card-medical">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {doctor.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {doctor.specialty}
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {doctor.experience} • {doctor.qualifications}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {doctor.languages.join(', ')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Available: {doctor.availability}
                      </span>
                    </div>
                  </div>
                  
                  {doctor.freeConsult && (
                    <Badge className="mt-3 bg-secondary text-secondary-foreground">
                      Free First Consult
                    </Badge>
                  )}
                  
                  <EnhancedButton variant="primary" size="sm" className="w-full mt-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </EnhancedButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;