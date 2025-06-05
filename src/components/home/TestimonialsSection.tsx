import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Oakspire Tek helped me land my dream job as a Data Scientist. Their career guidance and training program were instrumental in preparing me for the technical interviews.",
    name: "Sarah Johnson",
    title: "Data Scientist",
    company: "Tech Innovations Inc."
  },
  {
    quote: "As an employer, I've been consistently impressed with the quality of candidates that Oakspire Tek has connected us with. They truly understand our company culture and technical needs.",
    name: "Michael Chen",
    title: "CTO",
    company: "CloudServe Solutions"
  },
  {
    quote: "The resume optimization service transformed my job search. Within weeks, I was getting calls for interviews at top tech companies that had previously ignored my applications.",
    name: "Priya Patel",
    title: "Full Stack Developer",
    company: "WebApp Global"
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Hear from the professionals and businesses we've helped connect.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <Quote size={48} className="absolute top-6 left-6 text-gray-200" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 pl-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].title}{testimonials[currentIndex].company ? `, ${testimonials[currentIndex].company}` : ''}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;