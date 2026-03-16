import React from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card.jsx';

const FeedbackHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 pb-24">
      <div className="bg-gradient-to-r from-orange-600 to-yellow-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Feedback & Ratings</h2>
          <p className="mt-2 text-orange-100">Share your open day experience</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="h-16 w-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6m0-6h6m0 0h6" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">This section is not available at this time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHub;
