import React, { useEffect } from 'react';

const Stars: React.FC = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create stars
      const numberOfStars = 50;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
        
        // Random delay
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return <div className="stars" />;
};

export default Stars;