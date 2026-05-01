import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Globe, Users } from 'lucide-react';
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section id="about" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: -50
            }
            }
            transition={{
              duration: 0.8
            }}
            className="lg:w-1/2">
            
            <span className="text-soft-gold font-bold tracking-widest uppercase text-xs mb-4 block">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-royal-green mb-6 leading-tight tracking-tight">
              Making Spiritual Growth Accessible to Everyone
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We believe that inner peace shouldn't be a luxury. SoulStream was
              born from a simple vision: to create a digital sanctuary where
              anyone, anywhere, can access profound spiritual teachings and
              healing practices.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our platform bridges ancient wisdom with modern technology,
              offering a curated space free from the noise of everyday life.
              Here, you can reconnect with your true self, guided by
              world-renowned spiritual teachers and a supportive global
              community.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-12 pb-12 border-b border-gray-100">
              <div className="flex flex-col">
                <span className="text-3xl font-poppins font-bold text-royal-green">
                  500+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  Sessions
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-poppins font-bold text-royal-green">
                  50k+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  Members
                </span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-poppins font-bold text-royal-green">
                  30+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                  Countries
                </span>
              </div>
            </div>

            {/* Our Values Grid */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-royal-green/10 flex items-center justify-center text-royal-green mb-1">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-semibold text-gray-900 text-sm">
                    Accessibility
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Spiritual tools available to anyone, anywhere, anytime.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-soft-gold/20 flex items-center justify-center text-soft-gold-light mb-1">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-semibold text-gray-900 text-sm">
                    Authenticity
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Genuine teachings from verified, experienced guides.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-royal-green/10 flex items-center justify-center text-royal-green mb-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-poppins font-semibold text-gray-900 text-sm">
                    Community
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Fostering deep connections across the globe.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Imagery */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {
              opacity: 0,
              x: 50
            }
            }
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="lg:w-1/2 relative">
            
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Detailed Lotus SVG Background */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 120,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none scale-150">
                
                <svg
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full fill-royal-green">
                  
                  <path d="M250 0C250 0 270 100 350 150C430 200 500 250 500 250C500 250 400 270 350 350C300 430 250 500 250 500C250 500 230 400 150 350C70 300 0 250 0 250C0 250 100 230 150 150C200 70 250 0 250 0Z" />
                  <path
                    d="M250 50C250 50 265 120 320 180C380 235 450 250 450 250C450 250 380 265 320 320C265 380 250 450 250 450C250 450 235 380 180 320C120 265 50 250 50 250C50 250 120 235 180 180C235 120 250 50 250 50Z"
                    opacity="0.7" />
                  
                </svg>
              </motion.div>

              <div className="absolute inset-4 bg-gradient-to-br from-royal-green to-royal-green-dark rounded-full overflow-hidden shadow-[0_20px_50px_rgba(11,74,50,0.3)] flex items-center justify-center border-4 border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)]" />

                {/* Detailed Lotus Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="relative z-10 text-soft-gold">
                  
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    
                    <path
                      d="M12 22c-4.97 0-9-4.03-9-9 0-4.97 4.03-9 9-9s9 4.03 9 9c0 4.97-4.03 9-9 9z"
                      opacity="0.2" />
                    
                    <path d="M12 22c-2.5 0-4.5-4.03-4.5-9 0-4.97 2-9 4.5-9s4.5 4.03 4.5 9c0 4.97-2 9-4.5 9z" />
                    <path d="M3 13c0-2.5 4.03-4.5 9-4.5 4.97 0 9 2 9 4.5s-4.03 4.5-9 4.5c-4.97 0-9-2-9-4.5z" />
                    <circle
                      cx="12"
                      cy="13"
                      r="2"
                      fill="currentColor"
                      opacity="0.5" />
                    
                  </svg>
                </motion.div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-10 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-50">
                
                <div className="w-12 h-12 bg-soft-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-soft-gold text-2xl">✨</span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
                className="absolute bottom-10 -left-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 border border-gray-50">
                
                <div className="text-center">
                  <div className="text-royal-green font-bold text-xl">24/7</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                    Access
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}