import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronDown, ChevronUp, Phone, MessageSquare, Calendar, Heart, Award, Shield,
  CheckCircle, Eye, ArrowRight, Quote, Home, Stethoscope, Target, Star, Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ----------------------- Scroll to top (mobile tuned) ---------------------- */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 280);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 sm:right-6 z-50 p-3 rounded-full bg-[#1A4DB0] text-white shadow-lg hover:bg-[#153f8e] transition-all"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
          whileTap={{ scale: 0.97 }} aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ---------------------------- Sticky side / mobile ------------------------- */
const StickyNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'about', label: 'About Us', icon: <Home className="w-4 h-4" /> },
    { id: 'doctor', label: 'Our Doctor', icon: <Stethoscope className="w-4 h-4" /> },
    { id: 'vision', label: 'Our Vision', icon: <Target className="w-4 h-4" /> },
    { id: 'values', label: 'Core Values', icon: <Heart className="w-4 h-4" /> },
  ];

  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY + 100;
        document.querySelectorAll('section[id]').forEach((sec) => {
          const top = sec.offsetTop;
          const h = sec.offsetHeight;
          if (y >= top && y < top + h) setActiveSection(sec.id);
        });
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop sticky rail (unchanged visually) */}
      <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.id} href={`#${item.id}`}
              className={`relative flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
                ${activeSection === item.id ? 'bg-[#1A4DB0] text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-50 hover:text-[#1A4DB0]'}`}
            >
              <span>{item.icon}</span><span className="font-medium">{item.label}</span>
              {activeSection === item.id && (
                <motion.span
                  className="absolute left-0 w-1 h-8 bg-[#EF3C35] rounded-r-full"
                  layoutId="activeIndicator" transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile dropdown (safe for notches) */}
      <div className="lg:hidden fixed top-[calc(env(safe-area-inset-top)+0.75rem)] left-4 right-4 z-40">
        <div className="bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100">
          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="w-full flex items-center justify-between p-3 text-gray-800"
          >
            <span className="font-medium">Menu</span>
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}><ChevronDown className="w-5 h-5" /></motion.div>
          </button>
          <AnimatePresence initial={false}>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }} className="overflow-hidden"
              >
                <div className="flex flex-col p-2 gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id} href={`#${item.id}`} onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg
                        ${activeSection === item.id ? 'bg-[#E9F2FF] text-[#1A4DB0] font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      <span>{item.icon}</span><span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

/* ------------------------- Section/ Card motion helpers -------------------- */
const AnimatedSection = ({ children, id, className = '', ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();
  useEffect(() => { if (isInView) controls.start('visible'); }, [isInView, controls]);

  return (
    <motion.section
      ref={ref} id={id} className={className}
      initial="hidden" animate={controls}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

const AnimatedCard = ({ children, delay = 0, className = '', ...props }) => (
  <motion.div
    className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0, transition: { delay: delay * 0.08, duration: 0.55 } }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ y: -4 }}
    {...props}
  >
    {children}
  </motion.div>
);

/* -------------------------------- Top progress ----------------------------- */
const ScrollProgress = () => {
  const [w, setW] = useState(0);
  useEffect(() => {
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const win = window.innerHeight;
        const doc = document.documentElement.scrollHeight - win;
        setW(Math.min(100, (window.scrollY / Math.max(doc, 1)) * 100));
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <motion.div className="h-full bg-[#1A4DB0]" style={{ width: `${w}%` }} />
    </div>
  );
};

/* ================================== PAGE ================================== */
const AboutPage = () => {
  const coreValues = [
    { title: 'Caring', description: 'Compassionate care for every child', icon: <Heart className="w-8 h-8 text-[#EF3C35]" />, color: 'bg-red-50' },
    { title: 'Excellence', description: 'Highest standards in pediatric healthcare', icon: <Star className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-50' },
    { title: 'Safety', description: 'Safe and secure environment', icon: <Shield className="w-8 h-8 text-blue-500" />, color: 'bg-blue-50' },
    { title: 'Integrity', description: 'Honest and ethical practices', icon: <CheckCircle className="w-8 h-8 text-green-500" />, color: 'bg-green-50' },
    { title: 'Transparency', description: 'Clear communication and trust', icon: <Eye className="w-8 h-8 text-purple-500" />, color: 'bg-purple-50' },
  ];

  const healthAcronym = [
    { letter: 'H', word: 'Holistic' }, { letter: 'E', word: 'Exceptional' }, { letter: 'A', word: 'Accessible' },
    { letter: 'L', word: 'Loving' }, { letter: 'T', word: 'Trusted' }, { letter: 'H', word: 'Healthcare' }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      <ScrollProgress />
      <StickyNav />
      <ScrollToTop />

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative w-full overflow-hidden h-[56vh] sm:h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/45 z-10" />
          <div className="absolute inset-0">
            <img
              id="video-poster" src="/images/hero-poster.jpg" alt="Laxmi Narmada Hospital - Pediatric Care"
              className="w-full h-full object-cover opacity-90" loading="lazy"
              onError={(e: any) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-6 sm:px-8 z-20">
            <div>
              <h1 className="font-bold mb-3" style={{ fontSize: 'clamp(1.75rem, 4.8vw, 3.75rem)' }}>
                Laxmi Narmada Hospital
              </h1>
              <p className="opacity-90" style={{ fontSize: 'clamp(1rem, 2.4vw, 1.5rem)' }}>
                Caring for Your Child&apos;s Health and Happiness
              </p>
            </div>
          </div>
          {/* Click-to-play YouTube (kept) */}
          <div id="video-container" className="absolute inset-0 hidden">
            <iframe
              id="youtube-iframe" className="w-full h-full" src="" title="Laxmi Narmada Hospital - Our Story"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen loading="lazy"
            />
            <button
              id="stop-button"
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
              onClick={() => {
                const container = document.getElementById('video-container');
                const iframe = document.getElementById('youtube-iframe');
                const poster = document.getElementById('video-poster');
                const playButton = document.getElementById('play-button');
                iframe.src = ''; container.classList.add('hidden');
                poster.classList.remove('hidden');
                playButton.classList.remove('opacity-0', 'pointer-events-none');
              }}
              aria-label="Stop video"
            >
              ✕
            </button>
          </div>
          <button
            id="play-button"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center"
            onClick={() => {
              const container = document.getElementById('video-container');
              const iframe = document.getElementById('youtube-iframe');
              const poster = document.getElementById('video-poster');
              const playButton = document.getElementById('play-button');
              if (container && iframe && poster && playButton) {
                iframe.src = 'https://www.youtube.com/embed/6r26UPHd-84?autoplay=1&rel=0&modestbranding=1';
                container.classList.remove('hidden');
                poster.classList.add('hidden');
                playButton.classList.add('opacity-0', 'pointer-events-none');
              }
            }}
            aria-label="Play video"
          >
            <div className="w-0 h-0 border-t-6 border-b-6 border-l-[12px] sm:border-t-8 sm:border-b-8 sm:border-l-[16px] border-transparent border-l-[#1A4DB0] ml-0.5" />
          </button>
        </div>
        <div className="relative z-10 h-full" />
      </section>

      {/* ------------------------------ ABOUT ----------------------------- */}
      <AnimatedSection id="about" className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <motion.h2
                className="font-bold text-gray-900 mb-3"
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)' }}
              >
                Our Story
              </motion.h2>
              <motion.div className="w-16 sm:w-20 h-1 bg-[#1A4DB0] mx-auto mb-6 sm:mb-8"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
              />
              <motion.p
                className="text-gray-600 max-w-3xl mx-auto"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.125rem)' }}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                Laxmi Narmada Hospital has been a cornerstone of pediatric healthcare in Faridabad since 2010. Founded with a
                vision to provide world-class medical care for children, our hospital combines cutting-edge technology with
                compassionate care to ensure the well-being of our young patients.
              </motion.p>
            </div>

            {/* Doctor’s Quote (unchanged visuals, padding tweaked for mobile) */}
            <motion.div
              className="relative bg-gradient-to-r from-[#1A4DB0] to-[#0D2D6E] rounded-2xl p-6 sm:p-8 md:p-12 text-white overflow-hidden mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
            >
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 sm:w-48 h-40 sm:h-48 bg-white/5 rounded-tr-full" />
              <div className="relative z-10">
                <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-white/20 mb-4 sm:mb-6" />
                <p className="font-medium leading-relaxed mb-5 sm:mb-6" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.5rem)' }}>
                  “At Laxmi Narmada Hospital, we believe that every child deserves the best possible start in life. Our dedicated
                  team works tirelessly to provide exceptional medical care in a warm, child-friendly environment.”
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 grid place-items-center mr-3 sm:mr-4">
                    <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Dr. Sanjeev Kumar</p>
                    <p className="text-white/80 text-sm">Founder & Chief Pediatrician</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Journey timeline: simplified single-column on mobile; original alternating from md+ */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Our Journey</h3>

              {/* Mobile single column */}
              <div className="md:hidden space-y-6 relative">
                <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-gray-200" />
                {[
                  { year: '2010', title: 'First Clinic for Children', description: 'Began serving families in Faridabad with a dedicated pediatric clinic at Sector 21B, near Ryan International School' },
                  { year: '2013', title: 'Building Trust', description: 'Expanded OPD capacity and weekend clinics as more parents chose us for routine care and vaccinations' },
                  { year: '2016', title: 'Emergency Care', description: 'Strengthened acute-care pathways for fever, dehydration, and respiratory illnesses with faster triage' },
                  { year: '2019', title: 'New Hospital Entity', description: 'Formalized as Lakshmi Narmada Children\'s Hospital LLP at BPTP Parklands, Sector 89' },
                  { year: '2020', title: 'Pandemic Response', description: 'Established dedicated pediatric COVID triage, isolation workflows, and remote follow-ups' },
                  { year: '2022', title: 'Critical Care Upgrade', description: 'Enhanced NICU & PICU capabilities with modern monitoring and infection-control protocols' },
                  { year: '2024', title: 'Digital Transformation', description: 'Introduced online booking and tele-consults for follow-ups and second opinions' },
                  { year: 'Today', title: 'Growing With Faridabad', description: 'Two locations serving thousands of children annually across preventive, acute, and specialized care' },
                ].map((i, idx) => (
                  <div key={idx} className="relative pl-12">
                    <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-white border-4 border-[#1A4DB0]" />
                    <div className="inline-block bg-[#1A4DB0] text-white text-xs font-medium px-2.5 py-1 rounded-full mb-1">{i.year}</div>
                    <h4 className="text-lg font-semibold text-gray-800">{i.title}</h4>
                    <p className="text-gray-600">{i.description}</p>
                  </div>
                ))}
              </div>

              {/* Desktop original alternating */}
              <div className="hidden md:block relative">
                <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 -translate-x-1/2" />
                <div className="space-y-12">
                  {[
                    { year: '2010', title: 'First Clinic for Children', description: 'Began serving families in Faridabad with a dedicated pediatric clinic at Sector 21B, near Ryan International School' },
                    { year: '2013', title: 'Building Trust', description: 'Expanded OPD capacity and weekend clinics as more parents chose us for routine care and vaccinations' },
                    { year: '2016', title: 'Emergency Care', description: 'Strengthened acute-care pathways for fever, dehydration, and respiratory illnesses with faster triage' },
                    { year: '2019', title: 'New Hospital Entity', description: 'Formalized as Lakshmi Narmada Children\'s Hospital LLP at BPTP Parklands, Sector 89' },
                    { year: '2020', title: 'Pandemic Response', description: 'Established dedicated pediatric COVID triage, isolation workflows, and remote follow-ups' },
                    { year: '2022', title: 'Critical Care Upgrade', description: 'Enhanced NICU & PICU capabilities with modern monitoring and infection-control protocols' },
                    { year: '2024', title: 'Digital Transformation', description: 'Introduced online booking and tele-consults for follow-ups and second opinions' },
                    { year: 'Today', title: 'Growing With Faridabad', description: 'Two locations serving thousands of children annually across preventive, acute, and specialized care' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                    >
                      <div className={`${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:w-1/2`}>
                        <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                          <div className="inline-block bg-[#1A4DB0] text-white text-sm font-medium px-3 py-1 rounded-full mb-2">{item.year}</div>
                          <h4 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-1/2" />
                      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#1A4DB0] rounded-full z-10 grid place-items-center">
                        <div className="w-2 h-2 bg-[#1A4DB0] rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ----------------------------- DOCTOR ----------------------------- */}
      <AnimatedSection id="doctor" className="py-14 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <motion.h2
                className="font-bold text-gray-900 mb-3"
                style={{ fontSize: 'clamp(1.5rem,3.2vw,2.25rem)' }}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                Meet Our Doctor
              </motion.h2>
              <motion.div className="w-16 sm:w-20 h-1 bg-[#1A4DB0] mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
              >
                <div className="bg-white rounded-2xl p-2 shadow-xl">
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      src="/images/sanjeev-gupta.png" alt="Dr. Sanjeev Kumar"
                      className="w-full h-auto object-cover" loading="lazy"
                      whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 560px"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div className="order-1 lg:order-2 space-y-5 sm:space-y-6"
                initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
              >
                <div className="space-y-1.5 sm:space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Dr. Sanjeev Kumar</h2>
                  <p className="text-lg text-[#1A4DB0] font-semibold">Pediatrician & Neonatologist</p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="h-5 w-5 text-yellow-500" /><span>MD – Pediatrics, MBBS</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="h-5 w-5 text-blue-500" /><span>15+ Years of Experience</span>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-600 space-y-4 text-[0.95rem]">
                  <p>Dr. Sanjeev Kumar is a highly experienced pediatrician with over 15 years of dedicated service in child healthcare…</p>
                  <p>Specializing in neonatal care and pediatric critical care, Dr. Kumar has successfully treated thousands of children…</p>
                  <p>His commitment to excellence in pediatric healthcare led to the establishment of Laxmi Narmada Hospital…</p>
                </div>

                <div className="pt-2 sm:pt-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#1A4DB0] hover:bg-[#153f8e] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl font-medium transition-colors"
                  >
                    Download App to Book <Calendar className="ml-2 h-5 w-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full" /><span className="text-sm font-medium text-gray-700">Available Today</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /><span>4.9/5 (247 Reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --------------------------- MISSION / VISION --------------------------- */}
      <AnimatedSection id="vision" className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <motion.h2
                className="font-bold text-gray-900 mb-3"
                style={{ fontSize: 'clamp(1.5rem,3.2vw,2.25rem)' }}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                Our Mission & Vision
              </motion.h2>
              <motion.div className="w-16 sm:w-20 h-1 bg-[#1A4DB0] mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-stretch mb-14">
              <motion.div
                initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                className="bg-gradient-to-br from-[#E9F2FF] to-blue-50 p-6 sm:p-8 rounded-2xl"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-5 sm:mb-6">
                  To provide exceptional, compassionate, and comprehensive healthcare to children…
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <span>Commitment to Excellence</span><ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                className="bg-gradient-to-br from-[#1A4DB0] to-[#0D2D6E] p-6 sm:p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
                <p className="mb-5 sm:mb-6 text-blue-100">To be the most trusted pediatric healthcare provider in the region…</p>
                <div className="flex items-center gap-2 text-sm text-blue-200 font-medium">
                  <span>Building Healthier Futures</span><ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            </div>

            {/* HEALTH acronym */}
            <div className="max-w-4xl mx-auto">
              <motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">Our Approach to Care</h3>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {healthAcronym.map((it, idx) => (
                    <motion.div key={idx} className="relative group"
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.08 } }}
                      viewport={{ once: true, margin: '-20px' }}
                    >
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-xl shadow-md grid place-items-center border border-gray-100">
                        <div className="text-center">
                          <span className="block font-bold text-[#1A4DB0]" style={{ fontSize: 'clamp(1.1rem,2vw,1.5rem)' }}>{it.letter}</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">{it.word}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1A4DB0] to-[#0D2D6E]"
                  style={{ fontSize: 'clamp(1.25rem,3vw,2rem)' }}
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                  Making a WORLD of Difference
                </motion.div>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  'Comprehensive pediatric care from birth through adolescence',
                  'State-of-the-art NICU and PICU facilities',
                  'Child-friendly environment to reduce anxiety',
                  'Multidisciplinary team of specialists',
                  '24/7 emergency pediatric services',
                  'Preventive healthcare and wellness programs',
                ].map((item, i) => (
                  <motion.div key={i}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.06 } }}
                    viewport={{ once: true, margin: '-20px' }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" /><span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ------------------------------- CTA -------------------------------- */}
      <AnimatedSection className="py-14 sm:py-16 md:py-20 bg-gradient-to-r from-[#1A4DB0] to-[#0D2D6E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="font-bold mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(1.5rem,3.2vw,2.25rem)' }}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Ready to Experience Exceptional Pediatric Care?
            </motion.h2>
            <motion.p
              className="text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto"
              style={{ fontSize: 'clamp(1rem,2vw,1.25rem)' }}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Schedule an appointment with our expert pediatric team today and give your child the gift of good health.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-[#1A4DB0] hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl font-medium transition-colors"
              >
                Download App to Book <Calendar className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:laxmi.narmada.hospital@gmail.com"
                className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl font-medium transition-colors"
              >
                Contact Us <Phone className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
