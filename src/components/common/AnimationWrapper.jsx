import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './IntroAnimation';

const AnimationWrapper = ({ children }) => {
  const [showIntro, setShowIntro] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if this is the first visit in this browser session
    const hasVisited = sessionStorage.getItem('hasVisitedInSession');
    
    // Only show animation on first visit to homepage in this session
    if (!hasVisited && location.pathname === '/') {
      setShowIntro(true);
      // Mark that user has visited in this session only
      sessionStorage.setItem('hasVisitedInSession', 'true');
    }
  }, [location]);
  
  const handleAnimationComplete = () => {
    setShowIntro(false);
  };
  
  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onAnimationComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default AnimationWrapper;