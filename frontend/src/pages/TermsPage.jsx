import React from 'react';
import { Card } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container mx-auto max-w-4xl">
        <Card className="card-medical">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Terms of Use
            </h1>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Welcome to Laxmi Narmada Hospital. By using our services, you agree 
                to comply with and be bound by the following terms and conditions.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Free First Consultation Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Valid for new patients only</li>
                <li>Applies to standard OPD consultations</li>
                <li>Excludes emergency services and procedures</li>
                <li>One consultation per child per family</li>
                <li>Valid ID and phone verification required</li>
                <li>Hospital reserves right to modify or withdraw offer</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;