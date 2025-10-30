import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock, Calendar, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Services & Procedures', href: '/services' },
    { name: 'Find a Doctor', href: '/doctors' },
    { name: 'Patient Care', href: '/patient-care' },
    { name: 'Emergency Care', href: '/contact' },
    { name: 'Locations', href: '/locations' },
    { name: 'About Us', href: '/about' },
  ];
  
  const patientResources = [
    { name: 'Knowledge Hub', href: '/knowledge-hub' },
    { name: 'Appointment Booking', href: '/contact' },
    { name: 'Insurance & Billing', href: '/patient-care' },
    { name: 'Visiting Guidelines', href: '/patient-care' },
    { name: 'Health Records', href: '/patient-care' },
  ];
  
  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Free Consult T&Cs', href: '/terms/free-first-consult' },
    { name: 'Sitemap', href: '/sitemap' },
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ];
  
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                LN
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Laxmi Narmada Hospital
                </h3>
                <p className="text-sm text-muted-foreground">
                  Children's Specialty Care
                </p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated to providing 24×7 pediatric emergency care and comprehensive children's health services across two state-of-the-art facilities.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>24×7 Emergency: </span>
                <a href="tel:+91" className="text-accent hover:underline font-medium">
                  +91-XXXXXXXXX
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>OPD Booking: </span>
                <a href="tel:+91" className="text-primary hover:underline font-medium">
                  +91-XXXXXXXXX
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Patient Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Patient Resources</h4>
            <ul className="space-y-3">
              {patientResources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Hours */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact & Hours</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Main Hospital</p>
                    <p className="text-muted-foreground">
                      123 Medical Center Drive<br />
                      City, State 123456
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Emergency</p>
                  <p className="text-success font-medium">Open 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    info@laxminaramada.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Newsletter & Social */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1 max-w-md">
            <h4 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest health tips and hospital updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <EnhancedButton size="sm" variant="primary">
                Subscribe
              </EnhancedButton>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground">Follow Us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="h-8 w-8 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Laxmi Narmada Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {policies.map((policy, index) => (
                <React.Fragment key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {policy.name}
                  </Link>
                  {index < policies.length - 1 && (
                    <span className="text-muted-foreground/50">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;