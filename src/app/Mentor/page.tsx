import React from 'react';
import { Calendar, Users, Lightbulb, ArrowRight, Star, MessageCircle } from 'lucide-react';

type EventType = 'webinar' | 'feedback' | 'one-on-one' | 'workshop';

interface MentorEvent {
  id: string;
  type: EventType;
  date: string;
  title: string;
  description: string;
  spots?: number;
}
interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  expertise: string[];
  events: MentorEvent[];
}
const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Kranthi Kumar C',
    role: 'Business Head',
    company: 'Turno',
    image: '/mentors/',
    expertise: ['UI/UX', 'Design Systems', 'Product Strategy'],
    events: [
      {
        id: 'e1',
        type: 'webinar',
        date: '2024-02-20T18:00:00Z',
        title: 'Building Scalable Design Systems',
        description: 'Learn the fundamental principles of creating design systems that scale.',
        spots: 100
      },
      {
        id: 'e2',
        type: 'feedback',
        date: '2024-02-22T15:00:00Z',
        title: 'Portfolio Review Session',
        description: 'Get personalized feedback on your design portfolio.',
        spots: 5
      }
    ]
  },
  {
    id: '2',
    name: 'Alex Rivera',
    role: 'Engineering Manager',
    company: 'Stripe',
    image: '/mentors/alex.jpg',
    expertise: ['System Architecture', 'Team Leadership', 'Frontend Development'],
    events: [
      {
        id: 'e3',
        type: 'workshop',
        date: '2024-02-25T17:00:00Z',
        title: 'Modern Frontend Architecture',
        description: 'Deep dive into building scalable frontend applications.',
        spots: 50
      }
    ]
  },
  {
    id: '3',
    name: 'Emily Zhang',
    role: 'Data Scientist',
    company: 'Google',
    image: '/mentors/emily.jpg',
    expertise: ['Machine Learning', 'Data Analysis', 'AI Ethics'],
    events: [
      {
        id: 'e4',
        type: 'webinar',
        date: '2024-03-01T19:00:00Z',
        title: 'Introduction to Machine Learning',
        description: 'Learn the basics of machine learning and its applications.',
        spots: 200
      }
    ]
  },
  {
    id: '4',
    name: 'John Doe',
    role: 'Software Engineer',
    company: 'Microsoft',
    image: '/mentors/john.jpg',
    expertise: ['Backend Development', 'Cloud Computing', 'DevOps'],
    events: [
      {
        id: 'e5',
        type: 'workshop',
        date: '2024-03-05T16:00:00Z',
        title: 'Cloud Computing with Azure',
        description: 'Explore the fundamentals of cloud computing using Microsoft Azure.',
        spots: 75
      }
    ]
  },
  {
    id: '5',
    name: 'Jane Smith',
    role: 'Product Manager',
    company: 'Amazon',
    image: '/mentors/jane.jpg',
    expertise: ['Product Management', 'Agile Methodologies', 'User Research'],
    events: [
      {
        id: 'e6',
        type: 'one-on-one',
        date: '2024-03-10T14:00:00Z',
        title: 'Career Coaching Session',
        description: 'Get personalized advice on advancing your career in product management.',
        spots: 10
      }
    ]
  }
];

const MentorSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Accelerate Your Growth with Expert Mentorship
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            From validating your project ideas to joining exclusive webinars, our mentors are here to guide you through every step of your journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
              <Lightbulb className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="font-semibold mb-2">Validate Ideas</h3>
              <p className="text-sm text-gray-400">Get expert feedback on your project ideas and validate your approach.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
              <Users className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="font-semibold mb-2">Join Webinars</h3>
              <p className="text-sm text-gray-400">Access exclusive webinars and workshops led by industry experts.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur">
              <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">1:1 Sessions</h3>
              <p className="text-sm text-gray-400">Book personalized mentoring sessions for in-depth guidance.</p>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-8" style={{ minWidth: `${mentors.length * 400}px` }}>
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-gray-800 rounded-2xl overflow-hidden" style={{ minWidth: '400px' }}>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-xl">{mentor.name}</h3>
                      <p className="text-gray-400 text-sm">{mentor.role} at {mentor.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {mentor.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {mentor.events.map((event) => (
                      <div key={event.id} className="bg-gray-700/30 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs 
                            ${event.type === 'webinar' ? 'bg-blue-500/20 text-blue-300' :
                              event.type === 'feedback' ? 'bg-green-500/20 text-green-300' :
                              event.type === 'workshop' ? 'bg-purple-500/20 text-purple-300' :
                              'bg-gray-500/20 text-gray-300'}`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                          <div className="flex items-center text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                        </div>
                        <h4 className="font-semibold mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{event.description}</p>
                        {event.spots && (
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-1" />
                            {event.spots} spots available
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-r from-emerald-900/50 to-sky-900/50 rounded-2xl p-8 text-center backdrop-blur mt-16">
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Take Your Next Step?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our mentorship program and get personalized guidance from industry experts who've been where you want to go.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors">
            Get Mentorship
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;