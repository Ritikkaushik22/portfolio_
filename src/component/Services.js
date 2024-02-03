import React, { useState } from 'react';
import { Col, Card, CardBody, CardSubtitle, CardText, Container, Row } from 'reactstrap'; // Import necessary components

const Services = () => {

  const myStyle={
    left: '0',
    height: '1100px',
    width: '100vw',
    backgroundColor:'#151515',
    backgroundSize: 'cover',
    padding: '12px 0 120px'

};
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleContent = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardsData = [
    {
      title: 'Web Design',
      content: `"We specialize in crafting custom, responsive websites that captivate audiences and drive results. Our services encompass everything from seamless UI/UX design and e-commerce solutions to ongoing maintenance and SEO optimization. With a focus on user-centric design and innovative strategies, we ensure our clients' online presence not only looks exceptional but also performs impeccably across all devices."`,
      icon: 'fa-solid fa-palette'
    },
    {
      title: 'Web Developer',
      content: `"We specialize in comprehensive web development solutions, offering tailored services in both frontend and backend development. From creating visually engaging websites to building scalable web applications, our expertise ensures seamless user experiences and secure, efficient infrastructure. Our capabilities span from crafting custom APIs and databases to providing strategic consultation, empowering clients with innovative technology choices and optimization strategies for their digital success."`,
      icon: 'fa-solid fa-code'
    },
    {
      title: 'Full Stack Development',
      content: `"We offer end-to-end full-stack development services, spanning frontend design, backend infrastructure, and database management. Our focus is on creating seamless user interfaces integrated with robust backend systems, leveraging diverse technologies to build scalable, custom web applications. Our support extends beyond development, ensuring ongoing maintenance for sustained optimal performance."`,
      icon: 'fa-solid fa-laptop-code'
    },
    {
      title: 'Content Creator & Photography',
      content: `"Crafting compelling content and capturing stunning visuals, I offer tailored photography sessions and diverse content creation across articles, blogs, and social media. My goal is to deliver authentic, impactful storytelling that resonates and inspires."`,
      icon: 'fa-solid fa-photo-film'
    },
    {
      title: 'Creative Design',
      content: `"Specializing in creative UI/UX design, I craft intuitive interfaces and seamless experiences. From wireframes to prototypes, my focus is on enhancing usability and aesthetics across platforms, driving meaningful engagement for brands."`,
      icon: 'fa-brands fa-creative-commons-share'
    },
    {
      title: '24 X 7 Support',
      content: `"Our 24x7 support services guarantee uninterrupted assistance, with a dedicated team available round the clock. From prompt issue resolution to proactive monitoring and regular updates, we ensure your systems run smoothly, offering peace of mind and uninterrupted operations."`,
      icon: 'fa-solid fa-headset'
    },
    // Add more objects for additional cards
  ];

  return (
    <div id='services' style={myStyle}>
      <h2 style={{ color: "#ff5d56", fontFamily: 'Berkshire Swash, cursive',textAlign:'center' }}>My Services</h2>
      <div className="container">
        <span style={{ color: "#707070"}}>I am a full-stack web developer with over 2 years of experience in building responsive, user-friendly, and secure websites and web applications. I use HTML, CSS, JavaScript, React, Node.js, MongoDB, and other modern technologies to create web solutions that meet your needs and expectations.</span>
      </div>


      <Container className='text-center my-4'>
        <Row>
          {cardsData.map((card, index) => (
            <Col md={4} key={index}>
              <Card className='Card' style={{ backgroundColor: "#222", border: "1px solid #605858", height: expandedCard === index ? 'auto' : '295px' }}>
                <i className={`fa-solid ${card.icon} my-2`} style={{ color: '#ff5d56', fontSize: '44px' }}></i>

                <CardBody style={{ maxHeight: expandedCard === index ? 'none' : '160px', overflow: 'hidden' }}>
                  <CardSubtitle style={{ color: "white" }}>{card.title}</CardSubtitle>
                  <CardText style={{ color: "#707070", textAlign: 'justify', fontSize: '15px', display: '-webkit-box', WebkitLineClamp: expandedCard === index ? 'unset' : 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    <p>{card.content}</p>
                  </CardText>
                </CardBody>

                <CardBody style={{ textAlign: 'center' }}>
                  <button className="btn btn-outline-dark" style={{ backgroundColor: '#222', color: '#707070' }} onClick={() => toggleContent(index)}>
                    {expandedCard === index ? 'Read less' : 'Read more'}
                  </button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <hr></hr>
        
      </Container>
      <div className='container'>
        <Row>
          <Col md={6}>
            <div className="counter-single">
              <div className="icon-box">
              <i className="fa-solid fa-user-tie"></i>
              </div>
              <div className="leftSections">
              
              <h4 className="counter">15</h4>
              <p style={{color: '#707070'}}>Happy Clients</p>

              </div>
              
            </div>
          </Col>
          <Col md={6}>
          <div className="counter-single">
              <div className="icon-box">
              <i className="fa-solid fa-trophy"></i>
              
              </div>
              <div className="rightSections">
                
                <h4 className="counter">10</h4>
                <p style={{color: '#707070'}}>Awards Achieved</p>
  
                </div>
            </div>
          </Col>
        </Row>
        <Row className='my-4'>
          <Col md={6}>
          <div className="counter-single">
              <div className="icon-box">
              <i className="fa-solid fa-award"></i>
              
              
              
              </div>
              <div className="leftSections">
              <h4 className="counter">20</h4>
              <p style={{color: '#707070'}}>Projects Done</p>
              
              </div>
            </div>
          
          </Col>
          <Col md={6}>
          <div className="counter-single">
              <div className="icon-box">
              <i className="fa-solid fa-star"></i>
              
              </div>
              <div className="rightSections">
                
                <h4 className="counter">25</h4>
                <p style={{color: '#707070'}}>User Ratings</p>
  
                </div>
            </div>
          
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default Services;
