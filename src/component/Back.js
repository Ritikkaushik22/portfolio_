import React, { useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import smart from './smart.jpg';

function Back() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleContent = () => {
    setExpandedCard(!expandedCard);
  };

  const cardContent = `"This system allows users to view, delete, add, and update contact details. The technology stack incorporates HTML, CSS, and JavaScript for the frontend, alongside Thymeleaf as the templating engine. Java and Spring Boot are used for the backend operations, with MySQL serving as the database. This technology combination provides users with seamless management of their contact information."`;

  return (
    <div>
      <Row className='my-5'>
        <Col md={3}>
          <Container>
            <Card style={{ width: "20rem", backgroundColor: "#222", border: "1px solid #605858", height: expandedCard ? 'auto' : '410px' }}>
              <img alt="Sample" src={smart} height={180} />
              <CardBody>
                <CardTitle tag="h5" style={{ color: '#ff5d56' }}>
                  Smart Contact Manager
                </CardTitle>
                <CardText style={{ color: "#707070", textAlign: 'justify', fontSize: '15px', display: '-webkit-box', WebkitLineClamp: expandedCard ? 'unset' : 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {cardContent}
                </CardText>
                <div style={{ textAlign: 'center' }}>
                  <button className="btn btn-outline-dark" style={{ backgroundColor: '#222', color: '#707070'}} onClick={toggleContent}>
                    {expandedCard ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default Back;
