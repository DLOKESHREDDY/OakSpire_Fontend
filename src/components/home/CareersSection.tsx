import React from 'react';
import { Link } from 'react-router-dom';
import { Database, LineChart, Cloud, FileCode } from 'lucide-react';
import AnimateOnScroll from '../utils/AnimateOnScroll';

interface CareerPathProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const CareerPath: React.FC<CareerPathProps> = ({ icon, title, delay }) => {
  return (
    <AnimateOnScroll animation="slide-up\" delay={delay}>
      <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 group">
        <div className="mr-4 text-gray-500 group-hover:text-primary-600 transition-colors duration-300">
          {icon}
        </div>
        <span className="font-medium text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </span>
      </div>
    </AnimateOnScroll>
  );
};

const CareersSection: React.FC = () => {
  const careerPaths = [
    { icon: <Database size={24} />, title: 'Data Scientist' },
    { icon: <LineChart size={24} />, title: 'Data Analyst' },
    { icon: <Cloud size={24} />, title: 'Cloud Engineer' },
    { icon: <Cloud size={24} />, title: 'AWS Engineer' },
    { icon: <FileCode size={24} />, title: 'Java Developer' },
    { icon: <FileCode size={24} />, title: 'Python Developer' },
    { icon: <LineChart size={24} />, title: 'BI Engineer' },
    { icon: <FileCode size={24} />, title: 'Full Stack Developer' },
  ];

  return (
    <section id="careers" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slide-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Job Pathways We Assist Through Training and Placement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Proudly possessing a decade of expertise in the Job Market, we stand out in aligning Job seekers with positions and companies that ideally match their unique backgrounds.
              </p>
              <Link to="/careers" className="btn btn-primary">
                View All Career Opportunities
              </Link>
            </div>
          </AnimateOnScroll>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerPaths.map((path, index) => (
                <CareerPath
                  key={index}
                  icon={path.icon}
                  title={path.title}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;