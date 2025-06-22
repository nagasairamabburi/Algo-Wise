import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Search, Users, ArrowLeft, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = {
  personamatch: {
    name: 'PersonaMatch',
    icon: <Users className="w-12 h-12 text-blue-400" />,
    description: `PersonaMatch is a dating app that fosters meaningful connections by focusing on personalities, interests, and shared values rather than appearances. Using advanced algorithms, it matches users based on their bio, answers to engaging questions, and selected interests.`,
    features: [
      'Photo-free profiles to eliminate superficial biases',
      'Daily match suggestions based on shared interests',
      'Mutual like system for equal-footing interactions',
      'Personalized conversation starters for effortless communication',
      'Chat enabled post-match with secure JSON storage in MinIO'
    ],
    technologies: ['React.js', 'Node.js', 'Firebase Realtime Database', 'MinIO', 'Jaccard Similarity Algorithm'],
    useCase: `Ideal for individuals seeking genuine relationships, friendships, or shared passions. PersonaMatch creates a safe, inclusive environment for users to connect deeply through words and shared interests.`
  },
  metaseo: {
    name: 'MetaRise.ai',
    icon: <Search className="w-12 h-12 text-blue-400" />,
    description: `MetaRise.ai leverages cutting-edge AI to transform how websites optimize for search engines. By analyzing billions of data points and search patterns, it provides predictive SEO strategies that stay ahead of algorithm changes.`,
    features: [
      'Predictive keyword analysis',
      'Content optimization with AI',
      'Real-time SERP tracking',
      'Competitor analysis',
      'Automated content suggestions',
      'Technical SEO automation'
    ],
    technologies: ['AI', 'Big Data Analytics', 'Natural Language Generation', 'Predictive Modeling'],
    useCase: `Ideal for digital marketing agencies, content creators, and businesses looking to improve their online visibility. MetaSEO provides actionable insights and automated optimizations to boost search engine rankings and drive organic traffic.`
  },
  mentaura: {
    name: 'Mentaura AI',
    icon: <Brain className="w-12 h-12 text-blue-400" />,
    description: `Mentaura AI is our innovative mental health platform that combines artificial intelligence with psychological expertise to provide personalized mental wellness support and early intervention strategies.`,
    features: [
      '24/7 AI-powered emotional support',
      'Mood tracking and analysis',
      'Personalized coping strategies',
      'Crisis detection and intervention',
      'Integration with healthcare providers',
      'Anonymous support options'
    ],
    technologies: ['Deep Learning', 'Sentiment Analysis', 'Healthcare AI', 'Privacy-First Architecture'],
    useCase: `Essential for healthcare providers, organizations prioritizing employee wellness, and mental health professionals. Mentaura AI offers scalable, accessible mental health support while maintaining privacy and providing early intervention capabilities.`
  }
};

const founders = [
  {
    name: "Abburi Ram",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1743795574861-d0a6fcdabc1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D", // Placeholder until real image is provided
    bio: "A  tech enthusiast and entrepreneur, Abburi Ram is currently pursuing Electrical Engineering at IIT Hyderabad . With a strong background in AI, software development, and business strategy, he has delivered impactful solutions through internships and freelance projects. As CEO, Abburi Ram leads AlgoWise’s mission to solve real-world challenges using AI, with innovative products like PersonaMatch and Metarise.ai",
    social: {
      linkedin: "https://www.linkedin.com/in/abburi-ram-b5bbb6256/",
      twitter: "#",
      email: "ram.a@algo-wise.com"
    }
  },
  {
    name: "Sai Nishith",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1743794630119-6d028162730c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D", // Placeholder until real image is provided
    bio: "A strategic leader from JNTU Hyderabad, Sai Nishith specializes in operations, management, and scaling businesses. With hands-on experience in managing teams and delivering results, he ensures seamless execution of AlgoWise’s services and products, empowering the company to grow and deliver value to clients globally.",
    social: {
      linkedin: "https://www.linkedin.com/in/pavan-nishith-6657a8256/",
      twitter: "#",
      email: "sai.nishith@algo-wise.com"
    }
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Products
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-900/30 to-black/30 border border-blue-900/30 rounded-2xl p-8 backdrop-blur-sm mb-12"
        >
          <div className="flex items-center mb-6">
            {product.icon}
            <h1 className="text-4xl font-bold ml-4">{product.name}</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">{product.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900/30 border border-blue-400/30 rounded-full text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Use Case</h2>
            <p className="text-gray-300">{product.useCase}</p>
          </div>
        </motion.div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-900/50 to-black/50 border border-blue-900/50 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-48 h-48 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-blue-400 mb-4">{founder.role}</p>
                    <p className="text-gray-300 mb-4">{founder.bio}</p>
                    <div className="flex gap-4">
                      <a href={founder.social.linkedin} className="text-gray-400 hover:text-blue-400 transition">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={founder.social.twitter} className="text-gray-400 hover:text-blue-400 transition">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${founder.social.email}`} className="text-gray-400 hover:text-blue-400 transition">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;