import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const TESTIMONIALS = [
{
  id: 1,
  name: 'Sarah M.',
  role: 'Yoga Instructor',
  content:
  'Prefix has completely transformed my daily routine. The guided meditations are incredibly powerful, and the live sessions make me feel connected to a global community.',
  rating: 5,
  initial: 'S'
},
{
  id: 4,
  name: 'Marcus W.',
  role: 'Entrepreneur',
  content:
  'The mindfulness practices here have given me the clarity I need to run my business without burning out. The quality is simply exceptional.',
  rating: 5,
  initial: 'M'
},
{
  id: 2,
  name: 'James T.',
  role: 'Software Engineer',
  content:
  'Finding peace in a chaotic world seemed impossible until I found this platform. The spiritual talks are profound and exactly what I needed to ground myself. I use it every single morning before starting work.',
  rating: 5,
  initial: 'J'
},
{
  id: 3,
  name: 'Elena R.',
  role: 'Wellness Coach',
  content:
  'The quality of the content here is unmatched. It truly feels like a premium sanctuary. I recommend the VIP plan to all my clients seeking deeper spiritual growth.',
  rating: 5,
  initial: 'E'
},
{
  id: 5,
  name: 'Priya K.',
  role: 'Healthcare Worker',
  content:
  'After long shifts, the healing sessions are my sanctuary. The instructors are world-class and the community is so supportive.',
  rating: 5,
  initial: 'P'
}];

const BRANDS = [
'Yoga Journal',
'Mindful Magazine',
'Wellness Weekly',
'Spirit Daily',
'Calm Collective',
'Zen Today',
'Inner Peace Co.'];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-royal-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-soft-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-royal-green mb-6 tracking-tight">
            Stories of Transformation
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our community members who have found peace, purpose, and
            connection through Prefix.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Column 1 */}
          <div className="space-y-6 lg:space-y-8">
            {[TESTIMONIALS[0], TESTIMONIALS[1]].map((testimonial, index) =>
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isInView={isInView} />

            )}
          </div>

          {/* Column 2 (Offset/Taller) */}
          <div className="space-y-6 lg:space-y-8 md:mt-12">
            <TestimonialCard
              testimonial={TESTIMONIALS[2]}
              index={2}
              isInView={isInView} />
            
          </div>

          {/* Column 3 */}
          <div className="space-y-6 lg:space-y-8">
            {[TESTIMONIALS[3], TESTIMONIALS[4]].map((testimonial, index) =>
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index + 3}
              isInView={isInView} />

            )}
          </div>
        </div>

        {/* Brand Marquee */}
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
            duration: 1,
            delay: 0.8
          }}
          className="mt-24 pt-12 border-t border-gray-100 overflow-hidden">
          
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Featured In
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
              {[...BRANDS, ...BRANDS].map((brand, i) =>
              <span
                key={i}
                className="text-xl font-poppins font-bold text-gray-300 mx-4">
                
                  {brand}
                </span>
              )}
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
              {[...BRANDS, ...BRANDS].map((brand, i) =>
              <span
                key={i}
                className="text-xl font-poppins font-bold text-gray-300 mx-4">
                
                  {brand}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `
        }} />
      
    </section>);

}
const TestimonialCard = ({ testimonial, index, isInView }) =>
<motion.div
  initial={{
    opacity: 0,
    y: 30
  }}
  animate={
  isInView ?
  {
    opacity: 1,
    y: 0
  } :
  {
    opacity: 0,
    y: 30
  }
  }
  transition={{
    duration: 0.5,
    delay: index * 0.15
  }}
  className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
  
    {/* Gradient Accent Line */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-royal-green via-soft-gold to-royal-green-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <Quote className="absolute top-6 right-6 w-10 h-10 text-royal-green/5" />

    <div className="flex gap-1 mb-6">
      {[...Array(testimonial.rating)].map((_, i) =>
    <Star key={i} className="w-4 h-4 fill-soft-gold text-soft-gold" />
    )}
    </div>

    <p className="text-gray-600 mb-8 leading-relaxed italic text-sm md:text-base">
      "{testimonial.content}"
    </p>

    <div className="flex items-center gap-4 mt-auto">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-green to-royal-green-dark text-white flex items-center justify-center font-poppins font-semibold text-lg shadow-inner">
        {testimonial.initial}
      </div>
      <div>
        <h4 className="font-poppins font-semibold text-gray-900">
          {testimonial.name}
        </h4>
        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
          {testimonial.role}
        </p>
      </div>
    </div>
  </motion.div>;