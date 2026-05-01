import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royal-green pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,107,73,0.4)_0%,transparent_50%)]" />

      {/* Elaborate Mandala SVG Background */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none">
        
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full fill-soft-gold">
          
          <path d="M250 0C250 0 270 100 350 150C430 200 500 250 500 250C500 250 400 270 350 350C300 430 250 500 250 500C250 500 230 400 150 350C70 300 0 250 0 250C0 250 100 230 150 150C200 70 250 0 250 0Z" />
          <path
            d="M250 50C250 50 265 120 320 180C380 235 450 250 450 250C450 250 380 265 320 320C265 380 250 450 250 450C250 450 235 380 180 320C120 265 50 250 50 250C50 250 120 235 180 180C235 120 250 50 250 50Z"
            opacity="0.7" />
          
          <circle
            cx="250"
            cy="250"
            r="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5" />
          
          <circle
            cx="250"
            cy="250"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            opacity="0.3" />
          
        </svg>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) =>
      <motion.div
        key={i}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.random() * 40 - 20, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: 'easeInOut'
        }}
        className="absolute w-1.5 h-1.5 bg-soft-gold rounded-full blur-[1px]"
        style={{
          top: `${20 + Math.random() * 60}%`,
          left: `${10 + Math.random() * 80}%`
        }} />

      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-soft-gold text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-soft-gold"></span>
            </span>
            Welcome to your sanctuary
          </div>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-5xl md:text-7xl font-poppins font-bold text-white leading-tight mb-6 tracking-tight">
          
          Transform Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-[#fceabb] to-soft-gold bg-[length:200%_auto] animate-gradient">
            Mind, Body & Soul
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          
          Discover a premium sanctuary of guided meditations, spiritual talks,
          and live healing sessions designed to elevate your daily life.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
          <button className="w-full sm:w-auto bg-soft-gold hover:bg-soft-gold-light text-royal-green font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 text-lg">
            Start Your Journey
          </button>
          <button className="w-full sm:w-auto bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 text-lg backdrop-blur-sm">
            Explore Library
          </button>
        </motion.div>

        {/* Trusted By Stats */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1.2
          }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/60 text-sm font-medium">
          
          <div className="flex items-center gap-2">
            <span className="text-white">50k+</span> Members
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-white">500+</span> Sessions
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-white">4.9</span>
            <div className="flex text-soft-gold">
              <Star className="w-4 h-4 fill-current" />
            </div>
            Rating
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-px h-16 bg-gradient-to-b from-soft-gold/50 via-soft-gold/20 to-transparent" />
        
      </motion.div>
    </section>);

}