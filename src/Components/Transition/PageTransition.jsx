import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageTransition.css'; // We'll define the CSS animation here

const PageTransition = ({ to, onTransitionEnd }) => {
  const [showTransition, setShowTransition] = useState(true);
  const navigate = useNavigate();

  // After 2 seconds, navigate to the next page and hide the transition
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to); // Navigate to the target page
      setShowTransition(false); // Hide the transition
      if (onTransitionEnd) onTransitionEnd(); // Callback to trigger anything after transition ends
    }, 2000); // 2 seconds transition time

    return () => clearTimeout(timer);
  }, [to, navigate, onTransitionEnd]);

  return (
    <div className={`transition-container ${showTransition ? 'active' : ''}`}>
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default PageTransition;
