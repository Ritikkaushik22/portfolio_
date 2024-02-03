import React from 'react'
import { Col, Row } from 'reactstrap';

function About() {

const myStyle={
  // position: 'relative',
  // top: '50px',
  left: '0',
  height: '100vh',
width: '100vw',
  // filter: 'brightness()',
  // width: '100%',
  // background: "no-repeat top center",
  backgroundColor:'#111',
//     backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  backgroundSize: 'cover',
  // padding: '0px 0 120px'
  padding: '200px 0 120px'

};




return (
  <div id='about' className='text-center' style={myStyle}>
      <h2 style={{color:"#ff5d56",fontFamily: 'Berkshire Swash, cursive'}}>About Me</h2>
      <p style={{color:"#707070"}}>Professional Profile - There Is All About Me</p>
      <div className="container">
      <p style={{color:"#707070",textAlign:'justify'}}>"Hello, I'm <span style={{color:'#ff5d56'}}>Ritik Kaushik</span>, a passionate full-stack developer with a penchant for crafting seamless digital experiences. With two years of hands-on experience in the dynamic realm of web development, I thrive on translating innovative ideas into functional, user-centric solutions. My journey in coding began with a fascination for problem-solving and has evolved into expertise in both frontend and backend technologies, I've cultivated proficiency in languages like JavaScript, Python, or Java, and frameworks such as React, Node.js, Flask, SpringBoot. My familiarity with database management systems like MySQL or MongoDB and hands-on experience in API integrations allows me to build robust and scalable solutions. I'm also adept at version control systems like Git, ensuring seamless collaboration and project management.

Having contributed to diverse projects, I've honed my skills in frontend and backend technologies, adeptly navigating through frameworks, databases, and API integrations. My approach is rooted in clean, efficient code that not only meets technical requirements but also prioritizes user experience.

Driven by a continuous quest for learning and improvement, I'm enthusiastic about leveraging emerging technologies to create impactful solutions. I believe in collaborative work, embracing challenges, and pushing the boundaries of what's possible in the digital landscape.

Beyond coding, I find inspiration in Open Source Contributions, Hackathons or Coding Challenges, Continual Learning, Side Projects or Prototyping, UI/UX Exploration, enriching my problem-solving abilities and fostering creativity. My goal is simple: to craft innovative, scalable solutions that make a difference.

Let's collaborate and create something exceptional together!"</p>
<hr></hr>

      <div className="container">
      <Row style={{textAlign:'justify'}}>
      <Col md={6}>
        <div>
          <i className="fa-solid fa-cake-candles m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b> Date of birth:</b> 22 March 2000</span>
        </div>
        <div>
          <i className="fa-solid fa-house-flag m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b>Nationality:</b> Indian</span>
        </div>
        <div>
          <i className="fa-solid fa-code m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b>Freelance:</b> Available</span>
        </div>
      </Col>

      <Col md={6}>
        <div>
          <i className="fa-solid fa-map-location-dot m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b>Address:</b> Uttar Pradesh, India</span>
        </div>
        <div>
          <i className="fa-solid fa-envelope m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b>Email:</b> escobarxcoder@gmail.com</span>
        </div>
        <div>
          <i className="fa-solid fa-language m-1" style={{ color: '#ff5d56', fontSize: '15px' }}></i>
          <span style={{ color: '#707070' }}><b>Spoken Languages:</b> Hindi-English</span>
        </div>
      </Col>
    </Row>
       
      </div>

      </div>
      
    
    
  </div>
)
}

export default About
