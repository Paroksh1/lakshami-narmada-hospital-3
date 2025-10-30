import React from 'react';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { MapPin, Clock, Phone, Navigation, Building } from 'lucide-react';

const LocationsPage = () => {
  const locations = [
    {
      name: 'Main Hospital - Central',
      address: '123 Medical Center Drive, Central District, City 123456',
      phone: '+91-XXXXXXXXX',
      hours: 'Emergency: 24/7 | OPD: 8:00 AM - 8:00 PM',
      image: 'https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1',
      departments: ['Emergency Care', 'Pediatric Cardiology', 'NICU', 'Surgery']
    },
    {
      name: 'Branch Hospital - North',
      address: '456 Healthcare Avenue, North District, City 123456',
      phone: '+91-XXXXXXXXY',
      hours: 'Emergency: 24/7 | OPD: 9:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1578496781379-7dcfb995293d',
      departments: ['General Pediatrics', 'Vaccination', 'Outpatient Services']
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Hospital Locations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two convenient locations serving families across the region with 
            comprehensive pediatric care and 24/7 emergency services.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="space-y-8">
            {locations.map((location, index) => (
              <Card key={index} className="card-medical overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto relative">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        <Building className="h-4 w-4" />
                        Hospital {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      {location.name}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Address</p>
                          <p className="text-muted-foreground">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Hours</p>
                          <p className="text-muted-foreground">{location.hours}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <a 
                            href={`tel:${location.phone}`}
                            className="text-accent hover:underline"
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <p className="font-medium text-foreground mb-2">Available Services</p>
                      <div className="flex flex-wrap gap-2">
                        {location.departments.map((dept, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <EnhancedButton variant="outline" className="flex-1" asChild>
                        <a href="#" className="flex items-center justify-center gap-2">
                          <Navigation className="h-4 w-4" />
                          Get Directions
                        </a>
                      </EnhancedButton>
                      <EnhancedButton variant="primary" className="flex-1" asChild>
                        <a href={`tel:${location.phone}`} className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          Call Now
                        </a>
                      </EnhancedButton>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;