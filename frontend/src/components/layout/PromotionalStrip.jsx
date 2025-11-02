import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PromotionalStrip = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`hidden sm:block w-full bg-gradient-to-r from-[#1E69F2] to-[#4AA0FF] text-white transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0.5'}`}>
      <div className="container mx-auto px-2 sm:px-4">
        {/* Desktop View */}
        <div className="hidden md:flex h-14 items-center justify-between text-sm">
          {/* Left Section - App Download */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 bg-white/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="hidden lg:block">
                <div className="font-medium text-sm sm:text-base">Download the Laxmi Narmada Health+ App</div>
                <div className="text-xs text-white/80">Your child's care, one tap away.</div>
              </div>
            </div>
          </div>

          {/* Center Section - App Stores */}
          <div className="flex-1 flex justify-center px-2">
            <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
              <span className="hidden md:inline-flex text-sm text-white/80 items-center">Available on</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-9 sm:h-10 px-3 sm:px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-white text-sm font-medium whitespace-nowrap"
                aria-label="Download on Google Play"
              >
                <svg className="h-5 w-5 mr-1.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.76 1.76 0 0 1-.51-.75.91.91 0 0 1 0-.592c.15-.472.47-.88.898-1.11l6.532-3.281-1.898-1.894-7.702 3.864V5.956l7.702 3.864 1.898-1.894L4 2.664c-.427-.23-.948-.278-1.39-.15a.91.91 0 0 0-.592.3z"></path>
                  <path d="M17 17.5c0 .15.02.3.06.44.12.49.51.85 1 .96l2.56.64c.16.04.33.06.5.06.28 0 .55-.06.8-.18.48-.24.79-.7.82-1.24.04-.54-.24-1.06-.72-1.38l-1.08-.81-2.16 1.62c-.1.08-.21.14-.33.18-.12.04-.25.06-.38.06-.14 0-.27-.02-.4-.07-.12-.04-.23-.11-.33-.19l-2.16-1.62-1.08.81c-.48.36-.75.91-.72 1.48.04.57.39 1.08.91 1.32l2.56 1.28c.16.08.33.12.5.12.15 0 .3-.03.44-.1.14-.07.26-.17.36-.3l1.41-2.11-1.41-2.11c-.1-.13-.22-.23-.36-.3-.14-.07-.29-.1-.44-.1-.17 0-.34.04-.5.12l-2.56 1.28c-.52.26-.87.77-.91 1.34-.04.57.24 1.12.72 1.48l1.08.81 2.16-1.62c.1-.08.21-.15.33-.19.13-.05.26-.07.4-.07.13 0 .26.02.38.06.12.04.23.1.33.18l2.16 1.62 1.08-.81c.48-.36.76-.91.72-1.48-.03-.54-.34-1-.82-1.24-.25-.12-.52-.18-.8-.18-.17 0-.34.02-.5.06l-2.56.64c-.49.12-.88.47-1 .96-.04.14-.06.29-.06.44v1.5z"></path>
                </svg>
                <span>Google Play</span>
              </a>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10 h-9 sm:h-10 px-3 sm:px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
                aria-label="Download on App Store"
              >
                <svg className="h-5 w-5 mr-1.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.531-.188-1.19.405-2.39 1.098-3.15.694-.76 1.84-1.25 3.066-1.06zM5.84 2.1c1.16.13 2.29.88 3.08 1.83.76.9 1.19 2.12 1.06 3.22-1.21.08-2.5-.4-3.28-1.33-.78-.95-1.15-2.17-1.06-3.22.04-.24.1-.46.18-.67.08-.21.18-.41.3-.6.12-.19.26-.37.42-.53.16-.16.34-.3.53-.42.19-.12.4-.22.61-.3.21-.08.43-.14.66-.18z"></path>
                  <path d="M20.5 7h-17c-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4v6c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h7v-2.5h-7v-6h17v6h-7v2.5h7c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-6c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6z"></path>
                </svg>
                <span>App Store</span>
              </Button>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <a 
                href="tel:+918586860125" 
                className="h-9 w-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-white/30 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <div className="hidden xl:block">
                <div className="text-xs text-white/80">24/7 Pediatric Helpline</div>
                <div className="font-medium text-sm flex items-center gap-2">
                  <a href="tel:+918586860125" className="hover:underline">+91 85868 60125</a>
                  <span className="text-white/30">|</span>
                  <a 
                    href="https://wa.me/918586860125" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline" 
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Laxmi Narmada Health+</div>
                <div className="text-xs text-white/80">Your child's care, one tap away</div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in">
              <div className="space-y-3">
                <div className="text-sm text-white/80">Download our app</div>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium w-full sm:w-auto"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.76 1.76 0 0 1-.51-.75.91.91 0 0 1 0-.592c.15-.472.47-.88.898-1.11l6.532-3.281-1.898-1.894-7.702 3.864V5.956l7.702 3.864 1.898-1.894L4 2.664c-.427-.23-.948-.278-1.39-.15a.91.91 0 0 0-.592.3z"></path>
                    </svg>
                    Google Play
                  </a>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-10 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.531-.188-1.19.405-2.39 1.098-3.15.694-.76 1.84-1.25 3.066-1.06z"></path>
                      <path d="M20.5 7h-17c-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4v6c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h7v-2.5h-7v-6h17v6h-7v2.5h7c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-6c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6z"></path>
                    </svg>
                    App Store
                  </Button>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10">
                  <div className="text-sm text-white/80 mb-2">Need help? Contact us</div>
                  <div className="space-y-2">
                    <a 
                      href="tel:+918586860125" 
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-white/80" />
                      <div>
                        <div className="text-sm font-medium">+91 85868 60125</div>
                        <div className="text-xs text-white/60">24/7 Pediatric Helpline</div>
                      </div>
                    </a>
                    <a 
                      href="https://wa.me/918586860125" 
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <MessageSquare className="h-5 w-5 text-white/80" />
                      <span className="text-sm">Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionalStrip;
