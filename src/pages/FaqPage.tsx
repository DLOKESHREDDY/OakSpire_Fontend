import React, { useEffect, useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FaqPage: React.FC = () => {
  useEffect(() => {
    document.title = 'FAQ | Oakspire Tek';
  }, []);

  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs: FaqItem[] = [
    {
      question: "How does the staffing process work?",
      answer: "Our staffing process begins with understanding your skills and career goals. We then match you with suitable job opportunities, prepare you for interviews, and support you throughout the hiring process. Once you receive an offer, we help you with all necessary documentation and onboarding requirements.",
      category: "Staffing"
    },
    {
      question: "What types of positions do you recruit for?",
      answer: "We specialize in technical roles including Data Scientists, Data Analysts, Cloud Engineers, AWS Engineers, Java Developers, Python Developers, BI Engineers, and Full Stack Developers. We also support other IT and technology positions based on market demand and client requirements.",
      category: "Staffing"
    },
    {
      question: "How long does the placement process typically take?",
      answer: "The placement timeline varies depending on your skills, experience, and the current job market. Some candidates are placed within weeks, while others may take a few months. Our goal is to find not just any job, but the right fit for your career goals and skills.",
      category: "Placement"
    },
    {
      question: "What kind of training do you provide?",
      answer: "We offer customized training programs that focus on both technical skills and soft skills. Our technical training covers in-demand technologies and tools relevant to your career path. Additionally, we provide interview preparation, resume building, and career guidance.",
      category: "Training"
    },
    {
      question: "Is there a fee for your services?",
      answer: "Our services for job seekers are typically provided at no cost. We work on a placement model where our client companies pay us for successful placements. However, some specialized training programs may have associated fees, which would be clearly communicated upfront.",
      category: "General"
    },
    {
      question: "Can you help with resume writing?",
      answer: "Yes, we offer comprehensive resume optimization services. Our experts will help you craft a resume that highlights your skills and experiences effectively, making you stand out to potential employers. We focus on creating ATS-friendly resumes that get past automated screening systems.",
      category: "Services"
    },
    {
      question: "Do you offer remote job opportunities?",
      answer: "Yes, we work with companies that offer remote, hybrid, and on-site positions. During our initial consultation, we'll discuss your preferences regarding work arrangements and focus on opportunities that match your needs.",
      category: "Placement"
    },
    {
      question: "What geographic areas do you serve?",
      answer: "While our physical office is located in Herndon, VA, we place candidates across the United States. We have strong relationships with companies nationwide and can support job seekers regardless of their location within the US.",
      category: "General"
    },
    {
      question: "How do I start the process with Oakspire Tek?",
      answer: "Getting started is simple. You can contact us through our website, email, or phone. We'll schedule an initial consultation to understand your background, skills, and career goals. From there, we'll develop a personalized plan to help you achieve your career objectives.",
      category: "Getting Started"
    },
    {
      question: "What makes Oakspire Tek different from other staffing agencies?",
      answer: "We differentiate ourselves through our people-first approach. Instead of just matching keywords on resumes, we take the time to understand both candidates and companies at a deeper level. We provide comprehensive support including training, resume optimization, and career guidance. Our success is measured by long-term placements and career growth, not just filling positions.",
      category: "General"
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const toggleItem = (index: number) => {
    setOpenItems(prevState => 
      prevState.includes(index)
        ? prevState.filter(item => item !== index)
        : [...prevState, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Header */}
      <div className="pt-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <AnimateOnScroll animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Find answers to common questions about our services, process, and how we can help advance your career.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-96">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-indigo-50 to-pink-50 text-indigo-700 font-medium'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container-custom">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg">
              <p className="text-gray-600">No matching questions found. Try a different search term or category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AnimateOnScroll key={index} animation="fade-in" delay={index * 50}>
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-500 transition-colors">
                    <button
                      className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                      onClick={() => toggleItem(index)}
                    >
                      <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                      <span className="text-indigo-600 ml-2">
                        {openItems.includes(index) ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        openItems.includes(index) ? 'max-h-96 pb-6' : 'max-h-0'
                      }`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-pink-50 text-indigo-700 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 py-16">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                We're here to help. Reach out to our team for personalized assistance with any questions or concerns.
              </p>
              <a 
                href="/contact" 
                className="btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8"
              >
                Contact Us
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default FaqPage;