import React from "react";
import {
  Clock,
  Stethoscope,
  Syringe,
  Baby,
  HeartPulse,
  ActivitySquare,
  Activity,
  Shield,
  Microscope,
  Pill,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
  tag?: "Emergency" | "Clinic" | "Care" | "Support";
};

const leftServices: Service[] = [
  {
    title: "24×7 Pediatric Emergency",
    description:
      "Immediate pediatric emergency care with child-safe protocols and rapid stabilization.",
    icon: <Clock className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Emergency",
  },
  {
    title: "Pediatric OPD & Specialist Consults",
    description:
      "Same-day appointments with senior pediatricians for illness, follow-ups, and guidance.",
    icon: <Stethoscope className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Clinic",
  },
  {
    title: "Immunization & Preventive Care",
    description:
      "Complete vaccination schedule, growth monitoring, and preventive pediatric screenings.",
    icon: <Syringe className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Clinic",
  },
  {
    title: "Newborn Care & Lactation Support",
    description:
      "Post-natal newborn assessment, breastfeeding guidance, and jaundice screening.",
    icon: <Baby className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Support",
  },
  {
    title: "Nutrition & Growth Clinic",
    description:
      "Diet plans, growth charts, anemia/vitamin counseling, failure-to-thrive evaluation.",
    icon: <HeartPulse className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Care",
  },
];

const rightServices: Service[] = [
  {
    title: "Neonatal ICU (NICU)",
    description:
      "Level-appropriate neonatal intensive care with round-the-clock monitoring.",
    icon: <ActivitySquare className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Emergency",
  },
  {
    title: "Pediatric Surgery & Procedures",
    description:
      "Minor OT procedures and surgical referrals with pre/post-operative pediatric care.",
    icon: <Activity className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Care",
  },
  {
    title: "Asthma, Allergy & Infection Clinic",
    description:
      "Wheeze/asthma management, allergy care, and evidence-based antibiotic stewardship.",
    icon: <Shield className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Clinic",
  },
  {
    title: "Diagnostics & Laboratory",
    description:
      "Child-friendly lab, radiology tie-ups, and quick turnaround of essential tests.",
    icon: <Microscope className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Clinic",
  },
  {
    title: "Pharmacy & Child-Friendly Facilities",
    description:
      "In-house pharmacy, play zone, safe interiors, and caregiver-first amenities.",
    icon: <Pill className="h-5 w-5 text-[#1A4DB0]" />,
    tag: "Support",
  },
];

const ServicesPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const allServices = [...leftServices, ...rightServices];

  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* HERO */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center space-y-4 sm:space-y-6">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-[28px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Exceptional Care for{" "}
              <span className="text-blue-200">Your Little Ones</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Compassionate, specialized pediatric care in a warm and welcoming
              environment.
            </motion.p>

            {/* CTA Buttons Removed as per request */}
            <div className="h-6" />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-[#F6FAFF]"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2
              id="services-heading"
              className="text-[26px] sm:text-4xl font-bold text-gray-900 mb-3"
            >
              Our Services
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-[#1A4DB0] to-[#3B82F6] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              World-class pediatric care designed around your child’s needs.
            </p>
          </motion.div>

          {/* DESKTOP/TABLET lists (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-5 max-w-[560px] mx-auto w-full">
              {leftServices.map((s, i) => (
                <ServiceCard key={s.title} service={s} delay={i * 0.06} />
              ))}
            </div>

            {/* Center figure (desktop only) */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-56 h-[26rem]"
              >
                <img
                  src="/images/doctor.png"
                  alt="Pediatrician providing care"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute -bottom-6 -left-6 w-28 h-28 bg-blue-100 rounded-full opacity-20" />
                <div className="pointer-events-none absolute -top-6 -right-6 w-20 h-20 bg-blue-50 rounded-full opacity-20" />
              </motion.div>
            </div>

            {/* Right column */}
            <div className="space-y-5 max-w-[560px] mx-auto w-full">
              {rightServices.map((s, i) => (
                <ServiceCard key={s.title} service={s} delay={(i + 0.5) * 0.06} />
              ))}
            </div>
          </div>

          {/* MOBILE: single combined list (NO duplicate quick glance) */}
          <div className="md:hidden space-y-4">
            {allServices.map((s, i) => (
              <ServiceCard key={`m-${s.title}`} service={s} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden sticky bottom-0 inset-x-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-t border-border px-4 py-3">
        <div className="flex gap-3">
          <Button asChild className="flex-1">
            <a
              href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Book Visit <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" className="flex-1" asChild>
            <a href="tel:+91-8586860125" className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" /> Call 24×7
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

/* ---------- Subcomponent ---------- */

const ServiceCard: React.FC<{ service: Service; delay?: number }> = ({
  service,
  delay = 0,
}) => (
  <motion.details
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.45 }}
    className="group bg-white rounded-xl border border-blue-100 shadow-sm open:shadow-md transition-all overflow-hidden"
  >
    <summary className="list-none cursor-pointer">
      <div className="flex items-start gap-3 p-4 sm:p-5">
        <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-blue-50 rounded-[10px]">
          {React.cloneElement(service.icon, {
            className: "h-5 w-5 text-blue-600",
          })}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            {service.tag && (
              <span className="hidden sm:inline-flex text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {service.tag}
              </span>
            )}
          </div>
          <p className="mt-1.5 text-gray-600 text-sm sm:text-[15px] line-clamp-2 sm:line-clamp-none">
            {service.description}
          </p>
          <div className="mt-2 hidden sm:flex items-center text-[#1A4DB0] text-sm font-medium">
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </summary>

    {/* Mobile-only expanded link */}
    <div className="px-4 pb-4 sm:hidden">
      <a
        href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
        className="inline-flex items-center text-[#1A4DB0] text-sm font-medium"
      >
        Learn more <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  </motion.details>
);
