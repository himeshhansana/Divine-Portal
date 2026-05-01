import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const StatItem = ({ endValue, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = endValue / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6">
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
        className="text-4xl md:text-5xl font-poppins font-bold text-soft-gold mb-2">
        
        {count.toLocaleString()}
        {suffix}
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
          duration: 0.6,
          delay: 0.2
        }}
        className="text-white/80 text-sm md:text-base font-medium tracking-wide uppercase">
        
        {label}
      </motion.div>
    </div>);

};
export function StatsBar() {
  return (
    <section className="bg-royal-green-dark py-12 border-y border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <StatItem endValue={50000} suffix="+" label="Members" />
          <StatItem endValue={500} suffix="+" label="Sessions" />
          <StatItem endValue={100} suffix="+" label="Teachers" />
          <StatItem endValue={30} suffix="+" label="Countries" />
        </div>
      </div>
    </section>);

}