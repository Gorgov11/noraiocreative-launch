import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Search, BookOpen, Lightbulb, Brain, Code, DataObject, TrendingUp, Security } from 'lucide-react';
import MaterialIcon from '@/components/MaterialIcon';

const AITerminologies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Terms', icon: 'all_inclusive' },
    { id: 'fundamentals', name: 'AI Fundamentals', icon: 'psychology' },
    { id: 'machine-learning', name: 'Machine Learning', icon: 'smart_toy' },
    { id: 'deep-learning', name: 'Deep Learning', icon: 'layers' },
    { id: 'nlp', name: 'Natural Language Processing', icon: 'chat' },
    { id: 'computer-vision', name: 'Computer Vision', icon: 'visibility' },
    { id: 'automation', name: 'Automation', icon: 'settings' },
    { id: 'data', name: 'Data Science', icon: 'analytics' },
    { id: 'business', name: 'Business AI', icon: 'business' }
  ];

  const terminologies = [
    // AI Fundamentals
    {
      term: "Artificial Intelligence (AI)",
      definition: "The simulation of human intelligence in machines that are programmed to think and learn like humans. AI encompasses machine learning, natural language processing, computer vision, and other technologies.",
      category: "fundamentals",
      examples: ["ChatGPT", "Siri", "Autonomous vehicles", "Medical diagnosis systems"]
    },
    {
      term: "Machine Learning (ML)",
      definition: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed. ML algorithms build mathematical models based on training data to make predictions or decisions.",
      category: "machine-learning",
      examples: ["Email spam detection", "Recommendation systems", "Fraud detection", "Image recognition"]
    },
    {
      term: "Deep Learning",
      definition: "A subset of machine learning that uses artificial neural networks with multiple layers (deep networks) to model and understand complex patterns in data. It's inspired by the structure and function of the human brain.",
      category: "deep-learning",
      examples: ["Image classification", "Speech recognition", "Language translation", "Autonomous driving"]
    },
    {
      term: "Neural Network",
      definition: "A computing system inspired by biological neural networks. It consists of interconnected nodes (neurons) that process information by passing signals between layers, enabling pattern recognition and decision-making.",
      category: "deep-learning",
      examples: ["Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN)", "Transformer networks", "Generative Adversarial Networks (GAN)"]
    },
    {
      term: "Algorithm",
      definition: "A set of rules or instructions given to an AI system to help it learn and make decisions. Algorithms are the mathematical formulas that power machine learning models.",
      category: "fundamentals",
      examples: ["Linear regression", "Decision trees", "Random forest", "Support vector machines"]
    },

    // Natural Language Processing
    {
      term: "Natural Language Processing (NLP)",
      definition: "A branch of AI that focuses on the interaction between computers and humans through natural language. It enables computers to understand, interpret, and generate human language in a valuable way.",
      category: "nlp",
      examples: ["Chatbots", "Language translation", "Sentiment analysis", "Text summarization"]
    },
    {
      term: "Large Language Model (LLM)",
      definition: "A type of AI model trained on vast amounts of text data to understand and generate human-like text. These models can perform various language tasks including translation, summarization, and conversation.",
      category: "nlp",
      examples: ["GPT-4", "BERT", "T5", "PaLM"]
    },
    {
      term: "Tokenization",
      definition: "The process of breaking down text into smaller units (tokens) such as words, subwords, or characters. This is a crucial preprocessing step in NLP that helps models understand text structure.",
      category: "nlp",
      examples: ["Word tokenization", "Subword tokenization", "Character tokenization", "Sentence tokenization"]
    },
    {
      term: "Sentiment Analysis",
      definition: "The use of NLP and text analysis to identify and extract subjective information from text, such as opinions, emotions, and attitudes. It helps understand the emotional tone behind written communication.",
      category: "nlp",
      examples: ["Social media monitoring", "Customer feedback analysis", "Brand reputation tracking", "Market research"]
    },

    // Computer Vision
    {
      term: "Computer Vision",
      definition: "A field of AI that enables computers to interpret and understand visual information from the world. It involves methods for acquiring, processing, analyzing, and understanding digital images and videos.",
      category: "computer-vision",
      examples: ["Facial recognition", "Medical imaging", "Autonomous vehicles", "Quality control in manufacturing"]
    },
    {
      term: "Image Recognition",
      definition: "The ability of AI systems to identify and classify objects, people, places, and actions in images. It's a core component of computer vision that enables visual understanding.",
      category: "computer-vision",
      examples: ["Photo tagging", "Medical diagnosis", "Security surveillance", "Retail inventory management"]
    },
    {
      term: "Object Detection",
      definition: "A computer vision technique that identifies and locates objects within an image or video. It not only classifies what objects are present but also determines their precise location and boundaries.",
      category: "computer-vision",
      examples: ["Autonomous driving", "Security systems", "Retail analytics", "Sports analysis"]
    },

    // Machine Learning Types
    {
      term: "Supervised Learning",
      definition: "A type of machine learning where algorithms learn from labeled training data to make predictions or decisions. The model is trained on input-output pairs to learn the mapping between inputs and outputs.",
      category: "machine-learning",
      examples: ["Email spam classification", "House price prediction", "Medical diagnosis", "Image classification"]
    },
    {
      term: "Unsupervised Learning",
      definition: "A type of machine learning that finds hidden patterns in data without labeled examples. The algorithm explores data to identify structures and relationships on its own.",
      category: "machine-learning",
      examples: ["Customer segmentation", "Anomaly detection", "Data compression", "Market basket analysis"]
    },
    {
      term: "Reinforcement Learning",
      definition: "A type of machine learning where an agent learns to make decisions by performing actions in an environment and receiving rewards or penalties. It learns through trial and error to maximize cumulative reward.",
      category: "machine-learning",
      examples: ["Game playing (AlphaGo)", "Robotics", "Trading algorithms", "Autonomous vehicles"]
    },

    // Data and Training
    {
      term: "Training Data",
      definition: "The dataset used to train a machine learning model. It consists of input examples and their corresponding correct outputs, which the model uses to learn patterns and relationships.",
      category: "data",
      examples: ["Labeled images", "Historical sales data", "Customer behavior records", "Medical records"]
    },
    {
      term: "Feature Engineering",
      definition: "The process of selecting, modifying, or creating input variables (features) that are most relevant for machine learning models. Good features can significantly improve model performance.",
      category: "data",
      examples: ["Creating age groups", "Calculating ratios", "Time-based features", "Text preprocessing"]
    },
    {
      term: "Overfitting",
      definition: "A common problem in machine learning where a model learns the training data too well, including noise and irrelevant patterns. This leads to poor performance on new, unseen data.",
      category: "machine-learning",
      examples: ["Memorizing training examples", "High training accuracy but low test accuracy", "Model too complex for the data", "Insufficient regularization"]
    },
    {
      term: "Cross-Validation",
      definition: "A technique used to assess how well a machine learning model will generalize to new data. It involves splitting the data into multiple subsets and training/testing the model on different combinations.",
      category: "data",
      examples: ["K-fold cross-validation", "Leave-one-out validation", "Time series validation", "Stratified sampling"]
    },

    // Automation and Business AI
    {
      term: "Robotic Process Automation (RPA)",
      definition: "A technology that uses software robots to automate repetitive, rule-based tasks that were previously performed by humans. RPA mimics human interactions with digital systems.",
      category: "automation",
      examples: ["Data entry", "Invoice processing", "Report generation", "Email automation"]
    },
    {
      term: "Intelligent Automation",
      definition: "The combination of RPA with AI technologies like machine learning and natural language processing to create more sophisticated automation that can handle complex, decision-based tasks.",
      category: "automation",
      examples: ["Document understanding", "Customer service automation", "Predictive maintenance", "Smart contract processing"]
    },
    {
      term: "Business Intelligence (BI)",
      definition: "The use of AI and data analytics to transform raw business data into meaningful insights that support better decision-making. It combines data mining, visualization, and reporting.",
      category: "business",
      examples: ["Sales dashboards", "Performance metrics", "Trend analysis", "Predictive forecasting"]
    },
    {
      term: "Predictive Analytics",
      definition: "The use of statistical techniques and machine learning to analyze current and historical data to make predictions about future events. It helps businesses anticipate trends and behaviors.",
      category: "business",
      examples: ["Customer churn prediction", "Demand forecasting", "Risk assessment", "Maintenance scheduling"]
    },

    // AI Ethics and Governance
    {
      term: "AI Ethics",
      definition: "The study of moral issues and implications of artificial intelligence. It addresses concerns about fairness, transparency, accountability, and the impact of AI on society.",
      category: "fundamentals",
      examples: ["Algorithmic bias", "Privacy protection", "Transparency in decision-making", "Human-AI collaboration"]
    },
    {
      term: "Algorithmic Bias",
      definition: "Systematic and unfair discrimination in AI systems that can perpetuate or amplify existing biases in society. It occurs when AI models produce prejudiced results due to biased training data or flawed algorithms.",
      category: "fundamentals",
      examples: ["Gender bias in hiring", "Racial bias in facial recognition", "Age discrimination", "Socioeconomic bias"]
    },
    {
      term: "Explainable AI (XAI)",
      definition: "A set of processes and methods that allows human users to comprehend and trust the results and output created by machine learning algorithms. It aims to make AI decisions transparent and interpretable.",
      category: "fundamentals",
      examples: ["Model interpretability", "Decision explanations", "Feature importance", "Confidence scores"]
    },

    // Advanced AI Concepts
    {
      term: "Generative AI",
      definition: "AI systems that can generate new content, such as text, images, music, or code, based on patterns learned from training data. These models can create original, creative outputs.",
      category: "fundamentals",
      examples: ["ChatGPT", "DALL-E", "Midjourney", "GitHub Copilot"]
    },
    {
      term: "Transfer Learning",
      definition: "A machine learning technique where a model trained on one task is reused as the starting point for a model on a second task. It leverages knowledge from one domain to improve performance in another.",
      category: "machine-learning",
      examples: ["Pre-trained language models", "Image classification transfer", "Domain adaptation", "Few-shot learning"]
    },
    {
      term: "Edge AI",
      definition: "The deployment of AI algorithms directly on edge devices (like smartphones, IoT devices, or sensors) rather than in centralized cloud servers. This enables real-time processing and reduced latency.",
      category: "fundamentals",
      examples: ["Mobile AI apps", "IoT sensors", "Autonomous vehicles", "Smart cameras"]
    },
    {
      term: "AI Model",
      definition: "A mathematical representation of a real-world process created using machine learning algorithms. It's trained on data to make predictions or decisions without being explicitly programmed for the task.",
      category: "fundamentals",
      examples: ["Linear regression model", "Neural network", "Decision tree", "Support vector machine"]
    }
  ];

  const filteredTerminologies = terminologies.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : 'help';
  };

  const getCategoryColor = (categoryId: string) => {
    const colors = {
      'fundamentals': 'bg-blue-100 text-blue-800',
      'machine-learning': 'bg-green-100 text-green-800',
      'deep-learning': 'bg-purple-100 text-purple-800',
      'nlp': 'bg-orange-100 text-orange-800',
      'computer-vision': 'bg-pink-100 text-pink-800',
      'automation': 'bg-indigo-100 text-indigo-800',
      'data': 'bg-yellow-100 text-yellow-800',
      'business': 'bg-red-100 text-red-800'
    };
    return colors[categoryId as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
              <span className="text-sm font-medium text-blue-800">AI Terminologies</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master the language of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive glossary of AI terms, concepts, and technologies to help you navigate the world of artificial intelligence with confidence.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI terminologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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

      {/* Terminologies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'all' ? 'All AI Terminologies' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {filteredTerminologies.length} terms found
              </p>
            </div>

            <div className="grid gap-6">
              {filteredTerminologies.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{term.term}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(term.category)}`}>
                          {categories.find(c => c.id === term.category)?.name}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg mb-4">
                        {term.definition}
                      </p>
                    </div>
                    <MaterialIcon 
                      name={getCategoryIcon(term.category)} 
                      size={24} 
                      className="text-gray-400 ml-4 flex-shrink-0" 
                    />
                  </div>
                  
                  {term.examples && term.examples.length > 0 && (
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Examples:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {term.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredTerminologies.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No terms found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to implement AI in your business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Understanding AI terminologies is just the beginning. Let our experts help you apply these concepts to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 group"
              >
                Get Expert Consultation
                <MaterialIcon name="arrow_forward" size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/academy"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 group"
              >
                Explore NorAio Academy
                <MaterialIcon name="school" size={20} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITerminologies;

