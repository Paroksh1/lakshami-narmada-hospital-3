import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DoctorsPage = () => {
  const doctors = [
    {
      name: 'Dr. Sanjeev Kumar',
      specialty: 'Pediatrics',
      experience: '15+ years of pediatric practice',
      qualifications: 'MD (Pediatrics), KGMC Lucknow',
      image: '/images/sanjeev-gupta.png',
      tagColor: 'bg-blue-500',
      specialization: 'General Pediatrics & Child Care',
      availability: 'Mon, Wed, Fri: 9:00 AM - 5:00 PM',
      contact: '+91 85868 60125'
    },
    {
      name: 'Dr. Ravi P. Agarwal',
      specialty: 'Pediatrics & Neonatology',
      experience: '35+ years of pediatric practice',
      qualifications: 'MD (Pediatrics), Neonatologist, MRCPCH – London',
      image: '/images/doctors/ravi-agarwal.jpg',
      tagColor: 'bg-teal-500',
      specialization: 'Neonatal Intensive Care, Pediatric Critical Care',
      availability: 'Tue, Thu, Sat: 10:00 AM - 6:00 PM',
      contact: '+91 85868 60125'
    },
    {
      name: 'Dr. Yajika Arya',
      specialty: 'Pediatrics & Neonatology',
      experience: '6+ years of pediatric practice',
      qualifications: 'MD (Pediatrics), MAMC Delhi, MNMF, MIAP',
      image: '/images/doctors/yajika-arya.jpg',
      tagColor: 'bg-green-500',
      specialization: 'Neonatal Care, Pediatric Nutrition, Vaccination',
      availability: 'Mon to Sat: 11:00 AM - 7:00 PM',
      contact: '+91 85868 60125'
    }
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(0);
  const d = doctors[selectedDoctor];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              Meet Our Specialists
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Expert pediatric care from India&apos;s leading medical professionals
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* MOBILE/TABLET: horizontal picker */}
        <div className="md:hidden -mx-4 px-4 mb-6">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {doctors.map((doc, i) => {
              const active = i === selectedDoctor;
              return (
                <button
                  key={doc.name}
                  onClick={() => setSelectedDoctor(i)}
                  className={`flex-shrink-0 w-[210px] rounded-xl border transition-all text-left ${
                    active ? 'bg-white border-blue-200 shadow-sm' : 'bg-white/70 border-gray-200'
                  }`}
                  aria-pressed={active}
                >
                  <div className="p-3 flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-12 h-12 rounded-full object-cover border border-white shadow-sm"
                        loading="lazy"
                      />
                      <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${doc.tagColor} border-2 border-white`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900 truncate">{doc.name}</div>
                      <div className="text-[12px] text-blue-700 font-medium truncate">{doc.specialty}</div>
                    </div>
                  </div>
                  {active && (
                    <div className="px-3 pb-3">
                      <div className="text-[12px] text-gray-500 line-clamp-1">{doc.qualifications}</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Desktop sidebar (unchanged) */}
          <div className="hidden md:block lg:w-1/3 xl:w-1/4 space-y-4">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                onClick={() => setSelectedDoctor(index)}
                className={`p-4 md:p-5 rounded-xl cursor-pointer transition-all duration-200 ${
                  selectedDoctor === index ? 'bg-white shadow-lg border-l-4 border-blue-600' : 'bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md"
                      loading="lazy"
                    />
                    <div className={`absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full ${doctor.tagColor} border-2 border-white`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 truncate">{doctor.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{doctor.specialty}</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5 line-clamp-1">{doctor.qualifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative bg-gradient-to-b from-[#EAF2FF] to-[#F7FAFF] py-6 sm:py-8 md:py-12">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[260px] sm:max-w-xs">
                    <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg bg-white p-2">
                      <img 
                        src={d.image} 
                        alt={d.name} 
                        className={`h-full w-full ${d.name.includes('Yajika') ? 'object-contain' : 'object-cover'}`} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Header info */}
              <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{d.name}</h2>
                <p className="text-blue-600 text-xs sm:text-sm md:text-base mt-1">{d.qualifications}</p>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs md:text-sm rounded-full">{d.specialty}</span>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span className="text-gray-600 text-xs md:text-sm">{d.experience}</span>
                </div>
              </div>

              {/* Info blocks */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Award className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xs sm:text-sm text-gray-500 mb-1">Specialization</h4>
                          <p className="text-gray-900 text-sm sm:text-base font-medium">{d.specialization}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 p-2 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-xs sm:text-sm text-gray-500 mb-1">Experience</h4>
                          <p className="text-gray-900 text-sm sm:text-base font-medium">{d.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="bg-green-50 px-3 py-1.5 rounded-full text-xs sm:text-sm text-green-700 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      {d.qualifications}
                    </div>
                  </div>
                </div>

                {/* Availability & Contact */}
                <div className="mb-6 sm:mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xs sm:text-sm text-gray-500 mb-1">Availability</h4>
                          <p className="text-gray-900 text-sm sm:text-base">{d.availability}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-50 p-2 rounded-lg">
                          <Phone className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-xs sm:text-sm text-gray-500 mb-1">Contact</h4>
                          <a href={`tel:${d.contact.replace(/\D/g, '')}`} className="text-blue-600 text-sm sm:text-base hover:underline">
                            {d.contact}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <div className="bg-white px-3 py-1.5 rounded-full text-xs sm:text-sm text-gray-600 flex items-center border border-gray-100 shadow-sm">
                      <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
                      Lakshmi-Narmada Hospital, New Delhi
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    About Dr. {d.name.replace(/^Dr\.\s*/, '')}
                  </h3>
                  <div className="prose prose-sm sm:prose-base text-gray-600 max-w-none">
                    <p className="leading-relaxed">
                      {d.name} is a {d.experience} specializing in {d.specialty.toLowerCase()}.{' '}
                      {d.name.includes('Ravi')
                        ? 'With extensive experience in neonatology and pediatric care, Dr. Agarwal brings a wealth of knowledge to our team.'
                        : d.name.includes('Yajika')
                        ? 'Dr. Arya is dedicated to comprehensive pediatric care with a special focus on neonatal care and child nutrition.'
                        : 'Dr. Kumar is committed to exceptional pediatric care with an emphasis on preventive healthcare and child development.'}
                    </p>
                  </div>
                </div>

                {/* Actions (inside card) */}
                <div className="border-t border-gray-100 pt-5 sm:pt-6">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <a
                      href="tel:+918586860125"
                      className="w-full px-5 sm:px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-lg text-center transition-all shadow-sm hover:shadow-md"
                    >
                      Book Free Consult
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 md:mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Need help choosing a doctor?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Our team is here to help you find the right specialist for your needs.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+918586860125"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 border border-white/20 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" /> +91 85868 60125
            </a>
          </div>
        </div>
      </div>

      {/* NOTE: Mobile sticky bottom bar was removed on request */}
    </div>
  );
};

export default DoctorsPage;
