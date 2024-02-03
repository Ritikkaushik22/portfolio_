import React from 'react'
import './portfolio.css'
import Allwork from './Allwork';
import { useState } from 'react';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
// import { Col, Row } from 'reactstrap';
import Fullstack from './Fullstack';
import Back from './Back';
// import { Col, Row } from 'reactstrap';
// import { Link} from 'react-router-dom'
// import { ListGroup } from 'reactstrap'
// import App from '../App';
function Portfolio() {
  const myStyle={
    // position: 'relative',
    // top: '50px',
    left: '0',
    // filter: 'brightness()',
    // width: '100%',
    height: '220vh',
width: '100vw',
    // background: "no-repeat top center",
    backgroundColor:'#151515',
//     backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    backgroundSize: 'cover',
    // padding: '0px 0 10px'
    padding: '20px 0 120px'

};


const [active, setactive] = useState("FirstCardList")

// const [show, setshow] = useState(true)
// const Box=()=>{
//    return <Allwork/>
// }

// const [show1, setshow1] = useState(true)
// const Box1=()=>{

//   return <Frontend/>
// }

// const [show2, setshow2] = useState(false)
// const Box2=()=>{
//   return <Back/>
// }

// const [show3, setshow3] = useState(false)
// const Box3=()=>{
//   return <Fullstack/>
// }


  


  return (
    <div id='portfolio' className='text-center' style={myStyle}>
        <h2 style={{color:"#ff5d56",fontFamily: 'Berkshire Swash, cursive'}}>Portfolio</h2>
        <p style={{color:"#707070"}}>See My Works</p>

        <div className="container">
          
          <button className="btn btn-outline-dark m-1" style={{color:'#707070'}} onClick={()=>{
            // Box()
            // setshow(!show)
            setactive("FirstCardList")
          }}>All Work</button>
          <button className="btn btn-outline-dark m-1" style={{color:'#707070'}} onClick={()=>{
            // Box1()
            // setshow1(!show1)
            // setshow(show)
            setactive("SecondCardList")
          }}>Frontend Work</button>
          
          <button className="btn btn-outline-dark m-1" style={{color:'#707070'}}onClick={()=>{
            // Box2()
            setactive("ThirdCardList")
            
          }}>Backend Work</button>
          {/* {(() => {
        if (!show) {
          return <Box2/>;
        } 
        setshow(show)
        
      })()} */}
          <button className="btn btn-outline-dark m-1" style={{color:'#707070'}}onClick={()=>{
            // Box3()
            setactive("FourthCardList")
            
            
          }}>Full Stack Work</button>
          {/* {(() => {
        if (!show) {
          return <Box3/>;
        } 
        setshow(show)
        
      })()} */}

      <div>
        {active==="FirstCardList" && <Allwork/>}
        {active==="SecondCardList" && <Frontend/>}
        {active==="ThirdCardList" && <Back/>}
        {active==="FourthCardList" && <Fullstack/>}
      </div>


      
      {/* <Row>
        <Col md={3}>
        {(() => {
        if (!show) {
          return <Allwork/>
        }
        else{
          return null
        }
        
      })()}
      
        </Col>
        <Col md={3}>
        {(() => {
        if (!show1) {
          return <Frontend/>
        }
        
      })()}
        
        </Col>
        <Col>
        
        </Col>
        <Col>
        
        </Col>
      </Row>
         */}
      
          
          
        </div>
        
      
    </div>
  )
}

export default Portfolio
