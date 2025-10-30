import React from 'react';
import { Card } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container mx-auto max-w-4xl">
        <Card className="card-medical">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                At Laxmi Narmada Hospital, we are committed to protecting your privacy 
                and the confidentiality of your personal health information.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information necessary to provide quality healthcare services 
                including medical history, contact information, and insurance details.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                How We Use Your Information
              </h2>
              <p>
                Your information is used solely for providing healthcare services, 
                appointment scheduling, and improving our quality of care.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;