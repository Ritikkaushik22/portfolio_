import React, { useState, useEffect } from 'react';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Practice from './component/Practice';
import Resume from './component/Resume';
import Services from './component/Services';
import LoadingSpinner from './component/LoadingSpinner'; // Assuming you have a LoadingSpinner component
// import RevealOnScroll from './component/RevealOnScroll';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time using setTimeout
    setTimeout(() => {
      setLoading(false); // Once loading is done, set loading to false
    }, 2000); // Simulating a 2-second loading time
  }, []);

  return (
    <>
      {loading ? (
        // Show loading spinner while loading is true
        <LoadingSpinner />
      ) : (
        // Render content when loading is false
        <>
    
          <Navbar />
          <Practice />
          {/* <RevealOnScroll /> */}
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
