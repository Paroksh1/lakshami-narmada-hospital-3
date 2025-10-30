import React from 'react';
import { Card } from '@/components/ui/card';

const RefundsPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container mx-auto max-w-4xl">
        <Card className="card-medical">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              Refund & Rescheduling Policy
            </h1>
            <div className="prose prose-lg text-muted-foreground">
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Appointment Cancellation
              </h2>
              <p>
                Appointments can be cancelled up to 24 hours before the scheduled time 
                without any charges.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Rescheduling
              </h2>
              <p>
                Appointments can be rescheduled based on doctor availability. 
                We recommend calling our booking team for assistance.
              </p>
              <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Refund Process
              </h2>
              <p>
                Refunds for pre-paid services will be processed within 7-10 business days 
                after approval.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RefundsPage;