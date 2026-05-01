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
    <footer className="border-t bg-royal-green-dark text-white/80 border-white/10">
      {/* Newsletter Row */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="mb-2 text-2xl font-bold text-white font-poppins">
                Join our weekly newsletter
              </h3>
              <p className="text-sm text-white/60">
                Get mindful tips, exclusive meditation tracks, and event updates
                delivered straight to your inbox.
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}>
                
                <div className="relative">
                  <Mail className="absolute w-5 h-5 -translate-y-1/2 left-4 top-1/2 text-white/40" />
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
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <span className="flex items-center gap-2 mb-6 text-2xl font-bold tracking-wide text-white font-poppins">
              <span className="text-soft-gold">✧</span> Prefix
            </span>
            <p className="max-w-sm mb-8 text-sm leading-relaxed text-white/60">
              Your premium digital sanctuary for guided meditations, spiritual
              talks, and live healing sessions.
            </p>

            {/* App Store Badges */}
            {/* <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2.5 transition-colors">
                <Smartphone className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-white/60 uppercase tracking-wider font-medium leading-none mb-1">
                    Download on the
                  </div>
                  <div className="text-sm font-semibold leading-none text-white">
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
                  <div className="text-sm font-semibold leading-none text-white">
                    Google Play
                  </div>
                </div>
              </button>
            </div> */}

            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-white/5 hover:bg-soft-gold hover:text-royal-green">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-white/5 hover:bg-soft-gold hover:text-royal-green">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-white/5 hover:bg-soft-gold hover:text-royal-green">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full bg-white/5 hover:bg-soft-gold hover:text-royal-green">
                
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Platform
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Video Library
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Live Events
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Legal
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-soft-gold">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-white/10 md:flex-row text-white/50">
          <p>
            &copy; 2026 KreedX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}