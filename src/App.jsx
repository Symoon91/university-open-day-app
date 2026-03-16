import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Input } from "@/components/ui/input.jsx";
import {
  Calendar,
  MapPin,
  QrCode,
  Car,
  Home,
  Clock,
  Bell,
  Navigation,
  Camera,
  Users,
  Building,
  Info,
  Wifi,
  Phone,
  Mail,
  ChevronRight,
  Star,
  CheckCircle,
  AlertCircle,
  XCircle,
  Heart,
  BookOpen,
  Utensils,
  Zap,
  MessageCircle,
} from "lucide-react";
import './App.css';
import UniversityMap from "./components/UniversityMap.jsx";
import DepartmentHub from "./components/DepartmentHub.jsx";
import AmenitiesFinder from "./components/AmenitiesFinder.jsx";
import ItineraryBuilder from "./components/ItineraryBuilder.jsx";
import FeedbackHub from "./components/FeedbackHub.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const events = [
    {
      id: 1,
      title: "Campus Tour",
      time: "9:00 AM - 12:00 PM",
      location: "Various Locations",
      description: "Guided tour of the university campus",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Engineering Lab Demo",
      time: "11:00 AM - 12:00 PM",
      location: "Engineering Building",
      description: "Interactive demonstrations in our state-of-the-art labs",
      status: "active",
    },
    {
      id: 3,
      title: "Student Life Presentation",
      time: "1:00 PM - 2:00 PM",
      location: "Student Center",
      description: "Learn about student life and campus activities",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Q&A Session",
      time: "3:00 PM - 4:00 PM",
      location: "Room 101",
      description: "Ask questions about courses and university life",
      status: "upcoming",
    },
  ];

  const campusLocations = [
    { 
      name: "Engineering Building", 
      type: "Academic", 
      icon: "🏗️", 
      distance: "2 min walk", 
      coords: [52.5850, -2.1290], 
      description: "Faculty of Science and Engineering",
      category: "Academic"
    },
    { 
      name: "Student Center", 
      type: "Facilities", 
      icon: "🏢", 
      distance: "5 min walk", 
      coords: [52.5870, -2.1270], 
      description: "Student services and activities",
      category: "Facilities"
    },
    { 
      name: "Library", 
      type: "Academic", 
      icon: "📚", 
      distance: "3 min walk", 
      coords: [52.5880, -2.1295], 
      description: "Harrison Learning Centre",
      category: "Academic"
    },
    { 
      name: "Parking Lot A", 
      type: "Parking", 
      icon: "🅿️", 
      distance: "1 min walk", 
      coords: [52.5860, -2.1310], 
      description: "Main parking area",
      category: "Parking"
    },
    { 
      name: "Millennium City Building", 
      type: "Academic", 
      icon: "🏛️", 
      distance: "6 min walk", 
      coords: [52.5890, -2.1260], 
      description: "Faculty of Education, Health and Wellbeing",
      category: "Academic"
    },
    { 
      name: "Wulfruna Building", 
      type: "Academic", 
      icon: "🔬", 
      distance: "4 min walk", 
      coords: [52.5865, -2.1275], 
      description: "Faculty of Science and Engineering",
      category: "Academic"
    },
  ];

  const categories = ["All Categories", "Academic", "Facilities", "Parking"];

  const filteredLocations = campusLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const quickStats = [
    { label: "Events Today", value: "12", icon: Calendar },
    { label: "Campus Buildings", value: "8", icon: Building },
    { label: "Parking Spots", value: "150", icon: Car },
    { label: "Tour Groups", value: "6", icon: Users },
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-12 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                <img src="/extracted_logo.png" alt="University of Wolverhampton Logo" className="h-16 w-16 object-contain" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to Open Day
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-amber-100">
              University of Wolverhampton
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-amber-100">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Feature Cards Grid */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Quick Access</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white"
                onClick={() => setActiveTab("schedule")}
              >
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Today's Schedule</h3>
                  <p className="mt-2 text-sm text-amber-100">View all events</p>
                  <ChevronRight className="mx-auto mt-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                onClick={() => setActiveTab("map")}
              >
                <CardContent className="p-6 text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Campus Map</h3>
                  <p className="mt-2 text-sm text-blue-100">Navigate campus</p>
                  <ChevronRight className="mx-auto mt-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-green-500 to-teal-600 text-white"
                onClick={() => setActiveTab("scanner")}
              >
                <CardContent className="p-6 text-center">
                  <QrCode className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">QR Scanner</h3>
                  <p className="mt-2 text-sm text-green-100">Access content</p>
                  <ChevronRight className="mx-auto mt-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-red-500 to-pink-600 text-white"
                onClick={() => setActiveTab("info")}
              >
                <CardContent className="p-6 text-center">
                  <Car className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Parking Info</h3>
                  <p className="mt-2 text-sm text-red-100">Find parking</p>
                  <ChevronRight className="mx-auto mt-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                onClick={() => setActiveTab("departments")}
              >
                <CardContent className="p-6 text-center">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Departments</h3>
                  <p className="mt-2 text-sm text-indigo-100">Explore faculties</p>
                  <ChevronRight className="mx-auto mt-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* New Features Section */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Enhanced Features</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-rose-500 to-pink-600 text-white"
                onClick={() => setActiveTab("itinerary")}
              >
                <CardContent className="p-6 text-center">
                  <Zap className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">My Itinerary</h3>
                  <p className="mt-2 text-sm text-rose-100">Build your schedule</p>
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-teal-500 to-cyan-600 text-white"
                onClick={() => setActiveTab("amenities")}
              >
                <CardContent className="p-6 text-center">
                  <Utensils className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <p className="mt-2 text-sm text-teal-100">Find facilities</p>
                </CardContent>
              </Card>

              <Card 
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-gradient-to-br from-orange-500 to-yellow-600 text-white"
                onClick={() => setActiveTab("feedback")}
              >
                <CardContent className="p-6 text-center">
                  <MessageCircle className="mx-auto mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">Feedback</h3>
                  <p className="mt-2 text-sm text-orange-100">Rate & review</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Info className="h-6 w-6 text-amber-600" />
                  Essential Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">WiFi Network</p>
                    <p className="text-sm text-gray-600">UoW-OpenDay</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency</p>
                    <p className="text-sm text-gray-600">Call Security at ext. 2222</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Information Desk</p>
                    <p className="text-sm text-gray-600">Main Reception</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Star className="h-6 w-6 text-amber-600" />
                  Next Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white">
                  <h3 className="text-lg font-semibold">Engineering Lab Demo</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      11:00 AM - 12:00 PM
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Engineering Building
                    </div>
                  </div>
                  <Button 
                    className="mt-4 bg-white text-amber-600 hover:bg-amber-50"
                    onClick={() => setActiveTab("schedule")}
                  >
                    View Full Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-24">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Today's Schedule</h2>
          <p className="mt-2 text-blue-100">University Open Day Events</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <Badge 
                        variant={event.status === 'active' ? 'default' : 'secondary'}
                        className={event.status === 'active' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {event.status === 'active' ? 'Live Now' : 'Upcoming'}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                  <Button
                    size="sm"
                    className="ml-4 bg-amber-500 text-white hover:bg-amber-600"
                  >
                    <Bell className="mr-1 h-4 w-4" />
                    Remind Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMap = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pb-24">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Campus Map</h2>
          <p className="mt-2 text-green-100">Find your way around campus</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <div className="sm:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-lg focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Card className="mb-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <UniversityMap locations={filteredLocations} />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Key Locations ({filteredLocations.length})
            </h3>
            {filteredLocations.map((location, index) => (
              <Card key={index} className="border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
                        {location.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{location.name}</h4>
                        <p className="text-sm text-gray-600">{location.description}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {location.type}
                          </Badge>
                          <span className="text-sm text-gray-600">{location.distance}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-green-200 hover:bg-green-50">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderScanner = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 pb-24">
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">QR Scanner</h2>
          <p className="mt-2 text-purple-100">Scan QR codes for lab videos and AR content</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6 border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black">
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-48 w-48 rounded-lg border-4 border-amber-400 bg-white/10 backdrop-blur-sm">
                      <div className="flex h-full items-center justify-center">
                        <QrCode className="h-16 w-16 text-white" />
                      </div>
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-center">
                      <p className="text-white">Point camera at QR code</p>
                      <p className="text-sm text-gray-300">to access lab videos and AR content</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6 flex gap-4">
            <Button size="lg" className="flex-1 bg-purple-600 hover:bg-purple-700">
              <Camera className="mr-2 h-5 w-5" />
              Open Camera
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Gallery
            </Button>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Recent Scans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Engineering Lab Demo</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Video</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Student Center Tour</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">AR</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-gray-600">Library Resources</span>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderInfo = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 pb-24">
      <div className="bg-gradient-to-r from-red-600 to-pink-700 px-6 py-8 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Parking & Information</h2>
          <p className="mt-2 text-red-100">Essential information for your visit</p>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Car className="h-6 w-6 text-red-600" />
                Parking Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-green-50 p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">Parking Lot A</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Available</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-4">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium">Parking Lot B</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Limited</Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-red-50 p-4">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Street Parking</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800">Full</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Navigation className="h-6 w-6 text-red-600" />
                Directions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-gray-50 p-4 mb-4">
                <p className="font-medium text-gray-900 mb-2">University of Wolverhampton</p>
                <p className="text-gray-600">
                  Wulfruna Street<br />
                  Wolverhampton WV1 1LY
                </p>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Phone className="h-6 w-6 text-red-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-blue-50 p-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Main Reception</p>
                    <p className="text-sm text-gray-600">0800 953 3222</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Security</p>
                    <p className="text-sm text-gray-600">ext. 2222</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-3">
                  <Users className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Student Services</p>
                    <p className="text-sm text-gray-600">ext. 2200</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-purple-50 p-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">enquiries@wlv.ac.uk</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHome();
      case "schedule":
        return renderSchedule();
      case "map":
        return renderMap();
      case "scanner":
        return renderScanner();
      case "info":
        return renderInfo();
      case "departments":
        return <DepartmentHub />;
      case "amenities":
        return <AmenitiesFinder />;
      case "itinerary":
        return <ItineraryBuilder />;
      case "feedback":
        return <FeedbackHub />;
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderContent()}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-md">
          <div className="flex justify-around py-2 overflow-x-auto">
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "home"
                  ? "text-amber-600"
                  : "text-gray-600 hover:text-amber-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              <Home className={`h-6 w-6 ${activeTab === "home" ? "scale-110" : ""}`} />
              <span className="font-medium">Home</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "schedule"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("schedule")}
            >
              <Calendar className={`h-6 w-6 ${activeTab === "schedule" ? "scale-110" : ""}`} />
              <span className="font-medium">Schedule</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "map"
                  ? "text-green-600"
                  : "text-gray-600 hover:text-green-600"
              }`}
              onClick={() => setActiveTab("map")}
            >
              <MapPin className={`h-6 w-6 ${activeTab === "map" ? "scale-110" : ""}`} />
              <span className="font-medium">Map</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "scanner"
                  ? "text-purple-600"
                  : "text-gray-600 hover:text-purple-600"
              }`}
              onClick={() => setActiveTab("scanner")}
            >
              <QrCode className={`h-6 w-6 ${activeTab === "scanner" ? "scale-110" : ""}`} />
              <span className="font-medium">Scanner</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "departments"
                  ? "text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
              onClick={() => setActiveTab("departments")}
            >
              <BookOpen className={`h-6 w-6 ${activeTab === "departments" ? "scale-110" : ""}`} />
              <span className="font-medium">Depts</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "amenities"
                  ? "text-teal-600"
                  : "text-gray-600 hover:text-teal-600"
              }`}
              onClick={() => setActiveTab("amenities")}
            >
              <Utensils className={`h-6 w-6 ${activeTab === "amenities" ? "scale-110" : ""}`} />
              <span className="font-medium">Amenities</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "itinerary"
                  ? "text-rose-600"
                  : "text-gray-600 hover:text-rose-600"
              }`}
              onClick={() => setActiveTab("itinerary")}
            >
              <Zap className={`h-6 w-6 ${activeTab === "itinerary" ? "scale-110" : ""}`} />
              <span className="font-medium">Itinerary</span>
            </button>
            <button
              className={`flex flex-col items-center gap-1 px-3 py-2 text-xs transition-all duration-200 whitespace-nowrap ${
                activeTab === "feedback"
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }`}
              onClick={() => setActiveTab("feedback")}
            >
              <MessageCircle className={`h-6 w-6 ${activeTab === "feedback" ? "scale-110" : ""}`} />
              <span className="font-medium">Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
