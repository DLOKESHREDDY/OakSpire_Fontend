import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

const ContactCta: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pink-500 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Get in touch with our team today to discuss how we can help you find your perfect role or the ideal candidate.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a 
                href="mailto:satya@oakspiretek.com" 
                className="flex items-center justify-center px-6 py-3 bg-white text-indigo-800 font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
              <a 
                href="tel:+17035854066" 
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white backdrop-blur-sm font-medium rounded-md hover:bg-white/20 transition-colors duration-300"
              >
                <Phone className="mr-2" size={20} />
                +1 703-585-4066
              </a>
            </div>
            
            <Link 
              to="/contact" 
              className="btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4"
            >
              Contact Us Today
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactCta;