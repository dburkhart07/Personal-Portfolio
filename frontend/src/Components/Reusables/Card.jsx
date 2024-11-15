import React from 'react';

function Card({ title, children, delay = 0 }) {
  return (
    <div
      className="p-6 rounded-lg shadow-md flex flex-col bg-[rgb(119,47,17)] text-[rgb(255,233,209)] 
                transition-transform transform opacity-0 animate-bobbing"
      style={{
        animation: `fadeInUp 1s ease-out forwards, bobbing 3s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <h1 className="text-[36px] font-bold mb-5 ml-4">{title}</h1>
      <p>{children}</p>
    </div>
  );
}

export default Card;
