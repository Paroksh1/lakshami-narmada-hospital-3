import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Building, UserCheck, Star } from 'lucide-react';

const ImpactMetrics = () => {
  const [counts, setCounts] = useState({
    patients: 0,
    hospitals: 0,
    specialists: 0,
    satisfaction: 0
  });
  
  const metrics = [
    {
      icon: Users,
      label: 'Patients Treated',
      value: 25000,
      suffix: '+',
      color: 'text-primary'
    },
    {
      icon: Building,
      label: 'Hospitals',
      value: 2,
      suffix: '',
      color: 'text-secondary'
    },
    {
      icon: UserCheck,
      label: 'Pediatric Specialists',
      value: 42,
      suffix: '+',
      color: 'text-accent'
    },
    {
      icon: Star,
      label: 'Patient Satisfaction',
      value: 98,
      suffix: '%',
      color: 'text-warning'
    }
  ];
  
  useEffect(() => {
    const animateCounters = () => {
      metrics.forEach((metric, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = metric.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.value) {
            current = metric.value;
            clearInterval(timer);
          }
          
          setCounts(prev => ({
            ...prev,
            [metric.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(current)
          }));
        }, duration / steps);
      });
    };
    
    animateCounters();
  }, []);
  
  return (
    <section className="section-padding bg-gradient-trust">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of families across the region for exceptional pediatric care and medical excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const key = metric.label.toLowerCase().replace(/\s+/g, '');
            const displayValue = key === 'patientstreated' ? counts.patients 
                                : key === 'hospitals' ? counts.hospitals
                                : key === 'pediatricspecialists' ? counts.specialists
                                : counts.satisfaction;
            
            return (
              <Card key={index} className="card-medical text-center group hover:scale-105">
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${metric.color}`} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-foreground">
                      {displayValue.toLocaleString()}{metric.suffix}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;