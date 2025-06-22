import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export interface PortfolioItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
  websiteUrl: string;
  technologies: string[];
  year: number;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  image,
  websiteUrl,
  technologies,
  year,
  index
}) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-blue-900/50 rounded-xl overflow-hidden shadow-lg backdrop-blur-md border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full mb-2">
            {year}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors gap-1 text-sm font-medium"
        >
          Visit Website <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;