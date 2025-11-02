import React, { useState, useEffect, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Responsive styles
const styles = `
#testimonials {
  --t-col: 33.333%;
  --t-gap: clamp(12px, 2vw, 16px);
}
#testimonials .container {
  width: min(1200px, 100% - clamp(24px, 6vw, 96px));
  margin-inline: auto;
}
#testimonials h2 {
  font-size: clamp(26px, 5vw, 44px);
  line-height: 1.12;
  margin-bottom: 0.4em;
  text-align: center;
}
#testimonials .t-lede {
  font-size: clamp(15px, 2vw, 18px);
  color: var(--muted-foreground);
  max-width: 70ch;
  margin: 0 auto 2rem;
  text-align: center;
  line-height: 1.6;
}
#testimonials .t-feature {
  padding: clamp(18px, 2.6vw, 28px);
  border-radius: clamp(14px, 2vw, 20px);
  background: var(--card);
  border: 1px solid var(--border);
  margin-bottom: clamp(20px, 3vw, 32px);
}
#testimonials .t-feature p {
  font-size: clamp(15px, 2.2vw, 18px);
  line-height: 1.6;
}
#testimonials .t-carousel {
  position: relative;
  overflow: hidden;
}
#testimonials .t-track {
  display: flex;
  gap: var(--t-gap);
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  scrollbar-width: none;
}
#testimonials .t-track::-webkit-scrollbar { display: none; }
#testimonials .t-card {
  flex: 0 0 var(--t-col);
  scroll-snap-align: start;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: clamp(12px, 1.6vw, 16px);
  padding: clamp(14px, 2.2vw, 20px);
  transition: all 0.2s ease;
}
#testimonials .t-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
#testimonials .t-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: clamp(14px, 2vw, 20px);
}
#testimonials .t-arrow {
  width: clamp(42px, 6vw, 48px);
  height: clamp(42px, 6vw, 48px);
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--card);
  cursor: pointer;
  transition: all 0.2s ease;
}
#testimonials .t-arrow:hover { background: var(--muted); }
#testimonials .t-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
}
#testimonials .t-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--muted-foreground);
  opacity: 0.3;
  transition: all 0.2s ease;
  cursor: pointer;
}
#testimonials .t-dot[aria-current="true"] {
  opacity: 1;
  transform: scale(1.25);
  background: var(--primary);
}
@media (max-width: 1280px) {
  #testimonials .t-track { --t-col: 50%; }
}
@media (max-width: 768px) {
  #testimonials .t-track { --t-col: 80%; }
}
@media (max-width: 480px) {
  #testimonials .t-track { --t-col: 100%; }
}
`;

const TestimonialCard = ({ t }) => (
  <div className="t-card">
    <Badge variant="outline" className="mb-2">{t.service}</Badge>
    <div className="flex gap-1 mb-3">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-warning text-warning" />
      ))}
    </div>
    <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">"{t.quote}"</p>
    <div>
      <p className="font-medium">{t.parent}</p>
      <p className="text-xs text-muted-foreground">Parent from {t.location}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const testimonials = [
    {
      quote:
        "The 24/7 emergency service saved my daughter's life. The staff was incredibly caring and professional throughout our stay.",
      parent: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      service: "Emergency Care",
    },
    {
      quote:
        "Dr. Kumar and his team provided exceptional care for my son's heart condition. The free first consultation helped us get started without any financial stress.",
      parent: "Rajesh Patel",
      location: "Pune",
      rating: 5,
      service: "Pediatric Cardiology",
    },
    {
      quote:
        "Outstanding facilities and child-friendly environment. My twins felt comfortable throughout their vaccination process.",
      parent: "Anita Singh",
      location: "Delhi",
      rating: 5,
      service: "Vaccination Services",
    },
    {
      quote:
        "The knowledge hub helped me understand my child's condition better. Truly appreciated the educational approach to healthcare.",
      parent: "Mohammad Ali",
      location: "Bangalore",
      rating: 5,
      service: "Patient Education",
    },
    {
      quote:
        "Excellent neonatal care for our premature baby. The NICU staff was amazing and kept us informed every step of the way.",
      parent: "Deepika Gupta",
      location: "Chennai",
      rating: 5,
      service: "Neonatal Care",
    },
  ];

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const auto = setInterval(() => next(), 6000);
    return () => clearInterval(auto);
  }, [next]);

  // Scroll to index
  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const card = track.querySelector(".t-card");
      if (card) {
        const gap = parseInt(getComputedStyle(track).gap) || 0;
        const scrollX = index * (card.offsetWidth + gap);
        track.scrollTo({ left: scrollX, behavior: "smooth" });
      }
    }
  }, [index]);

  return (
    <section id="testimonials" className="py-16 bg-muted/20">
      <style jsx global>{styles}</style>

      <div className="container">
        <h2>What Families Say About Us</h2>
        <p className="t-lede">
          Real experiences from parents who trust us with their children's
          health and well-being.
        </p>

        {/* Featured testimonial */}
        <div className="t-feature mb-10">
          <Badge variant="outline" className="mb-3">
            {testimonials[index].service}
          </Badge>
          <div className="flex gap-1 mb-3">
            {[...Array(testimonials[index].rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-muted-foreground italic mb-4 leading-relaxed">
            "{testimonials[index].quote}"
          </p>
          <p className="font-medium">{testimonials[index].parent}</p>
          <p className="text-sm text-muted-foreground">
            Parent from {testimonials[index].location}
          </p>
        </div>

        {/* Carousel */}
        <div className="t-carousel">
          <div className="t-track" ref={trackRef}>
            {testimonials.map((t, i) => (
              <TestimonialCard t={t} key={i} />
            ))}
          </div>

          <div className="t-nav">
            <button className="t-arrow" onClick={prev}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="t-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className="t-dot"
                  aria-current={i === index ? "true" : "false"}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button className="t-arrow" onClick={next}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;