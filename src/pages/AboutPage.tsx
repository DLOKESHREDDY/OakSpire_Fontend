import React, { useEffect } from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Oakspire Tek';
  }, []);

  const teamMembers = [
    {
      name: "Satya Nadella",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 15 years of experience in tech recruiting, Satya founded Oakspire Tek with a vision to transform how companies and talent connect."
    },
    {
      name: "Priya Sharma",
      position: "Head of Talent Acquisition",
      image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Priya brings her expertise in talent acquisition to ensure the perfect match between candidates and companies."
    },
    {
      name: "Michael Johnson",
      position: "Technical Training Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Michael leads our skill development programs, bringing his background in education and technology to help candidates upskill effectively."
    },
    {
      name: "Sarah Chen",
      position: "Client Relations Manager",
      image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah works closely with our client companies to understand their needs and ensure successful, long-term placements."
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="pt-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <AnimateOnScroll animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Oakspire Tek</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              We're all about people — the talent behind every great team, and the passion behind every career move.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 2015, Oakspire Tek was born from a simple observation: traditional recruiting wasn't working well for either companies or candidates. Too many placements were based on keyword matching rather than true fit, resulting in high turnover and frustrated talent.
                  </p>
                  <p>
                    We set out to create a different kind of staffing and recruiting company—one that puts humans first. We take the time to understand not just the technical skills of our candidates, but their aspirations, work style, and values. Similarly, we dive deep with our client companies to understand their culture, challenges, and growth trajectory.
                  </p>
                  <p>
                    Today, Oakspire Tek has grown into a trusted partner for both top tech companies and talented professionals. Our approach has resulted in placement success rates well above industry averages and, more importantly, in careers and teams that thrive together.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-100 to-pink-50 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-50 rounded-lg z-0"></div>
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 md:py-24">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Our Mission & Values</h2>
              <p className="text-lg text-gray-600">
                At Oakspire Tek, our mission is to empower potential and deliver talent — not just resumes. We're guided by core values that prioritize people and long-term success.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimateOnScroll animation="slide-up" delay={0}>
              <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100 hover:border-indigo-500 transition-colors">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg inline-block mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">People-First Approach</h3>
                <p className="text-gray-600">
                  We prioritize understanding the unique needs, goals, and challenges of both candidates and companies to create meaningful connections.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={100}>
              <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100 hover:border-indigo-500 transition-colors">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg inline-block mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Precision Matching</h3>
                <p className="text-gray-600">
                  We believe in quality over quantity, taking the time to ensure each placement is a perfect fit for both candidate and company.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={200}>
              <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100 hover:border-indigo-500 transition-colors">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg inline-block mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence in Service</h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest standards of professionalism, communication, and integrity in every interaction.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={300}>
              <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100 hover:border-indigo-500 transition-colors">
                <div className="p-3 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg inline-block mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Continuous Growth</h3>
                <p className="text-gray-600">
                  We're dedicated to helping both candidates and companies grow and adapt in a rapidly evolving tech landscape.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                Our dedicated team of professionals brings years of experience in recruiting, training, and career development.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimateOnScroll key={index} animation="slide-up" delay={index * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group hover:border-indigo-500 transition-all">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you're looking for your next career move or seeking talent for your team, we're here to help.
            </p>
            <a 
              href="/contact" 
              className="btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-4"
            >
              Get in Touch
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default AboutPage;