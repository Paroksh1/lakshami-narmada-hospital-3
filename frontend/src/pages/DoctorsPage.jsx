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
    },
    {
      name: 'Dr. Rajesh Gupta',
      specialty: 'General Pediatrics',
      experience: '18+ years',
      qualifications: 'MBBS, MD Pediatrics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54',
      languages: ['Hindi', 'English', 'Gujarati'],
      availability: 'Mon-Sat',
      freeConsult: true,
      popular: true
    },
    {
      name: 'Dr. Meera Patel',
      specialty: 'Pediatric Surgery',
      experience: '12+ years',
      qualifications: 'MS, MCh Pediatric Surgery',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      languages: ['Hindi', 'English'],
      availability: 'Mon, Wed, Fri',
      freeConsult: true
    },
    {
      name: 'Dr. Amit Singh',
      specialty: 'Neonatology',
      experience: '16+ years',
      qualifications: 'MD, DM Neonatology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      languages: ['Hindi', 'English'],
      availability: '24x7 On-call',
      freeConsult: true
    },
    {
      name: 'Dr. Kavita Agarwal',
      specialty: 'Pediatric Ophthalmology',
      experience: '14+ years',
      qualifications: 'MS Ophthalmology',
      image: 'https://images.unsplash.com/photo-1594824804732-ca58f6047ba2',
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
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {doctor.freeConsult && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        Free First Consult
                      </Badge>
                    )}
                    {doctor.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                    {doctor.popular && (
                      <Badge variant="outline">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
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