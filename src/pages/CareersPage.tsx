import React, { useEffect, useState } from 'react';
import { Database, LineChart, Cloud, FileCode, Search, Briefcase } from 'lucide-react';
import AnimateOnScroll from '../components/utils/AnimateOnScroll';

interface JobCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  roles: JobRole[];
}

interface JobRole {
  id: number;
  title: string;
  description: string;
  requirements: string[];
}

const CareersPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Career Opportunities | Oakspire Tek';
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState('');

  const jobCategories: JobCategory[] = [
    {
      id: 1,
      title: 'Data Science',
      icon: <Database size={24} />,
      description: 'Data science roles focus on extracting insights from complex data sets to solve business problems.',
      roles: [
        {
          id: 101,
          title: 'Data Scientist',
          description: 'Analyze and interpret complex digital data to assist in decision-making and strategic planning.',
          requirements: [
            'Master\'s degree or PhD in Data Science, Statistics, or related field',
            'Experience with Python, R, SQL, and data visualization tools',
            'Strong analytical and problem-solving skills',
            'Knowledge of machine learning algorithms'
          ]
        },
        {
          id: 102,
          title: 'Data Analyst',
          description: 'Collect, process, and perform analysis on large datasets to identify patterns and trends.',
          requirements: [
            'Bachelor\'s degree in Analytics, Mathematics, or related field',
            'Proficiency in SQL and Excel',
            'Experience with data visualization tools like Tableau or Power BI',
            'Strong attention to detail and analytical thinking'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Cloud Engineering',
      icon: <Cloud size={24} />,
      description: 'Cloud engineering positions focus on building and maintaining cloud infrastructure and services.',
      roles: [
        {
          id: 201,
          title: 'Cloud Engineer',
          description: 'Design, implement, and manage cloud-based systems and infrastructure.',
          requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            'Certification in major cloud platforms (AWS, Azure, GCP)',
            'Experience with infrastructure as code (IaC) tools',
            'Knowledge of containerization and orchestration'
          ]
        },
        {
          id: 202,
          title: 'AWS Engineer',
          description: 'Specialize in Amazon Web Services to design, implement, and maintain scalable cloud solutions.',
          requirements: [
            'AWS Certified Solutions Architect or equivalent certification',
            'Experience with AWS services like EC2, S3, Lambda, RDS',
            'Knowledge of networking concepts and security best practices',
            'Scripting skills in Python, Shell, or similar'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Software Development',
      icon: <FileCode size={24} />,
      description: 'Software development roles involve designing, coding, and testing software applications and systems.',
      roles: [
        {
          id: 301,
          title: 'Java Developer',
          description: 'Design and implement Java-based applications and ensure their reliability and performance.',
          requirements: [
            'Bachelor\'s degree in Computer Science or equivalent',
            'Strong experience with Java and related frameworks (Spring, Hibernate)',
            'Knowledge of SQL and database design',
            'Experience with web services and RESTful APIs'
          ]
        },
        {
          id: 302,
          title: 'Python Developer',
          description: 'Develop, test, and implement Python applications, scripts, and systems.',
          requirements: [
            'Experience with Python and related libraries/frameworks',
            'Understanding of OOP principles and design patterns',
            'Knowledge of web frameworks like Django or Flask',
            'Experience with database technologies'
          ]
        },
        {
          id: 303,
          title: 'Full Stack Developer',
          description: 'Work on both front-end and back-end development, creating complete web applications.',
          requirements: [
            'Proficiency in JavaScript/TypeScript and modern frameworks',
            'Experience with back-end technologies (Node.js, Python, Java)',
            'Knowledge of database systems and API development',
            'Understanding of front-end technologies and UI/UX principles'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Business Intelligence',
      icon: <LineChart size={24} />,
      description: 'Business intelligence roles involve transforming data into actionable insights for business decision-making.',
      roles: [
        {
          id: 401,
          title: 'BI Engineer',
          description: 'Design, develop, and maintain BI solutions to transform data into actionable insights.',
          requirements: [
            'Bachelor\'s degree in Computer Science, Business, or related field',
            'Experience with BI tools like Power BI, Tableau, or QlikView',
            'Strong SQL skills and knowledge of data warehousing concepts',
            'Understanding of ETL processes and data modeling'
          ]
        }
      ]
    }
  ];

  const filteredCategories = jobCategories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.roles.some(role => 
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      {/* Header */}
      <div className="pt-24 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 text-white">
        <div className="container-custom py-16 md:py-24">
          <AnimateOnScroll animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Discover the pathways we assist through training and placement. With a decade of expertise, we excel at matching job seekers with the perfect positions.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto flex-grow max-w-xl">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search career paths or roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 self-end">
              <Briefcase size={18} />
              <span>{jobCategories.reduce((acc, cat) => acc + cat.roles.length, 0)} roles available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Categories Sidebar */}
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">Career Categories</h2>
              <div className="space-y-2">
                {jobCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg flex items-center transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-indigo-50 to-pink-50 text-indigo-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-3">{category.icon}</span>
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Jobs List */}
            <div className="md:col-span-8 lg:col-span-9">
              <AnimateOnScroll animation="slide-up">
                {searchTerm ? (
                  <>
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                      Search Results: "{searchTerm}"
                    </h2>
                    {filteredCategories.length === 0 ? (
                      <div className="text-center py-12 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg">
                        <p className="text-gray-600">No results found. Try a different search term.</p>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        {filteredCategories.map((category) => (
                          <div key={category.id} className="space-y-4">
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">{category.title}</h3>
                            {category.roles
                              .filter(role => 
                                role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                role.description.toLowerCase().includes(searchTerm.toLowerCase())
                              )
                              .map((role) => (
                                <div key={role.id} className="card p-6 border border-gray-200 hover:border-indigo-500 transition-colors">
                                  <h4 className="text-lg font-bold text-indigo-700 mb-2">{role.title}</h4>
                                  <p className="text-gray-600 mb-4">{role.description}</p>
                                  <div>
                                    <h5 className="font-semibold text-gray-800 mb-2">Requirements:</h5>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                      {role.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : selectedCategory ? (
                  <>
                    {jobCategories
                      .filter((category) => category.id === selectedCategory)
                      .map((category) => (
                        <div key={category.id}>
                          <div className="flex items-center mb-6">
                            <div className="p-2 bg-gradient-to-br from-indigo-100 to-pink-50 text-indigo-600 rounded-lg mr-3">
                              {category.icon}
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">{category.title}</h2>
                          </div>
                          <p className="text-gray-700 mb-8">{category.description}</p>
                          
                          <div className="space-y-6">
                            {category.roles.map((role) => (
                              <div key={role.id} className="card p-6 border border-gray-200 hover:border-indigo-500 transition-colors">
                                <h3 className="text-xl font-bold text-indigo-700 mb-3">{role.title}</h3>
                                <p className="text-gray-600 mb-4">{role.description}</p>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    {role.requirements.map((req, i) => (
                                      <li key={i}>{req}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </>
                ) : (
                  <div className="text-center py-12 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-lg">
                    <p className="text-gray-600">Please select a category to view available roles.</p>
                  </div>
                )}
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-900 py-16">
        <div className="container-custom">
          <AnimateOnScroll animation="fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Don't See What You're Looking For?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                We're always looking for talented professionals across various tech domains. Reach out to us to discuss how we can help you find your ideal role.
              </p>
              <a 
                href="/contact" 
                className="btn bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8"
              >
                Contact Our Team
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default CareersPage;