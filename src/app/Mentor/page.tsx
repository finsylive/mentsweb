import React from 'react';
import { Calendar, Users, Lightbulb, ArrowRight, Star, MessageCircle, GraduationCap } from 'lucide-react';
import { StaticImageData } from 'next/image';

type EventType = 'webinar' | 'feedback' | 'one-on-one' | 'workshop';

interface Education {
  degree: string;
  institution: string;
  year: string;
}

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
  image: string | StaticImageData;
  expertise: string[];
  education: Education[];
  events: MentorEvent[];
}

const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Kranthi Kumar C',
    role: 'Business Head',
    company: 'Turno',
    image: '/images/Kranthi.jpg',
    expertise: ['UI/UX', 'Design Systems', 'Product Strategy'],
    education: [
      {
        degree: 'BTech in Metalurgical Engineering',
        institution: 'Indian Institute of Technology, Madras',
        year: ''
      },
    ],
    events: [
      {
        id: 'e2',
        type: 'feedback',
        date: 'to be decided',
        title: 'Portfolio Review Session',
        description: 'Get personalized feedback on your Project.',
        spots: 5
      }
    ]
  },
  {
    id: '2',
    name: 'Jayanth V',
    role: 'Chartared Accountant',
    company: '',
    image: '/images/jayanth.jpg', // Update to correct public path
    expertise: ['Finance Modelling', 'Financial Analyst'],
    education: [
      {
        degree: 'Chartered Accountant',
        institution: 'ICAI',
        year: ''
      },
    ],
    events: [
      {
        id: 'e4',
        type: 'webinar',
        date: '2024-03-01T19:00:00Z',
        title: 'Finance Modelling for a startup',
        description: 'Learn the basics of finance modelling for a startup.',
        spots: 50
      }
    ]
  },
  {
    id: '3',
    name: 'Ponnappa K C',
    role: 'Co-founder and COO @Swift Money',
    company:'Swift Money',
    image: '/images/ponnappa.jpg',
    expertise: ['Bussiness Consulting', 'Management information System', 'Risk Management'],
    education: [
      {
        degree: 'MBA, Finance',
        institution: 'T A Pai Management Institute, Manipal',
        year: '2002'
      }
    ],
    events: [
      {
        id: 'e2',
        type: 'feedback',
        date: 'to be decided',
        title: 'Portfolio Review Session',
        description: 'Get personalized feedback on your Project.',
        spots: 7
      }
    ]
  },
  {
    id: '4',
    name: 'Smita Meshram',
    role: 'Senior Data Scientist',
    company: 'Oracle',
    image: '/images/smita.jpeg',
    expertise: ['Data Science', 'Machine Learning', 'Deep Learning'],
    education: [
      {
        degree: 'BTech + MTech in Metallurgical Engineering',
        institution: 'Indian Institute of Technology, Madras',
        year: '2020'
      }
    ],
    events: [
      {
        id: 'e3',
        type: 'webinar',
        date: '2024-02-25T17:00:00Z',
        title: 'What it takes to be a Data Scientist',
        description: 'Deep dive into the world of Data Science.',
        spots: 50
      }
    ]
  },
  {
    id: '5',
    name: 'Akshya Beniwal',
    role: 'Psycholgoist',
    company: '',
    image: '/images/akshya.jpg',
    expertise: ['Psychological', '', 'User Research'],
    education: [
      {
        degree: 'MA',
        institution: 'University of Delhi',
        year: '2024'
      },
      {
        degree: 'Bsc in physical sciences',
        institution: 'Hansraj College, Delhi University',
        year: '2021'
      }
    ],
    events: [
      {
        id: 'e6',
        type: 'one-on-one',
        date: '2024-03-10T14:00:00Z',
        title: 'Technological application in clinical psychology',
        description: 'Get personalized advice on your project.',
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
                      src={typeof mentor.image === 'string' ? mentor.image : mentor.image.src}
                      alt={mentor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-xl">{mentor.name}</h3>
                      <p className="text-gray-400 text-sm">{mentor.role} at {mentor.company}</p>
                    </div>
                  </div>
                  {/* Education Section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <h4 className="font-semibold text-gray-300">Education</h4>
                    </div>
                    <div className="space-y-2">
                      {mentor.education.map((edu, index) => (
                        <div key={index} className="bg-gray-700/20 rounded-lg p-3">
                          <p className="font-medium text-sm">{edu.degree}</p>
                          <p className="text-sm text-gray-400">{edu.institution}, {edu.year}</p>
                        </div>
                      ))}
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
          <a href="https://forms.gle/8XiTzjHPgaDq6MDp7" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors">
              Get Mentorship
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};


export default MentorSection;