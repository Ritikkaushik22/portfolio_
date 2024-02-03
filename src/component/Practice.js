import React, { useEffect } from 'react';
import Typed from 'typed.js';
import backgroundImage from './car.jpg';
function Practice() {
  const myStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor:'black',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity for the darkened effect
  };
  

//   const myStyle2 = {
//     color: '#333',
//     fontFamily: 'tahoma',
//     fontSize: '30px',
//     fontWeight: '100',
//     lineHeight: '2.5',
//     textTransform: 'uppercase',
//     whiteSpace: 'nowrap',
//     overflow: 'hidden',
//     position: 'relative',
//     width: '800px',
//   };

//   const myStyle3 = {
//     fontSize: '33px',
//     marginLeft: '40px',
//     color: '#ff5d56',
//   };

//   const animationStyle = {
//     animation: 'showText 9s infinite',
//   };

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 50,
      loop: true
    };
    // Initialize Typed on the element when the component mounts
    const typed = new Typed('#element', options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts


  return (
    <div id='home' style={myStyle}>
    <main >
    
        <section className='firstSection'>
        <div className="overlay" style={overlayStyle}></div>
        
            <div className="leftSection " style={{
              position: 'relative',
              zIndex: 1, // Ensure text appears above the overlay
              color: '#fff',
            }}>
              <div>Hi,There! I'm </div>
              <span id='element'></span>


            </div>
            <div className="rightSection">
              {/* <img src={backgroundImage} alt="sample" style={{paddingLeft:'auto',paddingTop:'10vh'}}/> */}
              

            </div>


        </section>

        

       
    </main>

      
      
   </div>
  );
}

export default Practice;
