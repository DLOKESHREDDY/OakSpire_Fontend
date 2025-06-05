import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Oakspire Tek';
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true, error: false }));
    
    try {
      const response = await fetch('https://formspree.io/f/xnndrydn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          subject: formState.subject,
          message: formState.message
        })
      });

      if (response.ok) {
        setFormState(prev => ({
          ...prev,
          submitting: false,
          submitted: true,
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }));
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        submitting: false,
        error: true
      }));
    }
  };

  return (
    <>
      {/* Header */}
      <div className="pt-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <AnimateOnScroll animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Have questions or ready to get started? We'd love to hear from you. Reach out using any of the methods below.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll animation="slide-right">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you're looking for career guidance, recruiting assistance, or just want to learn more about our services, our team is here to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg mr-4 mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Office Location</h3>
                      <p className="text-gray-600">
                        205 Van Buren Street<br />
                        Suite 120<br />
                        Herndon, VA 20170
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg mr-4 mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:satya@oakspiretek.com" className="hover:text-indigo-600 transition-colors">
                          satya@oakspiretek.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg mr-4 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+17035854066" className="hover:text-indigo-600 transition-colors">
                          +1 703-585-4066
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 hover:from-indigo-200 hover:to-pink-100 text-indigo-600 rounded-lg transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a 
                      href="https://facebook.com" 
                      className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 hover:from-indigo-200 hover:to-pink-100 text-indigo-600 rounded-lg transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 hover:from-indigo-200 hover:to-pink-100 text-indigo-600 rounded-lg transition-colors"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:border-indigo-500 transition-colors">
                {formState.submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg\" width="32\" height="32\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round\" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                    <button
                      onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                      className="btn bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Send Us a Message</h2>
                    
                    {formState.error && (
                      <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
                        Something went wrong. Please try again later.
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formState.subject}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                          >
                            <option value="">Select a subject</option>
                            <option value="Career Guidance">Career Guidance</option>
                            <option value="Hiring Talent">Hiring Talent</option>
                            <option value="Training Programs">Training Programs</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={formState.submitting}
                        className={`btn w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white flex justify-center items-center ${
                          formState.submitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                      >
                        {formState.submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} className="ml-2" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 pb-16">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Our Location</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8981076130283!2d-77.3913904!3d38.966502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b647e86872e8e5%3A0x89e6eae0ad6bb350!2s205%20Van%20Buren%20St%20%23120%2C%20Herndon%2C%20VA%2020170!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oakspire Tek Office Location"
              ></iframe>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default ContactPage;