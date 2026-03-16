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
  BookOpen,
  Users,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const DepartmentHub = () => {
  const [expandedDept, setExpandedDept] = useState(null);

  const departments = [
    {
      id: 1,
      name: 'Faculty of Science and Engineering',
      building: 'Engineering Building & Wulfruna Building',
      icon: '🔬',
      description: 'Explore cutting-edge research and hands-on learning',
      courses: ['Computer Science', 'Engineering', 'Physics', 'Chemistry', 'Mathematics'],
      staffCount: 120,
      studentCount: 2500,
      highlights: [
        'State-of-the-art laboratories',
        'Industry partnerships',
        'Research opportunities',
        'Internship programs'
      ],
      contact: 'science@wlv.ac.uk',
      tours: [
        { time: '10:00 AM', capacity: 20 },
        { time: '1:00 PM', capacity: 20 },
        { time: '3:00 PM', capacity: 20 }
      ]
    },
    {
      id: 2,
      name: 'Faculty of Education, Health and Wellbeing',
      building: 'Millennium City Building',
      icon: '🏥',
      description: 'Dedicated to developing healthcare and education professionals',
      courses: ['Nursing', 'Education', 'Psychology', 'Health Sciences', 'Social Work'],
      staffCount: 95,
      studentCount: 1800,
      highlights: [
        'Clinical practice facilities',
        'Simulation labs',
        'Community partnerships',
        'Professional accreditation'
      ],
      contact: 'health@wlv.ac.uk',
      tours: [
        { time: '9:30 AM', capacity: 15 },
        { time: '2:00 PM', capacity: 15 }
      ]
    },
    {
      id: 3,
      name: 'Faculty of Business and Law',
      building: 'Student Center',
      icon: '📊',
      description: 'Leading business and legal education',
      courses: ['Business Management', 'Law', 'Accounting', 'Economics', 'Marketing'],
      staffCount: 80,
      studentCount: 2000,
      highlights: [
        'Business simulation labs',
        'Moot court facilities',
        'Industry connections',
        'Entrepreneurship support'
      ],
      contact: 'business@wlv.ac.uk',
      tours: [
        { time: '11:00 AM', capacity: 25 },
        { time: '3:30 PM', capacity: 25 }
      ]
    },
    {
      id: 4,
      name: 'Faculty of Arts, Languages and Cultures',
      building: 'Library Building',
      icon: '🎭',
      description: 'Explore creativity, culture, and communication',
      courses: ['English', 'History', 'Languages', 'Media Studies', 'Creative Writing'],
      staffCount: 65,
      studentCount: 1200,
      highlights: [
        'Media production studios',
        'Language labs',
        'Cultural events',
        'Publishing opportunities'
      ],
      contact: 'arts@wlv.ac.uk',
      tours: [
        { time: '10:30 AM', capacity: 18 },
        { time: '2:30 PM', capacity: 18 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Academic Departments</h2>
          <p className="mt-2 text-indigo-100">Explore our faculties and discover your future</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl space-y-4">
          {departments.map((dept) => (
            <Card
              key={dept.id}
              className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
              onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{dept.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{dept.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{dept.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">
                          <Users className="h-3 w-3 mr-1" />
                          {dept.studentCount} Students
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {dept.staffCount} Staff
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedDept === dept.id ? (
                      <ChevronUp className="h-6 w-6 text-indigo-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-indigo-600" />
                    )}
                  </div>
                </div>

                {expandedDept === dept.id && (
                  <div className="border-t border-gray-200 p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        Courses Offered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.courses.map((course, idx) => (
                          <Badge key={idx} className="bg-indigo-100 text-indigo-800">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Why Choose Us?</h4>
                      <ul className="space-y-2">
                        {dept.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Department Tours</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dept.tours.map((tour, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            className="border-indigo-200 hover:bg-indigo-50 justify-start"
                          >
                            <span className="text-sm">{tour.time}</span>
                            <span className="ml-auto text-xs text-gray-600">
                              {tour.capacity} spots
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                        Learn More
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentHub;
