import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="block">Connecting Great</span>
            <span className="block text-pink-300">Talent with Opportunity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We're a staffing and recruiting company that puts humans first. Whether you're seeking talent or your next career move, we're here to make meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="btn bg-pink-600 hover:bg-pink-700 text-white">
              Get Started
            </Link>
            <Link to="/services" className="btn bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
              Explore Our Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute -top-16 w-full h-16 text-white fill-current"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path d="M0 0L1440 0L1440 54C1440 54 1088 24.5 720 24.5C352 24.5 0 54 0 54L0 0Z" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;