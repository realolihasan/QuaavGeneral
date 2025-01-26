// adminService/introPage/Intro.jsx
import React from 'react';
import HeroSection from './HeroSection';
import ValuePropositionSection from './ValuePropositionSection';
import FeatureSection from './FeatureSection';
import TechnologySection from './TechnologySection';
import BusinessSection from './BusinessSection';
import ContactSection from './ContactSection';

const Intro = () => {
  return (
    <div className="min-h-screen bg-[#13151a]">
      <HeroSection />
      <ValuePropositionSection />
      <FeatureSection />
      <TechnologySection />
      <BusinessSection />
      <ContactSection />
    </div>
  );
};

export default Intro;