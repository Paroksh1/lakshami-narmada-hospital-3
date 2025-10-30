import React from 'react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Shield, CheckCircle, Star, Building, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const coreValues = [
    {
      title: 'Caring',
      subtitle: 'We Do the Kind Thing',
      description: 'Every Laxmi Narmada staff member touches the lives of the children and families in our care. We treat those we serve and each other with kindness and compassion and strive to better understand and respond to the needs of a diverse pediatric community.',
      color: 'text-primary'
    },
    {
      title: 'Safety',
      subtitle: 'We Do the Safe Thing',
      description: 'Children and families have placed their lives and health in our hands. At Laxmi Narmada, our first priority - and the rule of pediatric medicine - is to protect them from harm. We believe that maintaining the highest safety standards is critical to delivering high-quality pediatric care.',
      color: 'text-secondary'
    },
    {
      title: 'Excellence',
      subtitle: 'We Do the Best Thing',
      description: 'In pediatric care, only the best will do. We work as a team to bring experience, advanced technology and best practices to bear in providing the highest-quality care for children and families. We devote ourselves to continuous improvement and innovation in pediatric medicine.',
      color: 'text-accent'
    },
    {
      title: 'Integrity',
      subtitle: 'We Do the Right Thing',
      description: 'Our actions tell the world what Laxmi Narmada is and what we stand for. We act ethically and responsibly in everything we do and hold ourselves accountable. We bring respect, openness and honesty to our encounters with patients, families and coworkers.',
      color: 'text-warning'
    },
    {
      title: 'Transparency',
      subtitle: 'We Follow Complete Transparency',
      description: 'Laxmi Narmada Hospital takes utmost care to maintain transparency in all our pediatric services. Transparency and better public information on affordable cost and world-class quality are essential in pediatric healthcare to help families make informed choices.',
      color: 'text-success'
    }
  ];

  const facilities = [
    'Highly skilled, specially trained and dedicated team of pediatric medical professionals',
    'State-of-the-art Operation Theatres (OT) equipped with child-safe equipment and laminar airflow systems',
    'Advanced Pediatric ICU with specialized monitoring systems for children',
    'Dedicated Neonatal Intensive Care Unit (NICU) with Level III capabilities',
    'Child-friendly imaging services including pediatric-protocol MRI and CT scans',
    'Specialized pediatric emergency department operational 24×7',
    'Family-centered patient rooms designed for comfort of children and parents'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary/90 to-primary/70 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273" 
            alt="Laxmi Narmada Children's Hospital" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Us
            </h1>
            <nav className="text-white/90 text-lg">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-3">></span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Laxmi Narmada Hospital: Leading Pediatric Care Provider
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Laxmi Narmada Children's Hospital is a specialized 200-bedded pediatric care facility inaugurated with a mission to provide world-class healthcare exclusively for children. Located in the heart of the city with easy accessibility, our hospital is designed to be the leading integrated pediatric healthcare delivery provider of the region.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our hospital is committed to child safety & quality from the moment we started our journey. Our mission statement speaks about providing productive life through Quality, Innovation & Excellence in pediatric care, & to live up to the statement we always aim to provide holistic, affordable, transparent, quality care in a safe environment to achieve high patient satisfaction index.
                </p>
                <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-secondary mb-2">
                    Because of our dedicated work towards Quality & Safety, we have achieved NABH certification for pediatric excellence within 1 year of inception.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1578496781379-7dcfb995293d" 
                  alt="Children receiving care at Laxmi Narmada Hospital" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1723031840495-57a7154b191b" 
                  alt="Child-friendly hospital room" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1606206873764-fd15e242df52" 
                  alt="Advanced pediatric medical equipment" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Laxmi Narmada Children's Hospital, we aim to deliver outstanding pediatric healthcare combined with a healing touch specifically designed for children. We are committed to providing young patients with a comprehensive range of tertiary and secondary care services backed by state-of-the-art technology, child-safe infrastructure and specially trained pediatric clinicians.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our facilities are strongly backed by the support of:
              </h3>
              
              <div className="space-y-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{facility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1595464144526-5fb181b74625" 
                  alt="Mission" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide a productive life through Quality, Innovation and Excellence in Pediatric Care
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Vision</h3>
              <div className="space-y-2 text-left max-w-md mx-auto">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Provide</span>
                  <span className="font-bold text-foreground">**H**olistic pediatric healthcare</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Strive for</span>
                  <span className="font-bold text-foreground">**E**xcellence</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Make healthcare</span>
                  <span className="font-bold text-foreground">**A**ffordable</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Achieve</span>
                  <span className="font-bold text-foreground">**L**eadership</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Maintain</span>
                  <span className="font-bold text-foreground">**T**ransparency</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Serve with</span>
                  <span className="font-bold text-foreground">**H**onesty and Humanity</span>
                </div>
                <div className="text-center mt-4">
                  <span className="text-muted-foreground">and thus we will make a</span>
                  <div className="text-2xl font-bold text-primary mt-2">
                    <div>**W**</div>
                    <div>**O**</div>
                    <div>**R**ld of Difference</div>
                    <div>**L**</div>
                    <div>**D**</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514" 
                  alt="Advanced surgical suite" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561" 
                  alt="Hospital facilities" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Right Content - Core Values */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h2>
              
              {coreValues.map((value, index) => (
                <div key={index} className="space-y-3">
                  <h3 className={`text-xl font-bold ${value.color}`}>
                    {value.title}: <span className="text-foreground">{value.subtitle}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Excellence in Pediatric Care?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of families who trust Laxmi Narmada Children's Hospital for their children's healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton 
                variant="secondary" 
                size="xl" 
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  Book Free Consultation
                </Link>
              </EnhancedButton>
              <EnhancedButton 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+91" className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  24×7 Emergency Care
                </a>
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;