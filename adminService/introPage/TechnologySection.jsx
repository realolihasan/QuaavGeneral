// TechnologySection.jsx
import React from 'react';
import { Fingerprint, MessageSquare, Target, Database, Radio, Eye, Brain, Workflow, Zap } from 'lucide-react';

// VoiceWave Animation Component
const VoiceWaveAnimation = () => {
  return (
    <div className="flex items-center justify-center h-32 gap-1">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-indigo-500/50 rounded-full transform transition-all duration-300"
          style={{
            height: `${Math.sin((i / 12) * Math.PI) * 100}%`,
            animation: `wave ${1 + (i / 10)}s ease-in-out infinite alternate`
          }}
        />
      ))}
    </div>
  );
};

// Improved Balance Scale Animation
const MarketGraphAnimation = () => {
    return (
        <div className="h-64 relative flex items-center justify-center">
          {/* Center Pillar with More Depth */}
          <div className="absolute bottom-0 w-4 h-32 bg-gradient-to-b from-indigo-400/30 to-indigo-600/30 shadow-lg" />
          
          {/* Balance Beam with More Dynamic Movement */}
          <div 
            className="absolute w-64 h-2 bg-indigo-500 rounded-full transform origin-center"
            style={{ 
              animation: 'balanceScale 3s cubic-bezier(0.45, 0, 0.55, 1) infinite',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            {/* Left Scale - Supply */}
            <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-500/50 flex items-center justify-center bg-white/10 shadow-md">
                <span className="text-sm font-bold text-indigo-700">Supply</span>
              </div>
            </div>
            
            {/* Right Scale - Demand */}
            <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-indigo-500/50 flex items-center justify-center bg-white/10 shadow-md">
                <span className="text-sm font-bold text-indigo-700">Demand</span>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
const NetworkAnimation = () => {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <div className="relative w-96">
          {/* Level 1: Top Node */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0"
               style={{ animation: 'pyramidAppear 4s infinite 0s' }}>
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white">1</span>
            </div>
          </div>
  
          {/* Level 2: Two Nodes */}
          {[0, 1].map((i) => (
            <div 
              key={i} 
              className="absolute top-16 opacity-0"
              style={{ 
                left: `calc(50% + ${(i * 2 - 1) * 20}px)`, 
                animation: 'pyramidAppear 4s infinite 0.5s' 
              }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                <span className="text-xs">2</span>
              </div>
            </div>
          ))}
  
          {/* Level 3: Four Nodes */}
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="absolute top-32 opacity-0"
              style={{ 
                left: `calc(50% + ${(i * 2 - 3) * 20}px)`, 
                animation: 'pyramidAppear 4s infinite 1s' 
              }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-400 flex items-center justify-center">
                <span className="text-xs">4</span>
              </div>
            </div>
          ))}
  
          {/* Level 4: Eight Nodes */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div 
              key={i} 
              className="absolute top-48 opacity-0"
              style={{ 
                left: `calc(50% + ${(i * 2 - 7) * 20}px)`, 
                animation: 'pyramidAppear 4s infinite 1.5s' 
              }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-300 flex items-center justify-center">
                <span className="text-xs">8</span>
              </div>
            </div>
          ))}
  
          {/* Level 5: Sixteen Nodes */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
            <div 
              key={i} 
              className="absolute top-64 opacity-0"
              style={{ 
                left: `calc(50% + ${(i * 2 - 15) * 20}px)`, 
                animation: 'pyramidAppear 4s infinite 2s' 
              }}
            >
              <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                <span className="text-xs">16</span>
              </div>
            </div>
          ))}
  
          <style jsx global>{`
            @keyframes pyramidAppear {
              0%, 100% { opacity: 0; transform: scale(0.5); }
              50% { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      </div>
    );
  };



const TechnologySection = () => {
  const intellectualProperties = [
    {
      icon: <Fingerprint size={32} />,
      name: "Biometric VoiceID",
      description: "Our patented voice biometric system uses AI to create unique voice signatures, ensuring every user is genuine.",
      details: [
        "Dynamic voice pattern recognition",
        "Real-time liveness detection",
        "99.9% accuracy in verification"
      ],
      animation: <VoiceWaveAnimation />
    },
    {
      icon: <MessageSquare size={32} />,
      name: "DM Market",
      description: "Transforming unsolicited messages into valuable commodities through market-driven access control.",
      details: [
        "Auction-based messaging system",
        "Supply-demand valuation",
        "Transparent bidding process"
      ],
      animation: <MarketGraphAnimation />
    },
    {
      icon: <Target size={32} />,
      name: "QTG Algorithm",
      description: "Terminal guidance algorithm that optimizes content virality through exponential reposting mechanics.",
      details: [
        "Predictive virality scoring",
        "Dynamic reach optimization",
        "Community amplification factors"
      ],
      animation: <NetworkAnimation />
    }
  ];

  const coreStack = [
    {
      icon: <Database size={24} />,
      name: "MongoDB",
      description: "Scalable Database Solution"
    },
    {
      icon: <Workflow size={24} />,
      name: "Kafka",
      description: "Event-Driven Architecture"
    },
    {
      icon: <Zap size={24} />,
      name: "gRPC",
      description: "High-Performance Communication"
    },
    {
      icon: <Radio size={24} />,
      name: "WebSocket",
      description: "Real-time Bidirectional Communication"
    },
    {
      icon: <Eye size={24} />,
      name: "Computer Vision",
      description: "Advanced Image Processing & Analysis"
    },
    {
      icon: <Brain size={24} />,
      name: "AI & Machine Learning",
      description: "Smart Automation & Pattern Recognition"
    }
  ];

  return (
    <section className="section">
      <div className="content-container">
        {/* IP Section */}
        <div className="text-center mb-20">
          <h2 className="h2 mb-4">Intellectual Properties</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Our proprietary technologies that power the next generation of social interaction
          </p>
        </div>

        <div className="space-y-12 mb-24">
          {intellectualProperties.map((ip, index) => (
            <div 
              key={index}
              className="card card-hover p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-indigo-500/10">
                      {ip.icon}
                    </div>
                    <h3 className="h3">{ip.name}</h3>
                  </div>
                  <p className="text-white/80 text-lg mb-6">
                    {ip.description}
                  </p>
                  <ul className="space-y-3">
                    {ip.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  {ip.animation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Stack Section */}
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Core Technology Stack</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Enterprise-grade technologies powering our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStack.map((tech, index) => (
            <div 
              key={index}
              className="card card-hover p-6 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10">
                {tech.icon}
              </div>
              <div>
                <h4 className="font-semibold mb-1">{tech.name}</h4>
                <p className="text-white/70">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;