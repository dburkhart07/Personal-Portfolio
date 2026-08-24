import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`glass rounded-2xl shadow-lg p-6 ${
        hover ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
