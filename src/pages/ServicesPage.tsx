import React, { useEffect } from 'react';
import { Briefcase, BookOpen, GraduationCap, FileCheck, FileText } from 'lucide-react';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Oakspire Tek';
  }, []);

  const services = [
    {
      icon: <BookOpen size={32} />,
      title: "Career Guidance",
      description: "Access the guidance of career specialists who will lead you through the Oakspire Tek Process. They'll clarify the process and offer strategic advice to assist you in effectively reaching your career objectives.",
      points: [
        'One-on-one career counseling',
        'Industry-specific guidance',
        'Career path planning',
        'Interview preparation'
      ]
    },
    {
      icon: <FileCheck size={32} />,
      title: "Enhanced Resume Crafting",
      description: "Your resume acts as your initial presentation to potential employers. Our Resume Optimization service is intricately designed to meet the exacting requirements of the job market, guaranteeing you leave a remarkable first impression.",
      points: [
        'ATS-friendly formatting',
        'Keyword optimization',
        'Achievement highlighting',
        'Professional layout design'
      ]
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Skill Development Program",
      description: "Our Technical Training & Guidance program is crafted to elevate your competencies and employment readiness, clearing the path for your desired career trajectory. We provide comprehensive assistance, including customized training sessions, resume refinement workshops, mock interviews, and mentorship from experienced industry professionals.",
      points: [
        'Technical skills assessment',
        'Customized learning paths',
        'Hands-on project experience',
        'Industry-recognized certifications'
      ]
    },
    {
      icon: <Briefcase size={32} />,
      title: "Career Enhancement",
      description: "Boost Your Career Opportunities with Our Resume Marketing Services. In today's cutthroat job market, possessing an exceptional resume is paramount. Our Resume Marketing service concentrates on enhancing your resume to emphasize your distinct skills and backgrounds.",
      points: [
        'Strategic job application',
        'Interview coaching',
        'Salary negotiation support',
        'Follow-up strategies'
      ]
    },
    {
      icon: <FileText size={32} />,
      title: "Expert Documentation Support",
      description: "Once you've secured employment, our dedicated team will aid you with all necessary paperwork, facilitating a seamless transition into your new position.",
      points: [
        'Employment verification',
        'Background check assistance',
        'Tax documentation support',
        'Onboarding paperwork guidance'
      ]
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="pt-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <AnimateOnScroll animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Explore the variety of services available to help you advance your career and find your perfect role.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimateOnScroll key={index} animation="slide-up" className="relative">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12`}>
                  {/* Service Info */}
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <div className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full p-1 mt-1.5 mr-3">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-br from-indigo-500 to-pink-500 p-1 rounded-xl shadow-lg">
                      <img
                        src={`https://images.pexels.com/photos/${5000 + index}/pexels-photo-${5000 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                        alt={service.title}
                        className="w-full h-64 md:h-80 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Only add separator if not the last item */}
                {index < services.length - 1 && (
                  <div className="w-full max-w-xs mx-auto mt-16 border-t border-gray-200"></div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 py-16">
        <div className="container-custom text-center">
          <AnimateOnScroll animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our team today to discuss how we can help you achieve your career goals.
            </p>
            <a 
              href="/contact" 
              className="btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-4"
            >
              Get Started Today
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;