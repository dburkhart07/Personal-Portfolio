import React from 'react';

const Song = ({ embedUrl, delay }) => {
  return (
    <div className="mt-4 fade-in" style={{ transform: 'scale(0.9)', transformOrigin: 'top left', animationDelay: `${delay}s` }}>
      <iframe 
        src={embedUrl} 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Song;
