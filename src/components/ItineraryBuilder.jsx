import React, { useState, useEffect } from 'react';
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
  Clock,
  MapPin,
  Trash2,
  Download,
  Plus,
  AlertCircle,
} from 'lucide-react';

const ItineraryBuilder = () => {
  const [itinerary, setItinerary] = useState(() => {
    const saved = localStorage.getItem('userItinerary');
    return saved ? JSON.parse(saved) : [];
  });

  const [availableEvents, setAvailableEvents] = useState([
    {
      id: 1,
      title: 'Campus Tour',
      time: '9:00 AM - 12:00 PM',
      location: 'Various Locations',
      duration: 180,
      category: 'Tour',
      startTime: '09:00'
    },
    {
      id: 2,
      title: 'Engineering Lab Demo',
      time: '11:00 AM - 12:00 PM',
      location: 'Engineering Building',
      duration: 60,
      category: 'Demo',
      startTime: '11:00'
    },
    {
      id: 3,
      title: 'Student Life Presentation',
      time: '1:00 PM - 2:00 PM',
      location: 'Student Center',
      duration: 60,
      category: 'Presentation',
      startTime: '13:00'
    },
    {
      id: 4,
      title: 'Q&A Session',
      time: '3:00 PM - 4:00 PM',
      location: 'Room 101',
      duration: 60,
      category: 'Q&A',
      startTime: '15:00'
    },
    {
      id: 5,
      title: 'Faculty of Science Tour',
      time: '10:30 AM - 11:30 AM',
      location: 'Wulfruna Building',
      duration: 60,
      category: 'Tour',
      startTime: '10:30'
    },
    {
      id: 6,
      title: 'Business School Showcase',
      time: '2:00 PM - 3:00 PM',
      location: 'Student Center',
      duration: 60,
      category: 'Showcase',
      startTime: '14:00'
    }
  ]);

  useEffect(() => {
    localStorage.setItem('userItinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  const addToItinerary = (event) => {
    if (!itinerary.find(item => item.id === event.id)) {
      setItinerary([...itinerary, event]);
    }
  };

  const removeFromItinerary = (eventId) => {
    setItinerary(itinerary.filter(item => item.id !== eventId));
  };

  const sortedItinerary = [...itinerary].sort((a, b) => {
    return a.startTime.localeCompare(b.startTime);
  });

  const checkConflicts = () => {
    const conflicts = [];
    for (let i = 0; i < sortedItinerary.length - 1; i++) {
      const current = sortedItinerary[i];
      const next = sortedItinerary[i + 1];
      const currentEnd = parseInt(current.startTime.replace(':', '')) + current.duration;
      const nextStart = parseInt(next.startTime.replace(':', ''));
      if (currentEnd > nextStart) {
        conflicts.push(`${current.title} conflicts with ${next.title}`);
      }
    }
    return conflicts;
  };

  const conflicts = checkConflicts();

  const downloadItinerary = () => {
    const content = `My University Open Day Itinerary\n\n${sortedItinerary
      .map(
        (event) =>
          `${event.title}\nTime: ${event.time}\nLocation: ${event.location}\n\n`
      )
      .join('')}`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', 'my-itinerary.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Available Events */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Available Events</h3>
              <div className="space-y-3">
                {availableEvents.map((event) => {
                  const isAdded = itinerary.some(item => item.id === event.id);
                  return (
                    <Card
                      key={event.id}
                      className={`border-0 shadow-md transition-all duration-200 ${
                        isAdded ? 'opacity-50' : ''
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="font-medium text-sm text-gray-900">
                              {event.title}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">{event.time}</p>
                          </div>
                          <Button
                            size="sm"
                            variant={isAdded ? 'outline' : 'default'}
                            onClick={() => addToItinerary(event)}
                            disabled={isAdded}
                            className="bg-rose-600 hover:bg-rose-700"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* My Schedule */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">My Schedule</h3>
                {itinerary.length > 0 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={downloadItinerary}
                    className="border-rose-200 hover:bg-rose-50"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>

              {conflicts.length > 0 && (
                <Card className="mb-4 border-yellow-200 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900 text-sm">Schedule Conflicts</p>
                        {conflicts.map((conflict, idx) => (
                          <p key={idx} className="text-xs text-yellow-800 mt-1">
                            • {conflict}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {itinerary.length === 0 ? (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-600">
                      Add events to build your itinerary
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-3">
                  {sortedItinerary.map((event, idx) => (
                    <Card key={event.id} className="border-0 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-rose-100 text-rose-800">
                                {idx + 1}
                              </Badge>
                              <h4 className="font-semibold text-gray-900">
                                {event.title}
                              </h4>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeFromItinerary(event.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
