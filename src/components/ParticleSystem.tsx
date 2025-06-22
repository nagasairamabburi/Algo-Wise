import React, { useEffect } from 'react';

const ParticleSystem: React.FC = () => {
  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const particleContainer = document.getElementById('particle-container');
      if (!particleContainer) return;
      
      // Clear existing particles
      particleContainer.innerHTML = '';
      
      const particleCount = 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random blur
        const blur = Math.random() * 30 + 10;
        particle.style.filter = `blur(${blur}px)`;
        
        particleContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <div id="particle-container" className="fixed inset-0 pointer-events-none z-0"></div>
  );
};

export default ParticleSystem;