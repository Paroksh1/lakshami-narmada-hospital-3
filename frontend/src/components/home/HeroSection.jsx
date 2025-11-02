import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  Phone,
  Calendar,
  Clock,
  Shield,
  Heart,
  Award,
  Star,
  Users,
  Building,
  ArrowRight,
  Play,
} from "lucide-react";

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    patients: 0,
    specialists: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const animateNumber = (key, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedNumbers((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };

    setTimeout(() => {
      animateNumber("patients", 25000);
      animateNumber("specialists", 42);
      animateNumber("satisfaction", 98);
    }, 500);

    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3500);

    return () => clearInterval(statInterval);
  }, []);

  const stats = [
    {
      label: "Patients Treated",
      value: animatedNumbers.patients,
      suffix: "+",
      icon: Users,
      description: "Families trust us with their children’s health",
    },
    {
      label: "Pediatric Specialists",
      value: animatedNumbers.specialists,
      suffix: "+",
      icon: Award,
      description: "Expert doctors across all specialties",
    },
    {
      label: "Patient Satisfaction",
      value: animatedNumbers.satisfaction,
      suffix: "%",
      icon: Star,
      description: "Excellence in care and service",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-56 md:h-56 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-72 md:h-72 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Subtle Hero Image Overlay */}
      <div className="absolute inset-0 opacity-15 sm:opacity-25 md:opacity-35 lg:opacity-50">
        <img
          src="https://images.unsplash.com/photo-1576766125535-b04e15fd0273"
          alt="Healthcare professional with child"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/60 via-primary/70 to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text & CTAs */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Trust Indicator */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white" />
                <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium">
                Trusted by 25,000+ families
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="font-bold leading-tight text-[clamp(2rem,5vw,4rem)]">
                <span className="block">Children’s</span>
                <span className="block">Healthcare</span>
                <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-[clamp(0.9rem,2.5vw,1.25rem)] text-white/90 max-w-xl mx-auto lg:mx-0">
                Advanced pediatric care available 24×7 with your first
                consultation absolutely free.
              </p>
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {[
                { icon: Clock, text: "24×7 Emergency" },
                { icon: Heart, text: "Free First Consult" },
                { icon: Building, text: "2 Hospitals" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/10 backdrop-blur-sm text-xs sm:text-sm"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2">
              <EnhancedButton
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg w-full sm:w-auto justify-center"
                asChild
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </EnhancedButton>

              <EnhancedButton
                variant="ghost"
                size="lg"
                className="border border-white/30 text-white hover:bg-white/10 w-full sm:w-auto justify-center"
                asChild
              >
                <a href="tel:+918586860125">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: Call Now
                </a>
              </EnhancedButton>
            </div>

            {/* Video CTA */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <Link
                to="/about"
                className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
                  <Play className="h-4 w-4 ml-0.5" />
                </div>
                <span className="text-sm sm:text-base font-medium">
                  Watch our story
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Animated Stats */}
          <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-end gap-6">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6">
                {(() => {
                  const stat = stats[currentStat];
                  const Icon = stat.icon;
                  return (
                    <>
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-3xl font-bold text-white">
                          {stat.value.toLocaleString()}
                          {stat.suffix}
                        </h3>
                        <p className="text-sm text-white/90">{stat.label}</p>
                        <p className="text-xs text-white/70 mt-1">
                          {stat.description}
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStat(idx)}
                    className={`p-3 rounded-xl transition-all ${
                      idx === currentStat
                        ? "bg-white/25 scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                    aria-label={stat.label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </button>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { icon: Shield, title: "NABH", subtitle: "Accredited" },
                { icon: Award, title: "ISO", subtitle: "Certified" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-3 backdrop-blur-sm"
                >
                  <badge.icon className="h-6 w-6 text-white mb-1" />
                  <p className="text-white font-bold">{badge.title}</p>
                  <p className="text-white/70 text-xs">{badge.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 text-background">
        <svg
          className="w-full h-10 sm:h-14 md:h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.3"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
