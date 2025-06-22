import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  id: number;
  name: string;
  url: string;
  image: string;
}

const logos: Logo[] = [
  {
    id: 1,
    name: "Vivaran Creations",
    url: "https://vivarancreations.com/",
    image: "/original-image (1).svg"
  },
  {
    id: 2,
    name: "JuEdu",
    url: "https://juedu.live/",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

const LogoCarousel: React.FC = () => {
  const [, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden bg-gradient-to-r from-blue-900/30 via-black/50 to-blue-900/30 rounded-xl backdrop-blur-sm">
      <motion.h2 
        className="text-3xl font-bold text-center mb-10 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Proud Partnerships
      </motion.h2>
      
      <div className="relative w-full">
        <div className="flex items-center justify-center gap-8 md:gap-16 px-4 flex-wrap">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-black/30 hover:bg-blue-900/20 transition-all duration-300 w-32 h-32 md:w-40 md:h-40"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full mb-4 border-2 border-blue-500/50">
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-white text-center">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;