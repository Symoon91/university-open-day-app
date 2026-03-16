import React from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card.jsx';

const ItineraryBuilder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pb-24">
      <div className="bg-gradient-to-r from-rose-600 to-pink-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">My Itinerary</h2>
          <p className="mt-2 text-rose-100">Build your perfect open day schedule</p>
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

export default ItineraryBuilder;
