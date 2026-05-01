import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Library',
    href: '#library'
  },
  {
    name: 'Live Events',
    href: '#live-events'
  },
  {
    name: 'Pricing',
    href: '#pricing'
  },
  {
    name: 'About',
    href: '#about'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-royal-green/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="font-poppins font-bold text-2xl text-white tracking-wide flex items-center gap-2">
            
            <span className="text-soft-gold">✧</span> SoulStream
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-white/80 hover:text-soft-gold transition-colors font-medium text-sm">
            
              {link.name}
            </a>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-soft-gold font-medium text-sm transition-colors">
            
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-soft-gold hover:bg-soft-gold-light text-royal-green font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-glow hover:shadow-none text-sm">
            
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-soft-gold transition-colors">
            
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        className="md:hidden bg-royal-green border-t border-white/10">
        
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-3 text-base font-medium text-white/80 hover:text-soft-gold hover:bg-white/5 rounded-md">
            
                {link.name}
              </a>
          )}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left px-3 py-2 text-white font-medium">
              
                Log In
              </Link>
              <Link
              to="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-soft-gold text-royal-green font-semibold py-3 px-4 rounded-xl text-center">
              
                Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      }
    </motion.nav>);

}