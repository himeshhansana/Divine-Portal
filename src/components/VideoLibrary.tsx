import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
const CATEGORIES = [
{
  title: 'Continue Watching',
  videos: [
  {
    id: 1,
    title: 'Morning Clarity Meditation',
    duration: '15 min',
    speaker: 'Sarah Jenkins',
    progress: 60,
    color: 'from-emerald-800 to-teal-900'
  },
  {
    id: 2,
    title: 'The Power of Now - Part 3',
    duration: '45 min',
    speaker: 'Dr. Alan Watts',
    progress: 25,
    color: 'from-indigo-900 to-purple-900'
  },
  {
    id: 12,
    title: 'Breathwork Basics',
    duration: '20 min',
    speaker: 'David Chen',
    progress: 10,
    color: 'from-cyan-800 to-blue-900'
  },
  {
    id: 13,
    title: 'Evening Wind Down',
    duration: '30 min',
    speaker: 'Emma Stone',
    progress: 80,
    color: 'from-fuchsia-900 to-purple-900'
  },
  {
    id: 14,
    title: 'Finding Inner Peace',
    duration: '40 min',
    speaker: 'Rev. Michael',
    progress: 45,
    color: 'from-stone-800 to-neutral-900'
  }]

},
{
  title: 'Guided Meditations',
  videos: [
  {
    id: 3,
    title: 'Deep Sleep Release',
    duration: '30 min',
    speaker: 'Emma Stone',
    color: 'from-blue-900 to-slate-900',
    isNew: true
  },
  {
    id: 4,
    title: 'Anxiety Relief Breathing',
    duration: '10 min',
    speaker: 'David Chen',
    color: 'from-cyan-800 to-blue-900'
  },
  {
    id: 5,
    title: 'Chakra Alignment',
    duration: '40 min',
    speaker: 'Maya Patel',
    color: 'from-fuchsia-900 to-purple-900'
  },
  {
    id: 6,
    title: 'Loving Kindness',
    duration: '20 min',
    speaker: 'Sarah Jenkins',
    color: 'from-rose-900 to-pink-900'
  },
  {
    id: 7,
    title: 'Focus & Flow',
    duration: '15 min',
    speaker: 'Dr. Alan Watts',
    color: 'from-amber-800 to-orange-900'
  },
  {
    id: 15,
    title: 'Morning Intention',
    duration: '10 min',
    speaker: 'Elena Rostova',
    color: 'from-emerald-900 to-green-900'
  }]

},
{
  title: 'Spiritual Talks',
  videos: [
  {
    id: 8,
    title: 'Finding Purpose in Chaos',
    duration: '55 min',
    speaker: 'Rev. Michael',
    color: 'from-stone-800 to-neutral-900',
    isNew: true
  },
  {
    id: 9,
    title: 'The Ego and The Soul',
    duration: '60 min',
    speaker: 'Dr. Alan Watts',
    color: 'from-violet-900 to-fuchsia-900'
  },
  {
    id: 10,
    title: 'Manifesting Abundance',
    duration: '45 min',
    speaker: 'Elena Rostova',
    color: 'from-emerald-900 to-green-900'
  },
  {
    id: 11,
    title: 'Healing Ancestral Trauma',
    duration: '90 min',
    speaker: 'Dr. James Okafor',
    color: 'from-red-900 to-rose-900'
  },
  {
    id: 16,
    title: 'The Art of Letting Go',
    duration: '40 min',
    speaker: 'Sarah Jenkins',
    color: 'from-indigo-900 to-blue-900'
  }]

},
{
  title: 'Healing Sessions',
  videos: [
  {
    id: 17,
    title: 'Sound Bath Immersion',
    duration: '45 min',
    speaker: 'Maya Patel',
    color: 'from-purple-900 to-indigo-900',
    isNew: true
  },
  {
    id: 18,
    title: 'Reiki Energy Clearing',
    duration: '30 min',
    speaker: 'Dr. James Okafor',
    color: 'from-teal-900 to-emerald-900'
  },
  {
    id: 19,
    title: 'Somatic Release',
    duration: '60 min',
    speaker: 'Emma Stone',
    color: 'from-rose-900 to-red-900'
  },
  {
    id: 20,
    title: 'Heart Chakra Opening',
    duration: '35 min',
    speaker: 'Elena Rostova',
    color: 'from-pink-900 to-rose-900'
  },
  {
    id: 21,
    title: 'Grounding Practice',
    duration: '25 min',
    speaker: 'David Chen',
    color: 'from-amber-900 to-stone-900'
  }]

},
{
  title: 'Mindfulness',
  videos: [
  {
    id: 22,
    title: 'Mindful Eating Guide',
    duration: '15 min',
    speaker: 'Sarah Jenkins',
    color: 'from-green-900 to-emerald-900'
  },
  {
    id: 23,
    title: 'Walking Meditation',
    duration: '20 min',
    speaker: 'Dr. Alan Watts',
    color: 'from-slate-800 to-stone-900',
    isNew: true
  },
  {
    id: 24,
    title: 'Body Scan Basics',
    duration: '30 min',
    speaker: 'David Chen',
    color: 'from-blue-900 to-indigo-900'
  },
  {
    id: 25,
    title: 'Mindful Communication',
    duration: '45 min',
    speaker: 'Rev. Michael',
    color: 'from-violet-900 to-purple-900'
  },
  {
    id: 26,
    title: 'Present Moment Awareness',
    duration: '10 min',
    speaker: 'Emma Stone',
    color: 'from-cyan-900 to-teal-900'
  }]

}];

const FILTERS = ['All', 'Meditation', 'Talks', 'Healing', 'Mindfulness'];
const VideoCard = ({ video }) => {
  return (
    <div className="relative flex-none w-[280px] sm:w-[320px] group cursor-pointer">
      <div
        className={`w-full h-64 rounded-2xl bg-gradient-to-br ${video.color} p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(11,74,50,0.3)] group-hover:-translate-y-1.5`}>
        
        {/* Dark overlay at bottom for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 scale-90 group-hover:scale-100">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
            <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-start">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
            <Clock className="w-3.5 h-3.5" /> {video.duration}
          </span>
          {video.isNew &&
          <span className="px-2.5 py-1 rounded-md bg-soft-gold text-royal-green text-[10px] font-bold tracking-wider uppercase shadow-md">
              New
            </span>
          }
        </div>

        <div className="relative z-10 mt-auto transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <h4 className="text-white font-poppins font-semibold text-lg leading-tight mb-1.5 group-hover:text-soft-gold transition-colors line-clamp-2">
            {video.title}
          </h4>
          <p className="text-white/70 text-sm font-medium">{video.speaker}</p>
        </div>

        {/* Progress bar for continue watching */}
        {video.progress &&
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/40 z-20">
            <div
            className="h-full bg-soft-gold relative"
            style={{
              width: `${video.progress}%`
            }}>
            
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-md transform translate-x-1/2" />
            </div>
          </div>
        }
      </div>
    </div>);

};
const CategoryRow = ({ category }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="mb-14 relative group/row">
      <div className="flex items-end justify-between px-4 sm:px-6 lg:px-8 mb-5">
        <h3 className="text-2xl font-poppins font-semibold text-royal-green tracking-tight">
          {category.title}
        </h3>
        <button className="text-royal-green-light hover:text-royal-green font-medium text-sm flex items-center gap-1 transition-colors group/btn">
          View All{' '}
          <ChevronRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Scroll Buttons (Desktop only) */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 text-royal-green border border-gray-100">
        
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] opacity-0 group-hover/row:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 text-royal-green border border-gray-100">
        
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-8 pt-2 snap-x snap-mandatory">
        
        {category.videos.map((video) =>
        <div key={video.id} className="snap-start">
            <VideoCard video={video} />
          </div>
        )}
      </div>
    </div>);

};
export function VideoLibrary() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [activeFilter, setActiveFilter] = useState('All');
  return (
    <section
      id="library"
      className="py-24 bg-[#fafafa] overflow-hidden"
      ref={ref}>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {
            opacity: 0,
            y: 20
          }
          }
          transition={{
            duration: 0.6
          }}
          className="text-center mb-12 px-4">
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-royal-green mb-4 tracking-tight">
            Explore Our Library
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            Hundreds of hours of premium spiritual content, carefully curated to
            guide your journey.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((filter) =>
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-royal-green text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-royal-green/30 hover:bg-gray-50'}`}>
              
                {filter}
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={
          isInView ?
          {
            opacity: 1
          } :
          {
            opacity: 0
          }
          }
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          {CATEGORIES.map((category, index) =>
          <CategoryRow key={index} category={category} />
          )}
        </motion.div>
      </div>
    </section>);

}