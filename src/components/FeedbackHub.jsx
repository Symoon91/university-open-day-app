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
import { Textarea } from '@/components/ui/textarea.jsx';
import {
  Star,
  Send,
  ThumbsUp,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';

const FeedbackHub = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      event: 'Engineering Lab Demo',
      rating: 5,
      author: 'Alex Johnson',
      comment: 'Amazing experience! The labs are incredible and the staff was very helpful.',
      date: '2 hours ago',
      helpful: 24
    },
    {
      id: 2,
      event: 'Campus Tour',
      rating: 4,
      author: 'Sarah Smith',
      comment: 'Great tour, very informative. Would have liked more time in the library.',
      date: '4 hours ago',
      helpful: 18
    },
    {
      id: 3,
      event: 'Student Life Presentation',
      rating: 5,
      author: 'Mike Chen',
      comment: 'Perfect introduction to student life. Really helped me understand the community.',
      date: '6 hours ago',
      helpful: 12
    }
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  const events = [
    'Engineering Lab Demo',
    'Campus Tour',
    'Student Life Presentation',
    'Q&A Session',
    'Faculty of Science Tour',
    'Business School Showcase'
  ];

  const handleSubmitFeedback = () => {
    if (selectedEvent && rating > 0 && comment.trim() && author.trim()) {
      const newFeedback = {
        id: feedbacks.length + 1,
        event: selectedEvent,
        rating,
        author,
        comment,
        date: 'Just now',
        helpful: 0
      };
      setFeedbacks([newFeedback, ...feedbacks]);
      setSelectedEvent(null);
      setRating(0);
      setComment('');
      setAuthor('');
    }
  };

  const averageRating = feedbacks.length > 0
    ? (feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length).toFixed(1)
    : 0;

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Statistics */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg mb-6">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.round(averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{averageRating}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on {feedbacks.length} reviews
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    Top Rated
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[5, 4, 3].map((stars) => {
                    const count = feedbacks.filter(f => f.rating === stars).length;
                    const percentage = feedbacks.length > 0 ? (count / feedbacks.length * 100).toFixed(0) : 0;
                    return (
                      <div key={stars}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex gap-1">
                            {[...Array(stars)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Feedback Form & List */}
            <div className="lg:col-span-2">
              {/* Submit Feedback Form */}
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-orange-600" />
                    Share Your Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Event
                    </label>
                    <select
                      value={selectedEvent || ''}
                      onChange={(e) => setSelectedEvent(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select an event</option>
                      {events.map((event) => (
                        <option key={event} value={event}>
                          {event}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Your Comment
                    </label>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Share your thoughts about this event..."
                      className="min-h-24"
                    />
                  </div>

                  <Button
                    onClick={handleSubmitFeedback}
                    disabled={!selectedEvent || rating === 0 || !comment.trim() || !author.trim()}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>

              {/* Feedback List */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Recent Feedback</h3>
                {feedbacks.map((feedback) => (
                  <Card key={feedback.id} className="border-0 shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{feedback.event}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            by {feedback.author} • {feedback.date}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{feedback.comment}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-200 hover:bg-gray-50"
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Helpful ({feedback.helpful})
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackHub;
