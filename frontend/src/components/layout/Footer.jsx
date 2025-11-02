import React from "react";
import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Services & Procedures", href: "/services" },
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Patient Care", href: "/patient-care" },
    { name: "Emergency Care", href: "/contact" },
    { name: "Locations", href: "/locations" },
    { name: "About Us", href: "/about" },
  ];

  const patientResources = [
    { name: "Knowledge Hub", href: "/knowledge-hub" },
    { name: "Appointment Booking", href: "/contact" },
    { name: "Insurance & Billing", href: "/patient-care" },
    { name: "Visiting Guidelines", href: "/patient-care" },
    { name: "Health Records", href: "/patient-care" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Refund Policy", href: "/refunds" },
    { name: "Free Consult T&Cs", href: "/terms/free-first-consult" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/faridabadmedicalcenter/", icon: Facebook, target: "_blank" },
    { name: "YouTube", href: "https://www.youtube.com/@FaridabadMedicalCentre", icon: Youtube, target: "_blank" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border text-sm">
      {/* --- Main Footer --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* --- Hospital Info --- */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                LN
              </div>
              <div>
                <h3 className="font-bold text-foreground text-[clamp(16px,2vw,18px)]">
                  Laxmi Narmada Hospital
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Children's Specialty Care
                </p>
              </div>
            </div>

            <p className="leading-relaxed text-muted-foreground text-[clamp(13px,2vw,14px)]">
              Dedicated to providing 24×7 pediatric emergency care and
              comprehensive children's health services across two state-of-the-art
              facilities.
            </p>

            <div className="space-y-2">
              <div className="flex items-center flex-wrap gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>24×7 Emergency:</span>
                <a
                  href="tel:+918586860125"
                  className="font-medium text-accent hover:underline"
                >
                  +91-8586860125
                </a>
              </div>

              <div className="flex items-center flex-wrap gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>OPD Booking:</span>
                <a
                  href="tel:+918586860125"
                  className="font-medium text-primary hover:underline"
                >
                  +91-8586860125
                </a>
              </div>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground text-[clamp(14px,2vw,15px)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Patient Resources --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground text-[clamp(14px,2vw,15px)]">
              Patient Resources
            </h4>
            <ul className="space-y-3">
              {patientResources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="transition-colors text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact & Hours --- */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground text-[clamp(14px,2vw,15px)]">
              Contact & Hours
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Main Hospital</p>
                  <p className="text-muted-foreground text-[clamp(13px,2vw,14px)]">
                    BPTP Parklands / Piyush Heights side <br />
                    Sector 89, Faridabad, Haryana 121002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="font-medium text-foreground">Emergency</p>
                  <p className="font-medium text-green-600">Open 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:laxmi.narmada.hospital@gmail.com" className="text-muted-foreground hover:text-primary text-[clamp(13px,2vw,14px)] hover:underline">
                  laxmi.narmada.hospital@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Divider --- */}
        <Separator className="my-10" />

        {/* --- Newsletter + Social Links --- */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Newsletter */}
          <div className="flex-1 max-w-md">
            <h4 className="mb-2 font-semibold text-foreground text-[clamp(14px,2vw,15px)]">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Get the latest health tips and hospital updates delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <EnhancedButton size="sm" variant="primary" className="whitespace-nowrap">
                Subscribe
              </EnhancedButton>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="font-medium text-foreground text-[clamp(13px,2vw,14px)]">
              Follow Us:
            </span>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Laxmi Narmada Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 text-center">
              {policies.map((policy, index) => (
                <React.Fragment key={policy.name}>
                  <Link
                    to={policy.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {policy.name}
                  </Link>
                  {index < policies.length - 1 && (
                    <span className="text-muted-foreground/50 hidden sm:inline">
                      •
                    </span>
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
