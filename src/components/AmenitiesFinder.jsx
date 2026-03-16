import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import {
  Coffee,
  Utensils,
  Droplet,
  Accessibility,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';

const AmenitiesFinder = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const amenities = [
    {
      id: 1,
      name: 'Cafés & Food Courts',
      icon: Coffee,
      color: 'bg-amber-500',
      locations: [
        {
          name: 'Main Café - Student Center',
          hours: '8:00 AM - 6:00 PM',
          features: ['WiFi', 'Seating for 100+', 'Hot & Cold drinks'],
          floor: 'Ground Floor',
          distance: '5 min walk'
        },
        {
          name: 'Engineering Building Café',
          hours: '8:30 AM - 5:00 PM',
          features: ['Quick service', 'Snacks', 'Coffee'],
          floor: 'Level 2',
          distance: '2 min walk'
        },
        {
          name: 'Library Refreshment Area',
          hours: '9:00 AM - 5:00 PM',
          features: ['Quiet area', 'Vending machines', 'Water fountain'],
          floor: 'Ground Floor',
          distance: '3 min walk'
        }
      ]
    },
    {
      id: 2,
      name: 'Restaurants',
      icon: Utensils,
      color: 'bg-red-500',
      locations: [
        {
          name: 'University Dining Hall',
          hours: '11:30 AM - 2:00 PM',
          features: ['Full meals', 'Vegetarian options', 'Allergen info'],
          floor: 'Ground Floor',
          distance: '6 min walk'
        },
        {
          name: 'Student Union Bar & Grill',
          hours: '12:00 PM - 9:00 PM',
          features: ['À la carte', 'Outdoor seating', 'Events'],
          floor: 'Ground Floor',
          distance: '7 min walk'
        }
      ]
    },
    {
      id: 3,
      name: 'Restrooms & Facilities',
      icon: Droplet,
      color: 'bg-blue-500',
      locations: [
        {
          name: 'Main Restrooms - Student Center',
          hours: '24/7',
          features: ['Accessible', 'Well-maintained', 'Baby change'],
          floor: 'All Floors',
          distance: '5 min walk'
        },
        {
          name: 'Engineering Building Facilities',
          hours: '24/7',
          features: ['Multiple stalls', 'Accessible', 'Hand dryers'],
          floor: 'All Floors',
          distance: '2 min walk'
        },
        {
          name: 'Library Restrooms',
          hours: '24/7',
          features: ['Quiet area', 'Well-stocked', 'Accessible'],
          floor: 'All Floors',
          distance: '3 min walk'
        }
      ]
    },
    {
      id: 4,
      name: 'Accessibility Services',
      icon: Accessibility,
      color: 'bg-green-500',
      locations: [
        {
          name: 'Disability Support Office',
          hours: '9:00 AM - 5:00 PM',
          features: ['Accessible parking', 'Mobility aids', 'Quiet spaces'],
          floor: 'Ground Floor',
          distance: '4 min walk'
        },
        {
          name: 'First Aid Station',
          hours: '8:00 AM - 6:00 PM',
          features: ['Medical staff', 'Emergency services', 'Defibrillator'],
          floor: 'Ground Floor',
          distance: '5 min walk'
        }
      ]
    }
  ];

  const selectedCategory = selectedAmenity ? amenities.find(a => a.id === selectedAmenity) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 pb-24">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Campus Amenities</h2>
          <p className="mt-2 text-teal-100">Find cafés, restrooms, and essential facilities</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {!selectedAmenity ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {amenities.map((amenity) => {
                const IconComponent = amenity.icon;
                return (
                  <Card
                    key={amenity.id}
                    className="border-0 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => setSelectedAmenity(amenity.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`${amenity.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{amenity.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {amenity.locations.length} locations
                      </p>
                      <ChevronRight className="h-5 w-5 mx-auto mt-3 text-gray-400" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div>
              <Button
                variant="outline"
                onClick={() => setSelectedAmenity(null)}
                className="mb-6"
              >
                ← Back to Categories
              </Button>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedCategory.name}
                </h3>

                {selectedCategory.locations.map((location, idx) => (
                  <Card key={idx} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {location.name}
                          </h4>
                          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {location.hours}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {location.distance}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature, fidx) => (
                            <Badge key={fidx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesFinder;
