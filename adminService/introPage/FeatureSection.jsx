import React from 'react';
import { MessageSquare, Users, BookOpen, Shield } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "DM Marketplace",
      description: "Revolutionary auction-based messaging system creating high-value conversations and meaningful connections."
    },
    {
      icon: <Users size={32} />,
      title: "Attention Media",
      description: "Social platform that rewards genuine engagement and creativity through advanced attention metrics."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Communities & Courses",
      description: "Build thriving communities and deliver impactful courses with integrated monetization."
    },
    {
      icon: <Shield size={32} />,
      title: "Advanced Security",
      description: "Multi-layered identity verification ensuring authentic interactions and preventing fraud."
    }
  ];

  return (
    <section className="section bg-gray-900/30">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Platform Features</h2>
          <p className="subtitle max-w-2xl mx-auto">
            A comprehensive ecosystem designed for meaningful interactions and value creation
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card card-hover"
            >
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/10">
                    {feature.icon}
                  </div>
                  <h3 className="h3">{feature.title}</h3>
                </div>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;