import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsBar } from '../components/StatsBar';
import { VideoLibrary } from '../components/VideoLibrary';
import { LiveEventsSection } from '../components/LiveEventsSection';
import { PricingPlans } from '../components/PricingPlans';
import { Testimonials } from '../components/Testimonials';
import { AboutSection } from '../components/AboutSection';
import { CTASection } from '../components/CTASection';
export function LandingPage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <VideoLibrary />
      <LiveEventsSection />
      <AboutSection />
      <PricingPlans />
      <Testimonials />
      <CTASection />
    </>);

}