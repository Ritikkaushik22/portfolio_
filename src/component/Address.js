import React from 'react'
import { Col, Row,
  Card,CardBody,CardText,CardSubtitle


} from 'reactstrap'

// import styles from './mystyle.module.css'; 
// import './mystyle.module.css'

function Address() {
  return (
    <>
    <div className="container">
    <Row>
            <Col md={4}>
              <Card className='Card' style={{backgroundColor:"#222", border:"1px solid #605858"}}>
                <i className="fa-brands fa-telegram my-2" style={{color:'#ff5d56',fontSize: '44px'}}></i>
              
                <CardBody>
                  <CardSubtitle style={{color:"white"}}>Telegram</CardSubtitle>
                    <CardText style={{color:"#707070"}}>
                   <a style={{color:'#707070', textDecoration:'none'}} href='https://t.me/+Ub12LNgPGkIwZDI1'>Click to ask anything</a> 

                    </CardText>
                  

                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
            <Card className='Card' style={{backgroundColor:"#222", border:"1px solid #605858"}}>
                <i className="fa-solid fa-envelope my-2" style={{color:'#ff5d56',fontSize: '44px'}}></i>
              
                <CardBody>
                  <CardSubtitle style={{color:"white"}}>Gmail</CardSubtitle>
                    <CardText style={{color:"#707070"}}>
                    <a href="mailto:escobarxcoder@gmail.com" style={{textDecoration:'none',color:'#707070'}}>Click to send an Email</a>

                    </CardText>
                  

                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
            <Card className='Card' style={{backgroundColor:"#222", border:"1px solid #605858"}}>
                <i className="fa-brands fa-linkedin my-2" style={{color:'#ff5d56',fontSize: '44px'}}></i>
              
                <CardBody>
                  <CardSubtitle style={{color:"white"}}>LinkedIn</CardSubtitle>
                    <CardText style={{color:"#707070"}}>
                    <a href="https://www.linkedin.com/in/ritik-k-9941561a4/" style={{textDecoration:'none',color:'#707070'}}>Click to connect on LinkedIn</a>
                    

                    </CardText>
                  

                </CardBody>
              </Card>
            </Col>
          </Row>

    </div>

    
    
    </>
      
        
      
   
  )
}

export default Address
