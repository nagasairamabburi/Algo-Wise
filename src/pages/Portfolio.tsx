import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoCarousel from '../components/LogoCarousel';
import PortfolioItem, { PortfolioItemProps } from '../components/PortfolioItem';

const portfolioItems: Omit<PortfolioItemProps, 'index'>[] = [
  {
    id: 1,
    title: "PersonaMatch",
    description: "Discover meaningful connections based on personality compatibility. Our intelligent matching algorithm ensures you meet people who truly resonate with you.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    websiteUrl: "https://algowisetechnologies.com/",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    year: 2025
  },
  {
    id: 2,
    title: "JuEdu",
    description: "JuEdu is an edtech platform designed to teach Artificial Intelligence (Al) in an engaging and practical manner. Catering to school students, graduates, and working professionals, our platform bridges the gap between traditional education and emerging technologies, equipping learners with Al skills through hands-on experiences, real-world applications, and innovative problem-solving approaches.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    websiteUrl: "https://juedu.live/",
    technologies: ["Python", "Apache Kafka", "TensorFlow", "AWS"],
    year: 2025
  },
  {
    id: 3,
    title: "Meta SEO",
    description: "Effective META SEO ensures that your pages are properly indexed, rank higher in search results, and attract more organic traffic.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    websiteUrl: "",
    technologies: ["Python", "Apache Kafka", "TensorFlow", "AWS"],
    year: 2025
  },
];

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our transformative digital solutions crafted for leading enterprises across industries.
        </p>
      </motion.div>

      <LogoCarousel />

      <div className="mt-16">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>

      <motion.div 
        className="mt-20 text-center p-8 bg-gradient-to-r from-blue-900/30 via-black/50 to-blue-900/30 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
          Our team of experts is ready to help you leverage cutting-edge technology to solve your business challenges.
        </p>
        <a 
          href="/contact" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-lg font-medium inline-block"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;