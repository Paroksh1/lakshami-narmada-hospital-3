import React from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Phone, Calendar } from 'lucide-react';

const StickyActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t border-border p-4 sm:hidden">
      <div className="flex gap-3">
        <EnhancedButton 
          variant="outline" 
          size="lg" 
          className="flex-1" 
          asChild
        >
          <a href="tel:+91" className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            24×7 Emergency
          </a>
        </EnhancedButton>
        <EnhancedButton 
          variant="primary" 
          size="lg" 
          className="flex-1" 
          asChild
        >
          <Link to="/contact" className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            Book Free Consult
          </Link>
        </EnhancedButton>
      </div>
    </div>
  );
};

export default StickyActions;