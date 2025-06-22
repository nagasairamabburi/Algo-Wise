import { motion } from 'framer-motion';
import { Brain, Search, Users, Code, Sparkles, ArrowRight, Rocket, Bot, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'personamatch',
    name: 'PersonaMatch',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    shortDesc: 'AI-Powered Personality Analysis & Matching Platform',
    description: `PersonaMatch is our flagship AI platform that revolutionizes personality analysis and matching. Using advanced machine learning algorithms and natural language processing, it analyzes communication patterns, behavioral traits, and psychological indicators to create detailed personality profiles.`,
    technologies: ['Machine Learning', 'NLP', 'Behavioral Analytics', 'Neural Networks']
  },
  {
    id: 'metaseo',
    name: 'MetaRise.ai',
    icon: <Search className="w-8 h-8 text-blue-400" />,
    shortDesc: 'Next-Generation SEO Optimization Engine',
    description: `MetaRise.ai leverages cutting-edge AI to transform how websites optimize for search engines. By analyzing billions of data points and search patterns, it provides predictive SEO strategies that stay ahead of algorithm changes.`,
    technologies: ['AI', 'Big Data Analytics', 'Natural Language Generation', 'Predictive Modeling']
  },
  {
    id: 'mentaura',
    name: 'Mentaura AI',
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    shortDesc: 'AI-Driven Mental Health Support Platform',
    description: `Mentaura AI is our innovative mental health platform that combines artificial intelligence with psychological expertise to provide personalized mental wellness support and early intervention strategies.`,
    technologies: ['Deep Learning', 'Sentiment Analysis', 'Healthcare AI', 'Privacy-First Architecture']
  }
];

const upcomingProducts = [
  {
    name: 'QuantumAI',
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    description: 'Revolutionary quantum computing solutions for complex problem-solving.',
    status: 'In Development'
  },
  {
    name: 'CyberShield',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    description: 'Next-generation cybersecurity platform powered by advanced AI.',
    status: 'Coming Soon'
  },
  {
    name: 'AutoBot Pro',
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    description: 'Enterprise-grade automation platform for business processes.',
    status: 'Research Phase'
  }
];



const Products = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-gradient-text">
            Our Revolutionary Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future with AI and emerging technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 rounded-2xl p-6 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition group"
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-4">{product.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-blue-900/30 border border-blue-400/30 rounded-full text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={`/products/${product.id}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProducts.map((product, _index) => (
              <div
                key={product.name}
                className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-6"
              >
                {product.icon}
                <h3 className="text-xl font-semibold my-3">{product.name}</h3>
                <p className="text-gray-300 mb-3">{product.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                  <Rocket className="w-4 h-4 mr-2" />
                  {product.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Service-Based Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-6">
              <Code className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-gray-300">
                Tailored software solutions for enterprises with cutting-edge technology integration.
                Our expert team specializes in AI, blockchain, and cloud-native applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-xl p-6">
              <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation Consulting</h3>
              <p className="text-gray-300">
                Strategic technology consulting to transform businesses with AI and emerging tech.
                We help organizations navigate digital transformation and implement innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Products;