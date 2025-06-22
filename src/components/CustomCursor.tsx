import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);
    
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  if (typeof window === 'undefined') return null;
  
  return (
    <>
      <div 
        className="custom-cursor"
        style={{
          transform: 'translate(-50%, -50%)',
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1
        }}
      />
      <div 
        className="custom-cursor-dot"
        style={{
          transform: 'translate(-50%, -50%)',
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: hidden ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;