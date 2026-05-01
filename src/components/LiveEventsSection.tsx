import React, { useRef, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Users, Video, ArrowRight } from 'lucide-react';
const EVENTS = [
{
  id: 1,
  title: 'Global Healing Circle',
  speaker: 'Dr. Sarah Jenkins',
  date: 'Today',
  time: '8:00 PM EST',
  isLive: true,
  attendees: '1,245',
  color: 'from-emerald-800 via-teal-900 to-royal-green-dark',
  description:
  'Join our global community for a powerful collective healing session focused on releasing anxiety and finding deep inner peace.',
  featured: true
},
{
  id: 2,
  title: 'Sunday Morning Sermon: Inner Peace',
  speaker: 'Rev. Michael',
  date: 'Tomorrow',
  time: '10:00 AM EST',
  isLive: false,
  countdown: {
    h: '14',
    m: '20',
    s: '45'
  },
  attendees: '850',
  color: 'from-indigo-900 to-purple-900'
},
{
  id: 3,
  title: 'Full Moon Meditation',
  speaker: 'Elena Rostova',
  date: 'Oct 24',
  time: '9:00 PM EST',
  isLive: false,
  countdown: {
    d: '03',
    h: '05',
    m: '12'
  },
  attendees: '2,100',
  color: 'from-blue-900 to-slate-900'
},
{
  id: 4,
  title: 'Mindfulness Masterclass',
  speaker: 'David Chen',
  date: 'Oct 26',
  time: '2:00 PM EST',
  isLive: false,
  countdown: {
    d: '05',
    h: '18',
    m: '30'
  },
  attendees: '420',
  color: 'from-amber-800 to-orange-900'
}];

const CountdownDisplay = ({ countdown }) => {
  if (!countdown) return null;
  const units = Object.entries(countdown);
  return (
    <div className="flex gap-2 mt-2">
      {units.map(([unit, value], i) =>
      <Fragment key={unit}>
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 text-royal-green font-bold text-lg w-10 h-10 rounded-lg flex items-center justify-center border border-gray-200">
              {value}
            </div>
            <span className="text-[10px] text-gray-500 uppercase mt-1 font-medium">
              {unit === 'd' ?
            'Days' :
            unit === 'h' ?
            'Hrs' :
            unit === 'm' ?
            'Min' :
            'Sec'}
            </span>
          </div>
          {i < units.length - 1 &&
        <div className="text-gray-400 font-bold text-lg mt-1">:</div>
        }
        </Fragment>
      )}
    </div>);

};
const EventCard = ({ event, index }) => {
  const isFeatured = event.featured;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group ${isFeatured ? 'md:col-span-2 md:flex-row' : ''}`}>
      
      {/* Card Header / Image Placeholder */}
      <div
        className={`${isFeatured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'} bg-gradient-to-br ${event.color} relative p-6 flex flex-col justify-end overflow-hidden`}>
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:20px_20px]" />

        {event.isLive &&
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider animate-pulse shadow-lg z-10">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE NOW
          </div>
        }

        <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 z-10">
          <Video className="w-5 h-5 text-white" />
        </div>

        <div className="relative z-10">
          {isFeatured &&
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full mb-3 border border-white/30">
              Featured Event
            </span>
          }
          <h3
            className={`text-white font-poppins font-semibold leading-tight ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
            
            {event.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div
        className={`p-6 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 md:justify-between' : ''}`}>
        
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
              <span className="text-gray-500 font-medium text-sm">
                {event.speaker.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                Guided by
              </p>
              <p className="font-medium text-gray-900">{event.speaker}</p>
            </div>
          </div>

          {isFeatured && event.description &&
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {event.description}
            </p>
          }

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Calendar className="w-4 h-4 text-royal-green" />
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Clock className="w-4 h-4 text-royal-green" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <Users className="w-4 h-4 text-royal-green" />
              <span>{event.attendees} attending</span>
            </div>

            {!event.isLive &&
            <div className="pt-3 mt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">
                  Starts In
                </p>
                <CountdownDisplay countdown={event.countdown} />
              </div>
            }
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${event.isLive ? 'bg-royal-green hover:bg-royal-green-light text-white shadow-md hover:shadow-lg' : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 text-gray-800'}`}>
          
          {event.isLive ? 'Join Live Session' : 'Set Reminder'}
          {event.isLive &&
          <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
          }
        </button>
      </div>
    </motion.div>);

};
export function LiveEventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="live-events" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: -30
            }
            }
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">
            
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-royal-green mb-4 tracking-tight">
              Live Spiritual Events
            </h2>
            <p className="text-gray-600 text-lg">
              Join our global community for real-time healing sessions, guided
              meditations, and powerful spiritual talks.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: 30
            }
            }
            transition={{
              duration: 0.6
            }}>
            
            <button className="text-royal-green border border-royal-green/30 hover:border-royal-green hover:bg-royal-green hover:text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 flex items-center gap-2">
              View Full Schedule <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EVENTS.map((event, index) =>
          <EventCard key={event.id} event={event} index={index} />
          )}
        </div>
      </div>
    </section>);

}