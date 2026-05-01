import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const plans = [
  {
    name: 'Basic',
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    savings: 20,
    description: 'Perfect for beginning your spiritual journey.',
    features: [
    'Access to 100+ guided meditations',
    'Basic spiritual talks library',
    'Community forum access',
    'Mobile app access'],

    buttonText: 'Start Basic',
    isPopular: false
  },
  {
    name: 'Premium',
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    savings: 40,
    description: 'Our most comprehensive spiritual toolkit.',
    features: [
    'Everything in Basic',
    'Unlimited live event access',
    'Exclusive healing sessions',
    'Offline downloads',
    '1-on-1 monthly check-in'],

    buttonText: 'Start Premium',
    isPopular: true
  },
  {
    name: 'Lifetime VIP',
    monthlyPrice: 299,
    yearlyPrice: 299,
    isOneTime: true,
    description: 'A lifelong commitment to your growth.',
    features: [
    'Everything in Premium forever',
    'VIP retreat invitations',
    'Direct messaging with guides',
    'Early access to new content',
    'Exclusive VIP community'],

    buttonText: 'Become VIP',
    isPopular: false
  }];

  return (
    <section
      id="pricing"
      className="py-24 bg-[#fafafa] relative overflow-hidden"
      ref={ref}>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwYjRhMzIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

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
            Invest in Your Journey
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Choose the path that best supports your spiritual growth. Cancel
            anytime.
          </p>

          {/* Polished Toggle */}
          <div className="inline-flex items-center justify-center p-1.5 bg-white border border-gray-200 rounded-full shadow-sm mx-auto">
            <button
              onClick={() => setIsYearly(false)}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${!isYearly ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}>
              
              {!isYearly &&
              <motion.div
                layoutId="pricing-toggle"
                className="absolute inset-0 bg-royal-green rounded-full shadow-md"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }
              <span className="relative z-10">Monthly</span>
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${isYearly ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}>
              
              {isYearly &&
              <motion.div
                layoutId="pricing-toggle"
                className="absolute inset-0 bg-royal-green rounded-full shadow-md"
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />

              }
              <span className="relative z-10">Yearly</span>
              <span
                className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider transition-colors ${isYearly ? 'bg-white/20 text-white' : 'bg-soft-gold/20 text-soft-gold-light'}`}>
                
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) =>
          <motion.div
            key={plan.name}
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
              delay: index * 0.2
            }}
            className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${plan.isPopular ? 'border-2 border-soft-gold shadow-[0_20px_40px_rgba(212,175,55,0.15)] md:-translate-y-4 z-10' : 'border border-gray-100 shadow-lg'}`}>
            
              {plan.isPopular &&
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-soft-gold to-[#e3c668] text-royal-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
            }

              <div className="text-center mb-8">
                <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex flex-col items-center justify-center h-24">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-poppins font-bold text-royal-green tracking-tight">
                      $
                      {plan.isOneTime ?
                    plan.monthlyPrice :
                    isYearly ?
                    plan.yearlyPrice :
                    plan.monthlyPrice}
                    </span>
                    {!plan.isOneTime &&
                  <span className="text-gray-500 font-medium">
                        /{isYearly ? 'yr' : 'mo'}
                      </span>
                  }
                  </div>
                  {/* Annual Savings Text */}
                  {!plan.isOneTime && isYearly &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  className="text-emerald-600 text-sm font-medium mt-2 bg-emerald-50 px-3 py-1 rounded-full">
                  
                      Save ${plan.savings}/yr
                    </motion.div>
                }
                  {plan.isOneTime &&
                <div className="text-gray-500 text-sm font-medium mt-2">
                      One-time payment
                    </div>
                }
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) =>
              <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-royal-green/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-royal-green" />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
              )}
              </ul>

              <button
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.isPopular ? 'bg-soft-gold hover:bg-soft-gold-light text-royal-green shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-none hover:-translate-y-0.5' : 'bg-royal-green hover:bg-royal-green-light text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}>
              
                {plan.buttonText}
              </button>
            </motion.div>
          )}
        </div>

        {/* Guarantee Badge */}
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
            delay: 0.8
          }}
          className="mt-16 flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
          
          <ShieldCheck className="w-5 h-5 text-soft-gold" />
          <span>30-day money-back guarantee. No questions asked.</span>
        </motion.div>
      </div>
    </section>);

}