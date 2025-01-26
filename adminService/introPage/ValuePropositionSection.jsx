import React from 'react';
import { Target, Shield, Rocket, Store, MessageSquare, TrendingUp } from 'lucide-react';

const ValuePropositionSection = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Laser Targeted, Distraction Free",
      description: "Experience authentic human interaction without artificial elements, focusing purely on meaningful attention and engagement.",
      image: "/images/m1.jpg"
    },
    {
      icon: <Shield size={32} />,
      title: "No Spam. No Bots. No Impersonators",
      description: "Advanced AI-powered ID verification ensures all interactions are genuine, creating a trusted environment for real connections.",
      image: "/images/m2.jpg"
    },
    {
      icon: <Store size={32} />,
      title: "Inherent Social Commerce",
      description: "Launch your digital marketplace instantly with built-in community-driven marketing tools and seamless social integration.",
      image: "/images/m3.jpg"
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Revolutionary DM Experience",
      description: "Transform cold DMs into valuable opportunities through our unique auction-based messaging system.",
      image: "/images/m4.jpg"
    },
    {
      icon: <Rocket size={32} />,
      title: "Made in Europe, Made for the World",
      description: "Enjoy a seamless social experience without compromising personal information, built with European privacy standards.",
      image: "/images/m5.jpg"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Recipe for Exponential Growth",
      description: "Our community-driven algorithm naturally amplifies content virality, helping your influence grow organically.",
      image: "/images/m6.jpg"
    }
  ];

  return (
    <section className="section bg-gray-900/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">What Sets Us Apart</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Data protection, Artificial Intelligence, Ad-Less Community Marketing, and Advanced Authentication are just the beginning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="card card-hover overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    {value.icon}
                  </div>
                  <h3 className="h3">{value.title}</h3>
                </div>
                <p className="text-white/80">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;