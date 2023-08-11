import React, { useEffect, useRef } from 'react';
import "./ScrollEffect.css";

const ScrollEffect = ({ children, fadeType }) => {
    const elementRef = useRef(null);
  

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1, // Adjust the threshold as needed
        
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      }, options);
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

    

    return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
    };
  }, []);

  return (
    <div
    ref={elementRef}
    className={`fade-in-section ${fadeType}`}
  >
      {children}
    </div>
  );
};

export default ScrollEffect;
