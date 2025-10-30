import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, Phone, Calendar, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services & Procedures', href: '/services' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Patient Care', href: '/patient-care' },
    { name: 'Knowledge Hub', href: '/knowledge-hub' },
    { name: 'About Us', href: '/about' },
    { name: 'Locations', href: '/locations' },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Emergency Banner */}
      <div className="bg-accent text-accent-foreground px-4 py-2 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          🚑 24×7 Emergency Care Available
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">🎉 First Consultation Free</span>
          <Badge variant="secondary" className="ml-2 bg-accent-foreground/10 text-accent-foreground">
            T&Cs Apply
          </Badge>
        </span>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              LN
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">
                Laxmi Narmada Hospital
              </h1>
              <p className="text-xs text-muted-foreground">
                Children's Specialty Care
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <EnhancedButton variant="outline" size="sm" asChild>
              <a href="tel:+91" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">24×7 Emergency</span>
              </a>
            </EnhancedButton>
            <EnhancedButton variant="primary" size="sm" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book Free Consult
              </Link>
            </EnhancedButton>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <EnhancedButton variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </EnhancedButton>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4">
                  <h2 className="text-lg font-semibold">Menu</h2>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="mt-auto space-y-4 pt-6">
                  <EnhancedButton variant="outline" className="w-full" asChild>
                    <a href="tel:+91" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      24×7 Emergency
                    </a>
                  </EnhancedButton>
                  <EnhancedButton variant="primary" className="w-full" asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Book Free Consult
                    </Link>
                  </EnhancedButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;