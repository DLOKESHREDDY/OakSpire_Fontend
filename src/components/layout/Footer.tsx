import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Users size={24} className="text-primary-400" />
              <h3 className="text-xl font-bold">Oakspire Tek</h3>
            </div>
            <p className="text-gray-400 mb-4">
              We're a staffing and recruiting company that puts humans first. Our mission is to empower potential and deliver talent — not just resumes.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://linkedin.com" className="hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Career Guidance</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Resume Optimization</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Skill Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Job Placement</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Documentation Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  205 Van Buren Street<br />
                  Suite 120<br />
                  Herndon, VA 20170
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="mailto:satya@oakspiretek.com" className="text-gray-400 hover:text-primary-400 transition-colors">satya@oakspiretek.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <a href="tel:+17035854066" className="text-gray-400 hover:text-primary-400 transition-colors">+1 703-585-4066</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Oakspire Tek. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;