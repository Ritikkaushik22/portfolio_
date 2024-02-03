import React, { useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import newsapp from './newsapp.jpg';
import textutils from './textutils.jpg';
import portfolio from './portfolio.jpg';

function Frontend() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleContent = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cardsData = [
    {
      image: newsapp,
      title: 'NewsApp',
      content: "This platform allows users to read updated news fetched from NewsAPI based on their interests, such as business, sports, technology, science, and more. The technology stack comprises HTML, CSS, JavaScript, and ReactJS. Through this technology setup, users can seamlessly access and stay updated with news tailored to their preferences."
    },
    {
      image: textutils,
      title: 'TextUtils',
      content: "This application provides users with functionalities to count words, characters, and modify text, including converting text to uppercase or lowercase. The technologies utilized include HTML, CSS, JavaScript, and ReactJS. Through this setup, users can easily perform text manipulation and obtain word and character counts as needed."
    },
    {
      image: portfolio,
      title: 'Portfolio',
      content: "In this project, I've structured the entire application using functional components in ReactJS and incorporated multiple essential modules like Reactstrap, React Scroll, React Toastify, and React Hooks. These modules enable responsive design, smooth scrolling, toast notifications, and efficient state management. The project combines HTML, CSS, JavaScript, and React, resulting in a robust and interactive frontend."
    },
  ];

  return (
    <div>
      <Row className='my-5'>
        {cardsData.map((card, index) => (
          <Col md={3} key={index}>
            <Container>
              <Card style={{ width: '20rem', backgroundColor: '#222', border: '1px solid #605858', height: expandedCard === index ? 'auto' : '400px' }}>
                <img alt='Sample' src={card.image} height={190} />
                <CardBody>
                  <CardTitle tag='h5' style={{ color: '#ff5d56' }}>
                    {card.title}
                  </CardTitle>
                  <CardText style={{ color: '#707070', textAlign: 'justify', fontSize: '15px', display: '-webkit-box', WebkitLineClamp: expandedCard === index ? 'unset' : 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {card.content}
                  </CardText>
                  <div style={{ textAlign: 'center' }}>
                    <button className='btn btn-outline-dark' style={{ backgroundColor: '#222', color: '#707070' }} onClick={() => toggleContent(index)}>
                      {expandedCard === index ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </CardBody>
              </Card>
              {expandedCard === index && (
                <div style={{ backgroundColor: '#222', padding: '10px', marginTop: '10px' }}>
                  <CardText style={{ color: '#707070', textAlign: 'justify', fontSize: '15px' }}>
                    {card.content}
                  </CardText>
                </div>
              )}
            </Container>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Frontend;
