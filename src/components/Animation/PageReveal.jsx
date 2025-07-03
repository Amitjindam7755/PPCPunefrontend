import React, { useEffect, useState } from 'react';
import './PageReveal.css';

const PageReveal = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Remove overlay after animation duration (e.g. 1.5s)
    const timer = setTimeout(() => setShowOverlay(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="reveal-container">
          <div className="corner top-left"></div>
          <div className="corner top-right"></div>
          <div className="corner bottom-left"></div>
          <div className="corner bottom-right"></div>
        </div>
      )}
    </>
  );
};

export default PageReveal;
