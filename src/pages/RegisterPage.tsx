import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Check } from 'lucide-react';
export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const passwordChecks = [
  {
    label: 'At least 8 characters',
    met: password.length >= 8
  },
  {
    label: 'Contains a number',
    met: /\d/.test(password)
  },
  {
    label: 'Contains uppercase letter',
    met: /[A-Z]/.test(password)
  }];

  return (
    <div className="min-h-screen bg-royal-green relative flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,107,73,0.3)_0%,transparent_50%)]" />

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-soft-gold/10 rounded-full blur-3xl" />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5
        }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-royal-green-light/20 rounded-full blur-3xl" />
      

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5
          }}>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-soft-gold transition-colors text-sm mb-8">
            
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

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
            duration: 0.6
          }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="font-poppins font-bold text-2xl text-white tracking-wide">
                <span className="text-soft-gold">✧</span> SoulStream
              </span>
            </Link>
            <h1 className="font-poppins font-semibold text-2xl text-white mt-6 mb-2">
              Begin Your Journey
            </h1>
            <p className="text-white/60 text-sm">
              Create your free account and start exploring
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-soft-gold/50 focus:ring-1 focus:ring-soft-gold/30 transition-all" />
                
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-soft-gold/50 focus:ring-1 focus:ring-soft-gold/30 transition-all" />
                
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-soft-gold/50 focus:ring-1 focus:ring-soft-gold/30 transition-all" />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                  
                  {showPassword ?
                  <EyeOff className="w-5 h-5" /> :

                  <Eye className="w-5 h-5" />
                  }
                </button>
              </div>

              {/* Password Strength */}
              {password.length > 0 &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                className="mt-3 space-y-2">
                
                  {passwordChecks.map((check, i) =>
                <div key={i} className="flex items-center gap-2">
                      <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${check.met ? 'bg-emerald-500/20' : 'bg-white/5'}`}>
                    
                        {check.met &&
                    <Check className="w-3 h-3 text-emerald-400" />
                    }
                      </div>
                      <span
                    className={`text-xs ${check.met ? 'text-emerald-400' : 'text-white/40'}`}>
                    
                        {check.label}
                      </span>
                    </div>
                )}
                </motion.div>
              }
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-soft-gold focus:ring-soft-gold/30 accent-soft-gold mt-0.5" />
              
              <label
                htmlFor="terms"
                className="text-white/50 text-sm leading-relaxed">
                
                I agree to the{' '}
                <a
                  href="#"
                  className="text-soft-gold/80 hover:text-soft-gold transition-colors">
                  
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="text-soft-gold/80 hover:text-soft-gold transition-colors">
                  
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              type="submit"
              className="w-full bg-soft-gold hover:bg-soft-gold-light text-royal-green font-semibold py-4 rounded-xl transition-all duration-300 shadow-glow hover:shadow-none text-base">
              
              Create Account
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs uppercase tracking-wider">
              or sign up with
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4" />
                
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853" />
                
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05" />
                
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335" />
                
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-white/50 text-sm mt-8">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-soft-gold hover:text-soft-gold-light transition-colors font-medium">
              
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>);

}