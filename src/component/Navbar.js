import React from 'react'
// import Scroll from 'react-scroll'
import { Link } from 'react-scroll';
// const ScrollLink = Scroll.ScrollLink
function Navbar() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{background:'rgba(0,0,0,0.4)'}}>
    {/* <ScrollLink 
        to="example-destination" 
        spy={true} 
        smooth={true} 
        duration={500} 
        className='some-class' 
        activeClass='some-active-class'
      >
        Link Text Goes Here
      </ScrollLink>  */}
  <div className="container ">
    <a className="navbar-brand" style={{
        fontFamily: 'Berkshire Swash',
        // fontFamily: 'cursive',
        fontWeight: 'normal',
        transition: 'all 0.3s',
        color: '#fff',
        margin: '0',
    }} href="/"><span style={{
        color: '#ff5d56'
    }}>Ritik</span> Kaushik</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='home' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link to='about' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link to='services' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">SERVICES</Link>
        </li>
        <li className="nav-item">
        <Link to='resume' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">RESUME</Link>
        </li>
        <li className="nav-item">
        <Link to='portfolio' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
        <Link to='contact' spy={true} smooth={true} offset={-50} duration={50} className="nav-link active" aria-current="page" href="/">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
