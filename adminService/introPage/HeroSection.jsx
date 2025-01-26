import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
{/* Content */}
<div className="relative z-10 h-full">
  <div className="content-container h-full flex flex-col items-center justify-center text-center">
    {/* Brand */}
    <h1 className="text-gradient text-7xl sm:text-7xl mb-6">QUAAV</h1>
    
    {/* Tagline */}
    <p className="text-3xl sm:text-5xl text-white/80 mb-12">Live Your Dreams</p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6">
      <button 
        className="btn-primary px-8 py-3 text-lg"
        onClick={() => window.location.href = '/technical-docs'}
      >
        Technical Details
      </button>
      <button 
        className="btn px-8 py-3 text-lg"
        onClick={() => window.location.href = '/business-docs'}
      >
        Business Details
      </button>
    </div>
  </div>
</div>
    </section>
  );
};

export default HeroSection;