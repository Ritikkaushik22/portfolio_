// import React, { useRef, useEffect, useState } from 'react';
// import './RevealOnScroll.css'; 

// const RevealOnScroll = () => {
//   const revealRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const revealOptions = {
//     root: null, 
//     rootMargin: '0px', 
//     threshold: 0.5,
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     }, revealOptions);

//     if (revealRef.current) {
//       observer.observe(revealRef.current);
//     }

//     return () => {
//       if (revealRef.current) {
//         observer.unobserve(revealRef.current);
//       }
//     };
//   }, [revealRef, revealOptions]);

//   return (
//     <div ref={revealRef} className={`reveal-element ${isVisible ? 'visible' : ''}`}>
      
//       <h1>Reveal Me on Scroll</h1>
//       <p>Your content...</p>
//     </div>
//   );
// };

// export default RevealOnScroll;
