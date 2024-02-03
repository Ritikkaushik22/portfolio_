import React, { useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import course from './course.jpg';
import iNotebook from './inotebook.jpg';
import newsapp from './newsapp.jpg';
import portfolio from './portfolio.jpg';
import smart from './smart.jpg';
import textutils from './textutils.jpg';
import flight from './flight.jpeg';
import onlinecourse from './onlinecourse.jpg';

function Allwork() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleContent = (index) => {
    setExpandedCards({ ...expandedCards, [index]: !expandedCards[index] });
  };

  const cardData = [
    { image: onlinecourse, title: 'Online Job Portal', content: `"In this system, users can search and apply for jobs, as well as manage their favorite listings. Meanwhile, admins possess broader capabilities—they verify users and have control over job listings, including adding, deleting, and updating them.
    The technology stack includes Java, SpringBoot, Hibernate, and MySQL for the backend. On the frontend, Angular, TypeScript, HTML, CSS, and JavaScript are used. Additionally, Postman serves as a tool for API testing and development.
    This combination of technologies enables dynamic user interactions with job listings while granting administrators complete control over user verification and job management."` }, // Update content for each card
    { image: course, title: 'Course Management App', content: `"In this system, users have the capability to add, delete, update, and view courses. The technology stack involves Java and SpringBoot for the backend, with MySQL as the database. ReactJS, HTML, CSS, and JavaScript are utilized for the frontend, and Postman is employed for API testing and development. This technology amalgamation enables seamless user interaction in managing course information."` },
    { image: newsapp, title: 'NewsApp', content: `"This platform allows users to read updated news fetched from NewsAPI based on their interests, such as business, sports, technology, science, and more. The technology stack comprises HTML, CSS, JavaScript, and ReactJS. Through this technology setup, users can seamlessly access and stay updated with news tailored to their preferences."` },
    { image: textutils, title: 'TextUtils', content: `"This application provides users with functionalities to count words, characters, and modify text, including converting text to uppercase or lowercase. The technologies utilized include HTML, CSS, JavaScript, and ReactJS. Through this setup, users can easily perform text manipulation and obtain word and character counts as needed."` },
    { image: portfolio, title: 'Portfolio', content: `"In this project, I've structured the entire application using functional components in ReactJS and incorporated multiple essential modules like Reactstrap, React Scroll, React Toastify, and React Hooks. These modules enable responsive design, smooth scrolling, toast notifications, and efficient state management. The project combines HTML, CSS, JavaScript, and React, resulting in a robust and interactive frontend."` },
    { image: flight, title: 'Flight Management System', content: `"Regular users on this platform can reserve and cancel seats, view flight details, download reservation receipts, and register accounts. Meanwhile, administrators possess all user functionalities and the ability to update flight details. The technology stack includes HTML, CSS, JavaScript for the frontend, Python and Flask for the backend, along with MySQL for data storage. Additionally, Postman is utilized for API testing and development. This setup enables user-friendly interactions and comprehensive flight management capabilities for both users and admins."` },
    { image: iNotebook, title: 'iNotebook', content: `"This application enables users to create and save notes, including plans and numbers. Users can securely save their notes on the cloud, accessible upon logging in. Each user can retrieve and update their respective notes, ensuring privacy—users cannot view each other's notes. The technology stack comprises Node.js, Express.js, React.js for frontend rendering, MongoDB for data storage, and Postman for API testing. HTML, CSS, and JavaScript contribute to the application's interface and functionality. This setup ensures secure and personalized note management for individual users."` },
    { image: smart, title: 'Smart Contact Manager', content: `"This system allows users to view, delete, add, and update contact details. The technology stack incorporates HTML, CSS, and JavaScript for the frontend, alongside Thymeleaf as the templating engine. Java and Spring Boot are used for the backend operations, with MySQL serving as the database. This technology combination provides users with seamless management of their contact information."` },
  ];

  const firstRow = cardData.slice(0, 4);
  const secondRow = cardData.slice(4);

  return (
    <div>
      <Row className='my-5'>
        {firstRow.map((card, index) => (
          <Col md={3} key={index}>
            <Container>
              <Card style={{ width: '20rem', backgroundColor: '#222', border: '1px solid #605858', height: expandedCards[index] ? 'auto' : '420px' }}>
                <img alt='Sample' src={card.image} height={180} />
                <CardBody>
                  <CardTitle tag='h5' style={{ color: '#ff5d56' }}>
                    {card.title}
                  </CardTitle>
                  <CardText style={{ color: '#707070', textAlign: 'justify', fontSize: '15px', display: '-webkit-box', WebkitLineClamp: expandedCards[index] ? 'unset' : 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {card.content}
                  </CardText>
                  <div style={{ textAlign: 'center' }}>
                    <button className="btn btn-outline-dark" style={{ backgroundColor: '#222', color: '#707070'}} onClick={() => toggleContent(index)}>
                      {expandedCards[index] ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>

      <Row className='my-5' style={{paddingTop:'120px'}}>
        {secondRow.map((card, index) => (
          <Col md={3} key={index + 4}>
            <Container>
              <Card style={{ width: '20rem', backgroundColor: '#222', border: '1px solid #605858', height: expandedCards[index + 4] ? 'auto' : '420px' }}>
                <img alt='Sample' src={card.image} height={180} />
                <CardBody>
                  <CardTitle tag='h5' style={{ color: '#ff5d56' }}>
                    {card.title}
                  </CardTitle>
                  <CardText style={{ color: '#707070', textAlign: 'justify', fontSize: '15px', display: '-webkit-box', WebkitLineClamp: expandedCards[index + 4] ? 'unset' : 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {card.content}
                  </CardText>
                  <div style={{ textAlign: 'center' }}>
                    <button className="btn btn-outline-dark" style={{ backgroundColor: '#222', color: '#707070'}} onClick={() => toggleContent(index + 4)}>
                      {expandedCards[index + 4] ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </CardBody>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Allwork;
