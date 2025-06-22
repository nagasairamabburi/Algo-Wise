import React, { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  delay?: number;
  fullWidth?: boolean;
}

const Card3D: React.FC<Card3DProps> = ({ children, delay = 0, fullWidth = false }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [glowing, setGlowing] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 20;
    const rotateYValue = (centerX - e.clientX) / 20;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseEnter = () => {
    setScale(1.05);
    setGlowing(true);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
    setGlowing(false);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`${fullWidth ? "w-full" : ""} h-full`}
    >
      <div
        ref={cardRef}
        className={`p-6 rounded-2xl ${fullWidth ? "w-full" : ""} relative overflow-hidden h-full card-gradient`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
          transition: 'all 0.3s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute inset-0 blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(120, 53, 230, 0.3) 100%)',
            opacity: glowing ? 0.5 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: -1
          }}
        />
        
        <div className="relative z-10 h-full">
          {children}
        </div>
        
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)',
            transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`,
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Card3D;