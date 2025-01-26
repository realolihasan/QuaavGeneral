// BusinessSection.jsx
// Purpose: Highlight business value proposition and key metrics
// Layout:
// 1. Main value proposition with large stats/numbers
// 2. Business model highlights (DM Marketplace, Communities, etc)
// 3. Revenue streams visualization
// 4. Integration capabilities
// Uses existing Style.css classes for consistency

import React from 'react';
import { Coins, LineChart, Users, Lock } from 'lucide-react';

const BusinessSection = () => {
  const metrics = [
    {
      value: "100%",
      label: "Revenue Share",
      description: "Site owners keep all earnings from their communities and courses"
    },
    {
      value: "20%",
      label: "Platform Fee",
      description: "Only on DM marketplace transactions"
    },
    {
      value: "14 Days",
      label: "Free Trial",
      description: "For all new site creators"
    }
  ];

  const features = [
    {
      icon: <Coins size={32} />,
      title: "Multiple Revenue Streams",
      description: "Communities, courses, DM marketplace, and affiliate programs"
    },
    {
      icon: <LineChart size={32} />,
      title: "Growth Metrics",
      description: "Advanced analytics and attention tracking for content optimization"
    },
    {
      icon: <Users size={32} />,
      title: "Community-Driven",
      description: "Organic growth through community engagement and referrals"
    },
    {
      icon: <Lock size={32} />,
      title: "Secure Payments",
      description: "Integrated Stripe payments with automated revenue distribution"
    }
  ];

  return (
    <section className="section bg-gray-900/30">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Business Overview</h2>
          <p className="subtitle max-w-2xl mx-auto">
            A sustainable ecosystem designed for creators and communities
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="card card-hover text-center p-8">
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-xl font-semibold mb-2">{metric.label}</div>
              <p className="text-white/70">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Business Features */}
        <div className="grid-responsive">
          {features.map((feature, index) => (
            <div key={index} className="card card-hover">
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

export default BusinessSection;