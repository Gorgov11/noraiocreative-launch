import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Play, BookOpen, Award, Users, Clock, Star, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import MaterialIcon from '@/components/MaterialIcon';

const Academy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: 'all_inclusive' },
    { id: 'fundamentals', name: 'AI Fundamentals', icon: 'psychology' },
    { id: 'business', name: 'Business AI', icon: 'business' },
    { id: 'technical', name: 'Technical', icon: 'code' },
    { id: 'certification', name: 'Certification', icon: 'school' }
  ];

  const courses = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence",
      description: "Learn the fundamentals of AI, machine learning, and how these technologies are transforming businesses worldwide.",
      category: "fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      price: "Free",
      image: "/api/placeholder/300/200",
      instructor: "Dr. Sarah Chen",
      lessons: 12,
      features: ["Self-paced learning", "Interactive exercises", "Certificate of completion", "Lifetime access"]
    },
    {
      id: 2,
      title: "AI for Business Leaders",
      description: "Strategic insights for executives and managers on implementing AI solutions in their organizations.",
      category: "business",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 890,
      price: "$299",
      image: "/api/placeholder/300/200",
      instructor: "Michael Rodriguez",
      lessons: 18,
      features: ["Case studies", "Executive insights", "ROI analysis", "Implementation guides"]
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Deep dive into machine learning algorithms, data preprocessing, and model evaluation techniques.",
      category: "technical",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 2100,
      price: "$499",
      image: "/api/placeholder/300/200",
      instructor: "Prof. Alex Kumar",
      lessons: 24,
      features: ["Hands-on projects", "Python programming", "Real datasets", "Peer collaboration"]
    },
    {
      id: 4,
      title: "AI Ethics and Governance",
      description: "Understanding the ethical implications of AI and developing responsible AI strategies for organizations.",
      category: "fundamentals",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 750,
      price: "Free",
      image: "/api/placeholder/300/200",
      instructor: "Dr. Emma Thompson",
      lessons: 9,
      features: ["Ethical frameworks", "Compliance guidelines", "Risk assessment", "Best practices"]
    },
    {
      id: 5,
      title: "Advanced AI Implementation",
      description: "Master advanced AI techniques including deep learning, NLP, and computer vision for enterprise applications.",
      category: "technical",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 450,
      price: "$799",
      image: "/api/placeholder/300/200",
      instructor: "Dr. James Wilson",
      lessons: 36,
      features: ["Advanced projects", "Industry mentorship", "Portfolio development", "Job placement support"]
    },
    {
      id: 6,
      title: "AI Strategy and Planning",
      description: "Learn to develop comprehensive AI strategies, assess readiness, and plan successful AI transformations.",
      category: "business",
      duration: "5 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 680,
      price: "$399",
      image: "/api/placeholder/300/200",
      instructor: "Lisa Park",
      lessons: 15,
      features: ["Strategic planning", "Readiness assessment", "Roadmap development", "Change management"]
    }
  ];

  const certifications = [
    {
      title: "Certified AI Practitioner",
      description: "Comprehensive certification covering AI fundamentals, implementation, and business applications.",
      duration: "6 months",
      level: "Professional",
      requirements: ["Complete 3 core courses", "Pass final examination", "Submit capstone project"],
      benefits: ["Industry recognition", "Career advancement", "Networking opportunities", "Continuing education credits"]
    },
    {
      title: "AI Business Strategist",
      description: "Advanced certification for business leaders focused on AI strategy, governance, and transformation.",
      duration: "4 months",
      level: "Executive",
      requirements: ["Complete 2 business courses", "Case study analysis", "Strategy presentation"],
      benefits: ["Executive credibility", "Strategic expertise", "Board-level insights", "Peer network access"]
    },
    {
      title: "AI Technical Specialist",
      description: "Deep technical certification for developers and engineers working with AI technologies.",
      duration: "8 months",
      level: "Technical",
      requirements: ["Complete 4 technical courses", "Build portfolio project", "Technical interview"],
      benefits: ["Technical mastery", "Industry expertise", "Career opportunities", "Skill validation"]
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'Professional': return 'bg-blue-100 text-blue-800';
      case 'Executive': return 'bg-purple-100 text-purple-800';
      case 'Technical': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Noraio Academy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master AI with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert-Led Courses
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Learn artificial intelligence from industry experts. Build practical skills, earn certifications, 
              and advance your career with our comprehensive AI education platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors group">
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <MaterialIcon 
                  name={category.icon} 
                  size={18} 
                  className={selectedCategory === category.id ? 'text-white' : 'text-gray-600'} 
                />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'all' ? 'All Courses' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredCourses.length} courses available
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Play className="w-16 h-16 text-blue-600" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-600">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.lessons} lessons</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                      <div className="text-sm text-gray-500">by {course.instructor}</div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {course.features.slice(0, 2).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors group">
                      Enroll Now
                      <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Earn industry-recognized certifications that validate your AI expertise and advance your career
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {cert.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {cert.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Duration: {cert.duration}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group">
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to start your AI journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are already transforming their careers with AI knowledge from Noraio Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/ai-terminologies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 group"
              >
                Explore AI Terms
                <BookOpen className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;

