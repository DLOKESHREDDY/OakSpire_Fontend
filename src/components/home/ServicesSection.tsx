import React from 'react';
import { BookOpen, FileCheck, GraduationCap, Briefcase, FileText } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimateOnScroll animation="slide-up\" delay={delay} className="h-full">
      <div className="card h-full group hover:translate-y-[-5px] hover:border-indigo-500 border border-transparent">
        <div className="p-6 flex flex-col h-full">
          <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg inline-block mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 flex-grow">
            {description}
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <BookOpen size={24} />,
      title: "Career Guidance",
      description: "Access the guidance of career specialists who will lead you through our process. They'll clarify the process and offer strategic advice to assist you in effectively reaching your career objectives.",
    },
    {
      icon: <FileCheck size={24} />,
      title: "Enhanced Resume Crafting",
      description: "Your resume acts as your initial presentation to potential employers. Our Resume Optimization service is designed to meet the exacting requirements of the job market, guaranteeing you leave a remarkable first impression.",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Skill Development Program",
      description: "Our Technical Training & Guidance program is crafted to elevate your competencies and employment readiness, clearing the path for your desired career trajectory.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Enhance Your Career",
      description: "Boost Your Career Opportunities with Our Resume Marketing Services. In today's cutthroat job market, possessing an exceptional resume is paramount.",
    },
    {
      icon: <FileText size={24} />,
      title: "Expert Documentation Support",
      description: "Once you've secured employment, our dedicated team will aid you with all necessary paperwork, facilitating a seamless transition into your new position.",
    },
  ];

  return (
    <section id="services" className="section bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-lg text-gray-600">
              Explore the variety of services available to help you advance your career and find your perfect role.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;