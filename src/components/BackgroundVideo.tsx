import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source 
          src="/160986-822391312_small.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to control video opacity and add depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"
        style={{ mixBlendMode: 'multiply' }}
      ></div>
    </>
  );
};

export default BackgroundVideo;