import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, CreditCard, XCircle } from 'lucide-react';
export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section
      className="relative py-40 overflow-hidden bg-royal-green"
      ref={ref}>
      
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-green-dark via-royal-green to-royal-green-light" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_50%)] rounded-full blur-3xl pointer-events-none" />
      

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            duration: 0.8
          }}>
          
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-8 leading-tight tracking-tight">
            Begin Your Spiritual <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-gold via-[#fceabb] to-soft-gold bg-[length:200%_auto] animate-gradient">
              Journey Today
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of others who have found their sanctuary. Your path
            to inner peace is just one click away.
          </p>

          <div className="relative inline-block">
            {/* Floating Trust Badges */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -top-12 -left-16 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
              
              <ShieldCheck className="w-4 h-4 text-soft-gold" />
              7-Day Free Trial
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute -bottom-12 -right-12 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
              
              <XCircle className="w-4 h-4 text-soft-gold" />
              Cancel Anytime
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
              className="absolute -top-8 -right-24 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg">
              
              <CreditCard className="w-4 h-4 text-soft-gold" />
              No Credit Card
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="bg-soft-gold hover:bg-soft-gold-light text-royal-green font-bold text-xl py-5 px-12 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] relative z-10">
              
              Start Your Free Trial
            </motion.button>
          </div>

          <p className="mt-8 text-white/50 text-sm font-medium">
            Join 50,000+ members finding peace daily.
          </p>
        </motion.div>
      </div>
    </section>);

}