import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Heart, Brain, Stethoscope, Eye, Shield, Baby, Syringe, 
  Thermometer, Activity, Bone, Wind, Zap, Search, Filter, Phone, ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');
  
  const services = [
    {
      title: 'Pediatric Cardiology',
      description: 'Comprehensive heart care for children including congenital heart defects, arrhythmias, and cardiac interventions',
      icon: Heart,
      department: 'cardiology',
      ageGroup: 'all',
      conditions: ['Congenital heart disease', 'Heart murmurs', 'Arrhythmias', 'Cardiomyopathy'],
      href: '/services/pediatric-cardiology',
      featured: true
    },
    {
      title: 'Pediatric Neurology',
      description: 'Specialized care for neurological conditions, seizures, developmental delays, and brain disorders',
      icon: Brain,
      department: 'neurology',
      ageGroup: 'all',
      conditions: ['Epilepsy', 'Cerebral palsy', 'Developmental delays', 'Headaches'],
      href: '/services/pediatric-neurology'
    },
    {
      title: 'General Pediatrics',
      description: 'Comprehensive primary healthcare for children from newborn to adolescence',
      icon: Stethoscope,
      department: 'general',
      ageGroup: 'all',
      conditions: ['Regular checkups', 'Growth monitoring', 'Acute illness', 'Preventive care'],
      href: '/services/general-pediatrics',
      popular: true
    },
    {
      title: 'Pediatric Ophthalmology',
      description: 'Specialized eye care, vision screening, and treatment of eye conditions in children',
      icon: Eye,
      department: 'ophthalmology',
      ageGroup: 'all',
      conditions: ['Vision screening', 'Lazy eye', 'Crossed eyes', 'Eye infections'],
      href: '/services/pediatric-ophthalmology'
    },
    {
      title: '24×7 Emergency Care',
      description: 'Round-the-clock pediatric emergency services with specialized trauma care',
      icon: Shield,
      department: 'emergency',
      ageGroup: 'all',
      conditions: ['Accidents', 'Severe illness', 'Breathing problems', 'High fever'],
      href: '/services/emergency-care',
      emergency: true
    },
    {
      title: 'Neonatal Care (NICU)',
      description: 'Specialized intensive care for newborns, premature babies, and critically ill infants',
      icon: Baby,
      department: 'neonatal',
      ageGroup: 'newborn',
      conditions: ['Premature birth', 'Breathing difficulties', 'Birth complications', 'Low birth weight'],
      href: '/services/neonatal-care'
    },
    {
      title: 'Vaccination Services',
      description: 'Complete immunization programs following national and international guidelines',
      icon: Syringe,
      department: 'preventive',
      ageGroup: 'all',
      conditions: ['Routine vaccines', 'Travel vaccines', 'Catch-up schedules', 'Adult vaccines'],
      href: '/services/vaccination'
    },
    {
      title: 'Pediatric Surgery',
      description: 'Minimally invasive surgical procedures and treatment for surgical conditions in children',
      icon: Activity,
      department: 'surgery',
      ageGroup: 'all',
      conditions: ['Appendicitis', 'Hernia repair', 'Congenital anomalies', 'Trauma surgery'],
      href: '/services/pediatric-surgery'
    },
    {
      title: 'Pediatric Orthopedics',
      description: 'Specialized bone, joint, and musculoskeletal care for growing children',
      icon: Bone,
      department: 'orthopedics',
      ageGroup: 'all',
      conditions: ['Fractures', 'Growth disorders', 'Sports injuries', 'Congenital deformities'],
      href: '/services/pediatric-orthopedics'
    },
    {
      title: 'Pediatric Pulmonology',
      description: 'Respiratory care including asthma management and lung disease treatment',
      icon: Wind,
      department: 'pulmonology',
      ageGroup: 'all',
      conditions: ['Asthma', 'Pneumonia', 'Chronic cough', 'Sleep disorders'],
      href: '/services/pediatric-pulmonology'
    },
    {
      title: 'Pediatric ICU',
      description: 'Critical care for seriously ill children requiring intensive monitoring',
      icon: Zap,
      department: 'critical-care',
      ageGroup: 'all',
      conditions: ['Severe illness', 'Post-operative care', 'Multi-organ support', 'Ventilator care'],
      href: '/services/pediatric-icu'
    },
    {
      title: 'Fever Clinic',
      description: 'Specialized fever management and infection control protocols',
      icon: Thermometer,
      department: 'infectious-diseases',
      ageGroup: 'all',
      conditions: ['High fever', 'Viral infections', 'Bacterial infections', 'Unknown fever'],
      href: '/services/fever-clinic'
    }
  ];
  
  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'general', label: 'General Pediatrics' },
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'emergency', label: 'Emergency Care' },
    { value: 'surgery', label: 'Surgery' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'neonatal', label: 'Neonatal Care' }
  ];
  
  const ageGroups = [
    { value: 'all', label: 'All Ages' },
    { value: 'newborn', label: 'Newborn (0-1 month)' },
    { value: 'infant', label: 'Infant (1-12 months)' },
    { value: 'toddler', label: 'Toddler (1-3 years)' },
    { value: 'child', label: 'Child (3-12 years)' },
    { value: 'adolescent', label: 'Adolescent (12-18 years)' }
  ];
  
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.conditions.some(condition => 
                           condition.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesDepartment = selectedDepartment === 'all' || service.department === selectedDepartment;
    const matchesAge = selectedAge === 'all' || service.ageGroup === selectedAge || service.ageGroup === 'all';
    
    return matchesSearch && matchesDepartment && matchesAge;
  });
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-trust text-trust-foreground section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Pediatric Services & Procedures
            </h1>
            <p className="text-lg mb-8">
              Comprehensive healthcare solutions designed specifically for children, 
              from routine care to specialized treatments.
            </p>
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <div className="flex items-center justify-center gap-4 text-sm">
                <Shield className="h-5 w-5 text-accent" />
                <span>24×7 Emergency Care Available</span>
                <span>•</span>
                <Heart className="h-5 w-5 text-secondary" />
                <span>First Consultation Free for New Patients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search services, conditions, or procedures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedAge} onValueChange={setSelectedAge}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map((age) => (
                    <SelectItem key={age.value} value={age.value}>
                      {age.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>
          
          {/* Revolutionary Services Layout */}
          <div className="space-y-8">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${
                  service.emergency 
                    ? 'from-accent/10 via-background to-accent/5 border-2 border-accent/20' 
                    : service.featured
                    ? 'from-primary/10 via-background to-primary/5 border-2 border-primary/20'
                    : 'from-muted/50 via-background to-muted/20 border border-border/50'
                } hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer`}
                onClick={() => window.location.href = service.href}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute ${isEven ? 'top-0 right-0' : 'bottom-0 left-0'} w-64 h-64 rounded-full blur-3xl ${
                      service.emergency ? 'bg-accent' : service.featured ? 'bg-primary' : 'bg-secondary'
                    }`}></div>
                  </div>
                  
                  <div className={`grid lg:grid-cols-12 gap-8 p-8 lg:p-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    
                    {/* Icon & Visual Side */}
                    <div className={`lg:col-span-4 ${isEven ? '' : 'lg:col-start-9'}`}>
                      <div className="relative">
                        {/* Main Icon */}
                        <div className={`w-32 h-32 rounded-3xl flex items-center justify-center mb-6 ${
                          service.emergency 
                            ? 'bg-gradient-to-br from-accent to-accent/80 text-accent-foreground' 
                            : service.featured
                            ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground'
                            : 'bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground'
                        } group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                          <Icon className="h-16 w-16" />
                        </div>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                          {service.featured && (
                            <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                              Featured Service
                            </div>
                          )}
                          {service.popular && (
                            <div className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                              Most Popular
                            </div>
                          )}
                          {service.emergency && (
                            <div className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium animate-pulse">
                              24×7 Available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className={`lg:col-span-8 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div className="space-y-6">
                        {/* Title & Description */}
                        <div className="space-y-4">
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* Conditions Grid */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                            Common Conditions We Treat
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {service.conditions.slice(0, 6).map((condition, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                {condition}
                              </div>
                            ))}
                            {service.conditions.length > 6 && (
                              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                +{service.conditions.length - 6} more conditions
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <EnhancedButton 
                            size="lg" 
                            className="group/btn"
                            asChild
                          >
                            <Link to={service.href} className="flex items-center gap-3">
                              Learn More & Book Consultation
                              <Icon className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </EnhancedButton>
                          
                          {service.emergency && (
                            <EnhancedButton 
                              variant="emergency" 
                              size="lg"
                              asChild
                            >
                              <a href="tel:+91" className="flex items-center gap-3">
                                <Phone className="h-5 w-5" />
                                Call Emergency Now
                              </a>
                            </EnhancedButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No services found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <EnhancedButton 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                  setSelectedAge('all');
                }}
              >
                Clear Filters
              </EnhancedButton>
            </div>
          )}
        </div>
      </section>
      
      {/* Emergency CTA */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Need Emergency Care?
            </h2>
            <p className="text-lg text-accent-foreground/90 mb-8">
              Our pediatric emergency department is open 24/7 with specialized teams 
              ready to provide immediate care for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton 
                variant="secondary" 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a href="tel:+91" className="flex items-center gap-3">
                  <Shield className="h-5 w-5" />
                  Call Emergency Now
                </a>
              </EnhancedButton>
              
              <EnhancedButton 
                variant="outline" 
                size="xl" 
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                asChild
              >
                <Link to="/services/emergency-care">
                  Learn About Emergency Services
                </Link>
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;