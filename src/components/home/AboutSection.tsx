import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Medal, Clock, ArrowRight } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Oakspire Tek</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600">
              At Oakspire Tek, we're all about people — the talent behind every great team, and the passion behind every career move.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slide-right" delay={100}>
            <div className="bg-gradient-to-br from-indigo-600 to-pink-600 p-1 rounded-xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-gray-700 mb-4">
                    We empower potential and deliver talent — not just resumes. Our mission is to build futures, create opportunities, and help people thrive.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Users size={20} className="text-indigo-600 mr-2" />
                      <span>People-first approach to staffing</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Medal size={20} className="text-indigo-600 mr-2" />
                      <span>Excellence in candidate matching</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={20} className="text-indigo-600 mr-2" />
                      <span>Decade of industry expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-up" delay={200}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Who We Are</h3>
                <p className="text-gray-700">
                  We're a staffing and recruiting company that puts humans first. Whether you're a company looking for the right fit or a professional chasing your next opportunity, we're here to make those connections that spark growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">What We Do</h3>
                <p className="text-gray-700">
                  We take the time to understand who you are, what you need, and where you want to go. Because to us, it's not just about filling roles — it's about building futures, creating opportunity, and helping people thrive.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Our Approach</h3>
                <p className="text-gray-700 mb-6">
                  Let's grow together — one connection, one career, one success story at a time. We're committed to making meaningful matches that benefit both candidates and companies.
                </p>
                
                <Link to="/about" className="btn bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white inline-flex items-center">
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;