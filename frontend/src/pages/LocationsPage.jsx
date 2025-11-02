import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  MapPin, Clock, Phone, Navigation, Building, ChevronRight,
  Star, CheckCircle, Wifi, ParkingCircle, Droplets, Accessibility
} from 'lucide-react';

const LocationsPage = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const locations = [
    {
      id: 1,
      name: "Laxmi Narmada Children's Hospital",
      address: 'BPTP Parklands / Piyush Heights side, Sector 89, Faridabad, Haryana 121002',
      landmark: 'Near BPTP Society',
      phone: '+91 85868 60125',
      hours: 'Emergency: 24/7 | OPD: Please call for timings',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      departments: ['Pediatric Care', 'Neonatal ICU', 'Vaccination', 'Pediatric Consultations'],
      features: ['Child-friendly Environment', '24/7 Emergency', 'Expert Pediatric Care', 'Ample Parking'],
      rating: 4.7,
      reviews: 928,
      distance: 'Near BPTP Society',
      foundedBy: 'Dr. Sanjeev Kumar (MD Pediatrics)'
    },
    {
      id: 2,
      name: 'Faridabad Medical Centre (The Children Hospital)',
      address: 'Plot No. 458, Sector 21B, Near Ryan International School, Faridabad 121001',
      phone: '+91 85868 60125',
      hours: 'Open 24/7 | OPD: Please call for timings',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      departments: ['Pediatrics', 'General Medicine', 'Vaccination', 'Child Health'],
      features: ['24/7 Emergency', 'Expert Pediatric Care', 'Ample Parking', 'Wheelchair Access'],
      rating: 4.5,
      reviews: 1245,
      distance: 'Near Ryan International School',
      leadDoctor: 'Dr. Sanjeev Kumar (MD Pediatrics)'
    }
  ];

  const activeLoc = locations[activeLocation];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero — tighter on mobile */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Locations</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Premium healthcare facilities across the city, designed for your convenience and comfort
            </p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 pb-24 pt-10 md:pt-12 lg:py-16 -mt-6 sm:-mt-8 lg:-mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {/* Locations list — compact on mobile */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  activeLocation === index
                    ? 'bg-white shadow-lg border-l-4 border-blue-600'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-start">
                  {/* Icon */}
                  <div className="mr-3 sm:mr-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                      activeLocation === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-0.5 sm:mb-1 line-clamp-2">
                      {location.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1.5 sm:mb-2 flex items-center">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 shrink-0" />
                      <span className="truncate">{location.address}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-600">
                      <span className="inline-flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium text-gray-900">{location.rating}</span>
                        <span className="text-gray-400 ml-1">({location.reviews})</span>
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-gray-500">{location.distance}</span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 ml-2 text-gray-300 sm:text-gray-400 transition-transform duration-200 ${
                      activeLocation === index ? 'text-blue-600' : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            ))}

            {/* Help card */}
            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mt-5 sm:mt-8">
              <h3 className="font-bold text-lg text-gray-900 mb-2 sm:mb-3">Need Help?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                Our team is available 24/7 to assist you with any questions about our locations or services.
              </p>
              <Button variant="outline" className="w-full border-blue-200 bg-white hover:bg-white/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Map + details */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {/* Map (static image link) — taller on md+, snug on phones */}
            <div className="relative h-56 xs:h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100">
              <a
                href={
                  activeLocation === 0
                    ? 'https://www.google.com/maps/search/?api=1&query=Laxmi+Narmada+Children+Hospital+Sector+89+Faridabad'
                    : 'https://www.google.com/maps/search/?api=1&query=Faridabad+Medical+Centre+Plot+458+Sector+21B+Faridabad'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative group"
              >
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4 sm:p-6 max-w-md">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">
                      {activeLocation === 0 ? "Laxmi Narmada Children's Hospital" : 'Faridabad Medical Centre'}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Click to view on Google Maps</p>
                    <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm border border-gray-300">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-blue-600" />
                      View Location
                    </div>
                  </div>
                </div>

                {/* Static map image (replace YOUR_API_KEY) */}
                <img
                  src={
                    activeLocation === 0
                      ? 'https://maps.googleapis.com/maps/api/staticmap?center=28.4089,77.3178&zoom=15&size=1200x600&maptype=roadmap&markers=color:red%7C28.4089,77.3178&key=YOUR_API_KEY'
                      : 'https://maps.googleapis.com/maps/api/staticmap?center=28.3949,77.3536&zoom=15&size=1200x600&maptype=roadmap&markers=color:red%7C28.3949,77.3536&key=YOUR_API_KEY'
                  }
                  alt="Hospital Location"
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  onError={(e) => { e.target.style.display = 'none'; }}
                  loading="lazy"
                />
              </a>

              {/* Map CTA – centered on small screens */}
              <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 shadow-md flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      activeLocation === 0
                        ? 'https://www.google.com/maps/search/?api=1&query=Laxmi+Narmada+Children+Hospital+Sector+89+Faridabad'
                        : 'https://www.google.com/maps/search/?api=1&query=Faridabad+Medical+Centre+Plot+458+Sector+21B+Faridabad',
                      '_blank'
                    );
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-4 sm:p-6">
                {/* Title + rating + primary CTA */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">{activeLoc.name}</h2>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-amber-500 mr-2 sm:mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(activeLoc.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {activeLoc.rating} ({activeLoc.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                    Get Directions <Navigation className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* 2-col info grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Address & contact */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2.5 sm:mb-3 flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      Address & Contact
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base">{activeLoc.address}</p>
                    {activeLoc.landmark && (
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Landmark: {activeLoc.landmark}</p>
                    )}
                    <p className="text-gray-700 mt-3 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <a className="hover:underline" href={`tel:${activeLoc.phone.replace(/\D/g, '')}`}>{activeLoc.phone}</a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      <Clock className="w-4 h-4 mr-1 inline" />
                      {activeLoc.hours}
                    </p>
                    {activeLoc.foundedBy && (
                      <p className="text-xs sm:text-sm text-gray-700 mt-3">
                        <span className="font-medium">Founded by:</span> {activeLoc.foundedBy}
                      </p>
                    )}
                    {activeLoc.leadDoctor && (
                      <p className="text-xs sm:text-sm text-gray-700 mt-1">
                        <span className="font-medium">Lead Doctor:</span> {activeLoc.leadDoctor}
                      </p>
                    )}
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2.5 sm:mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      Opening Hours
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between text-blue-600 font-medium mt-1.5 sm:mt-2">
                        <span>Emergency</span>
                        <span>24/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="font-semibold text-gray-900 mb-2.5 sm:mb-3">Available Services</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                    {activeLoc.departments.map((dept, i) => (
                      <div key={i} className="flex items-center bg-blue-50 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{dept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="font-semibold text-gray-900 mb-2.5 sm:mb-3">Facilities</h3>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-xs sm:text-sm">
                      <Wifi className="w-4 h-4 text-blue-600 mr-2" /> Free WiFi
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-xs sm:text-sm">
                      <ParkingCircle className="w-4 h-4 text-blue-600 mr-2" /> Parking
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-xs sm:text-sm">
                      <Accessibility className="w-4 h-4 text-blue-600 mr-2" /> Wheelchair Access
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-xs sm:text-sm">
                      <Droplets className="w-4 h-4 text-blue-600 mr-2" /> Pharmacy
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                      asChild
                    >
                      <a href={`tel:${activeLoc.phone.replace(/\D/g, '')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call {activeLoc.phone}
                      </a>
                    </Button>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                        Book Appointment
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky mobile CTA (safe-area aware) */}
            <div className="sm:hidden fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-0 right-0 px-3">
              <div className="mx-auto max-w-3xl">
                <div className="rounded-2xl shadow-2xl border border-gray-200 bg-white overflow-hidden">
                  <div className="grid grid-cols-3 divide-x">
                    <a
                      href={`tel:${activeLoc.phone.replace(/\D/g, '')}`}
                      className="flex items-center justify-center py-3 text-sm font-medium text-blue-700 hover:bg-blue-50"
                    >
                      <Phone className="w-4 h-4 mr-2" /> Call
                    </a>
                    <button
                      onClick={() => {
                        window.open(
                          activeLocation === 0
                            ? 'https://www.google.com/maps/search/?api=1&query=Laxmi+Narmada+Children+Hospital+Sector+89+Faridabad'
                            : 'https://www.google.com/maps/search/?api=1&query=Faridabad+Medical+Centre+Plot+458+Sector+21B+Faridabad',
                          '_blank'
                        );
                      }}
                      className="flex items-center justify-center py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
                    >
                      <Navigation className="w-4 h-4 mr-2" /> Route
                    </button>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.docterz.connect.faridabadmedicalcenter&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Sticky CTA */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
