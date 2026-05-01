import React from 'react';
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Smartphone } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-royal-green-dark text-white/80 border-t border-white/10">
      {/* Newsletter Row */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                Join our weekly newsletter
              </h3>
              <p className="text-white/60 text-sm">
                Get mindful tips, exclusive meditation tracks, and event updates
                delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-soft-gold/50 focus:ring-1 focus:ring-soft-gold/30 transition-all" />
                  
                </div>
                <button className="bg-soft-gold hover:bg-soft-gold-light text-royal-green font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <span className="font-poppins font-bold text-2xl text-white tracking-wide flex items-center gap-2 mb-6">
              <span className="text-soft-gold">✧</span> SoulStream
            </span>
            <p className="text-sm leading-relaxed mb-8 max-w-sm text-white/60">
              Your premium digital sanctuary for guided meditations, spiritual
              talks, and live healing sessions.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                <Smartphone className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider font-medium leading-none mb-1">
                    Download on the
                  </div>
                  <div className="text-sm text-white font-semibold leading-none">
                    App Store
                  </div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.165-.154-.276-.382-.276-.643V2.457c0-.261.111-.489.275-.643zm10.89 10.89l2.556 2.556-4.99 2.87-2.556-2.555 4.99-2.871zm3.264 3.264l2.87 1.65c.677.39.677 1.025 0 1.414l-2.87 1.65-3.264-3.264 3.264-3.264zm-8.254-8.254l2.555-2.556 4.99 2.87-2.555 2.556-4.99-2.87z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider font-medium leading-none mb-1">
                    Get it on
                  </div>
                  <div className="text-sm text-white font-semibold leading-none">
                    Google Play
                  </div>
                </div>
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-gold hover:text-royal-green transition-colors duration-300">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-gold hover:text-royal-green transition-colors duration-300">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-gold hover:text-royal-green transition-colors duration-300">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-soft-gold hover:text-royal-green transition-colors duration-300">
                
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Platform
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Video Library
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Live Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-6 uppercase tracking-wider text-sm">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-soft-gold transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} SoulStream. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Designed with <span className="text-soft-gold">♥</span> for inner
            peace
          </p>
        </div>
      </div>
    </footer>);

}