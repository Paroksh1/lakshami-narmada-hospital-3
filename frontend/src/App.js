import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyActions from "@/components/layout/StickyActions";

// Import Pages
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import DoctorsPage from "@/pages/DoctorsPage";
import DoctorProfilePage from "@/pages/DoctorProfilePage";
import PatientCarePage from "@/pages/PatientCarePage";
import KnowledgeHubPage from "@/pages/KnowledgeHubPage";
import AboutPage from "@/pages/AboutPage";
import LocationsPage from "@/pages/LocationsPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Utility Pages
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import RefundsPage from "@/pages/RefundsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/doctors/:slug" element={<DoctorProfilePage />} />
            <Route path="/patient-care" element={<PatientCarePage />} />
            <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Utility Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms/free-first-consult" element={<TermsPage />} />
            <Route path="/refunds" element={<RefundsPage />} />
            
            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
        <StickyActions />
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;