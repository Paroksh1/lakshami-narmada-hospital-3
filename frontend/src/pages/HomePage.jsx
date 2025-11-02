import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// UI
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Home Sections
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import FounderSection from "@/components/home/FounderSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

// Icons
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  Building,
  Navigation,
  Stethoscope,
  HeartPulse,
  Syringe,
  Baby,
  Ambulance,
  Brain,
  Bone,
  Activity,
  ShieldCheck,
  Users,
  Star,
  CheckCircle2,
} from "lucide-react";

// SEO Component
const SEO = () => (
  <Helmet>
    <title>Lakshmi Narmada Children Hospital | Best Pediatric & Neonatal Care in Faridabad</title>
    <meta name="description" content="Lakshmi Narmada Children Hospital in Sector 89, Faridabad offers expert pediatric care, neonatal ICU, vaccination, and child surgery services with a compassionate team of doctors." />
    <meta name="keywords" content="children hospital faridabad, pediatric care, child specialist, neonatal ICU, vaccination, pediatric surgery, 24/7 emergency hospital, child healthcare, Faridabad hospital, best pediatric hospital Haryana" />
    <meta property="og:title" content="Lakshmi Narmada Children Hospital | Best Pediatric & Neonatal Care in Faridabad" />
    <meta property="og:description" content="Lakshmi Narmada Children Hospital in Sector 89, Faridabad offers expert pediatric care, neonatal ICU, vaccination, and child surgery services with a compassionate team of doctors." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lakshminarmadahospital.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Lakshmi Narmada Children Hospital",
        "description": "Best Pediatric & Neonatal Care Hospital in Faridabad, Haryana",
        "url": "https://lakshminarmadahospital.com",
        "logo": "https://lakshminarmadahospital.com/logo.png",
        "image": "https://lakshminarmadahospital.com/hospital-building.jpg",
        "telephone": "+91 129 1234567",
        "email": "info@lakshminarmadahospital.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 89, Near BPTP Villas",
          "addressLocality": "Faridabad",
          "addressRegion": "Haryana",
          "postalCode": "121002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.4089",
          "longitude": "77.3178"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "priceRange": "$$",
        "medicalSpecialty": [
          "Pediatrics",
          "Neonatology",
          "Pediatric Surgery",
          "Pediatric Cardiology",
          "Pediatric Neurology"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Medical Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Pediatric Care",
              "itemListElement": [
                { "@type": "MedicalProcedure", "name": "Well-child visits" },
                { "@type": "MedicalProcedure", "name": "Vaccinations" },
                { "@type": "MedicalProcedure", "name": "Sick visits" },
                { "@type": "MedicalProcedure", "name": "Developmental screenings" }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Neonatal Care",
              "itemListElement": [
                { "@type": "MedicalProcedure", "name": "NICU" },
                { "@type": "MedicalProcedure", "name": "Premature baby care" },
                { "@type": "MedicalProcedure", "name": "Newborn screening" }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Emergency Care",
              "itemListElement": [
                { "@type": "MedicalProcedure", "name": "24/7 Pediatric Emergency" },
                { "@type": "MedicalProcedure", "name": "Trauma Care" },
                { "@type": "MedicalProcedure", "name": "Critical Care" }
              ]
            }
          ]
        }
      })}
    </script>
  </Helmet>
);

const HomePage = () => {
  // --- DATA ------------------------------------------------------------------
  const locations = [
    {
      name: "Faridabad Medical Centre",
      address: "Plot NO 458, Sector 21B, Faridabad, Haryana 121001",
      hours: "Open 24/7 for Emergency",
      phone: "+91-8586860125",
      image: "/images/fms.png",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Faridabad+Medical+Centre+Plot+458+Sector+21B+Faridabad",
    },
    {
      name: "Laxmi Narmada Children's Hospital",
      address: "Sector 89, Near BPTP Villas, Faridabad, Haryana",
      hours: "OPD: 8:00 AM - 8:00 PM | Emergency: 24/7",
      phone: "+91-8586860125",
      image: "/images/laxmi-narmada-hospital.png",
      mapLink:
        "https://www.google.com/maps/search/?api=1&query=Laxmi+Narmada+Children+Hospital+Sector+89+Faridabad",
    },
  ];

  const faqData = [
    {
      question: "Is the first consultation really free?",
      answer:
        "Yes! We offer free first consultations for new patients for standard OPD visits (both in-clinic and video consultations). This excludes emergency services, procedures, tests, and follow-up visits. T&Cs apply - valid for one child per family with proper ID verification.",
    },
    {
      question: "Is emergency care available 24/7?",
      answer:
        "Absolutely! Both our hospitals have fully equipped pediatric emergency departments that operate round-the-clock, 365 days a year. Our emergency teams are specially trained in pediatric care and equipped to handle all types of medical emergencies.",
    },
    {
      question: "Do you accept insurance and provide cashless treatment?",
      answer:
        "Yes, we accept most major insurance providers and TPAs. We offer cashless treatment for covered services. Our billing team can help verify your coverage and guide you through the process.",
    },
    {
      question: "What age groups do you treat?",
      answer:
        "We provide comprehensive care from birth to 18 years of age. Our services include neonatal care for premature babies, pediatric care for children, and adolescent medicine for teenagers.",
    },
    {
      question: "Can I book appointments online?",
      answer:
        "Yes! You can book appointments through our website or by calling our OPD booking number. We also offer video consultations for follow-ups and non-emergency consultations.",
    },
    {
      question: "What should I bring for the first visit?",
      answer:
        "Please bring a valid ID proof, any previous medical records, current medications list, insurance card (if applicable), and for the free consultation - mention it's your first visit with us.",
    },
  ];

  // --- VIEW ------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-background selection:bg-primary/15 selection:text-primary">
      {/* HERO */}
      <HeroSection />

      {/* SERVICES */}
      <section aria-labelledby="services-heading">
        <ServicesGrid />
      </section>

      {/* FOUNDER */}
      <section aria-labelledby="founder-heading">
        <FounderSection />
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading">
        <TestimonialsSection />
      </section>

      {/* LOCATIONS */}
      <section
        className="section-padding"
        aria-labelledby="locations-heading"
        id="locations"
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <h2
              id="locations-heading"
              className="mb-3 font-bold leading-tight text-foreground text-[clamp(24px,4.2vw,36px)] sm:text-4xl"
            >
              Our Hospital Locations
            </h2>
            <p className="mx-auto max-w-[68ch] text-[clamp(15px,2.2vw,18px)] text-muted-foreground">
              Two convenient locations serving families across the region with
              comprehensive pediatric care.
            </p>
          </div>

          <div
            className="
              grid grid-cols-1 gap-6 sm:gap-7 md:gap-8
              lg:grid-cols-2
            "
          >
            {locations.map((location, index) => (
              <Card
                key={index}
                className="
                  group relative flex h-full flex-col overflow-hidden
                  rounded-2xl border border-border bg-card shadow-sm
                  transition-transform duration-200 ease-out hover:-translate-y-0.5
                  focus-within:ring-2 focus-within:ring-primary/50
                "
              >
                {/* Media */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="h-full w-full object-cover object-[center_30%] scale-110 transition-transform duration-500 ease-out group-hover:scale-[1.12] motion-reduce:transition-none"
                  />
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <Badge className="flex items-center bg-primary/95 text-primary-foreground backdrop-blur">
                      <Building className="mr-1 h-3.5 w-3.5" />
                      Hospital {index + 1}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[clamp(18px,2.6vw,20px)] font-semibold text-foreground">
                    {location.name}
                  </h3>

                  <div className="mt-3 space-y-3 text-sm sm:text-[15px]">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-emerald-400" />
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                      <a
                        href={`tel:${location.phone}`}
                        className="font-medium text-blue-700 underline-offset-4 hover:underline dark:text-blue-400"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                    <EnhancedButton
                      variant="outline"
                      size="sm"
                      className="w-full sm:flex-1"
                      asChild
                    >
                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        aria-label={`Directions to ${location.name}`}
                      >
                        <Navigation className="h-4 w-4" />
                        Directions
                      </a>
                    </EnhancedButton>

                    <EnhancedButton
                      variant="primary"
                      size="sm"
                      className="
                        w-full sm:flex-1
                        bg-gradient-to-r from-blue-600 to-blue-700
                        hover:from-blue-700 hover:to-blue-800
                      "
                      asChild
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                        aria-label={`Book a visit at ${location.name}`}
                      >
                        <Calendar className="h-4 w-4" />
                        Book Visit
                      </a>
                    </EnhancedButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding"
        aria-labelledby="faq-heading"
        id="faq"
      >
        <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <h2
              id="faq-heading"
              className="mb-3 font-bold leading-tight text-foreground text-[clamp(24px,4.2vw,36px)] sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[68ch] text-[clamp(15px,2.2vw,18px)] text-muted-foreground">
              Quick answers to common questions about our services, policies,
              and procedures.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="
                    rounded-lg border border-border
                    px-4 sm:px-6
                    data-[state=open]:bg-muted/20
                    focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/40
                  "
                >
                  <AccordionTrigger className="py-4 text-left hover:no-underline">
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
