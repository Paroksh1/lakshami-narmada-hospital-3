import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Home, Phone, Calendar, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
            <div className="w-32 h-32 mx-auto bg-gradient-trust rounded-full flex items-center justify-center">
              <Search className="h-16 w-16 text-trust-foreground/70" />
            </div>
          </div>
          
          {/* Content */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We couldn't find the page you're looking for. It might have been moved, 
            deleted, or you may have entered the wrong URL.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <EnhancedButton variant="primary" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go to Homepage
              </Link>
            </EnhancedButton>
            
            <EnhancedButton variant="outline" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </Link>
            </EnhancedButton>
            
            <EnhancedButton variant="emergency" size="lg" asChild>
              <a href="tel:+91" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency: Call Now
              </a>
            </EnhancedButton>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/services" 
                className="text-sm text-primary hover:underline"
              >
                Our Services
              </Link>
              <Link 
                to="/doctors" 
                className="text-sm text-primary hover:underline"
              >
                Find a Doctor
              </Link>
              <Link 
                to="/locations" 
                className="text-sm text-primary hover:underline"
              >
                Hospital Locations
              </Link>
              <Link 
                to="/knowledge-hub" 
                className="text-sm text-primary hover:underline"
              >
                Health Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;