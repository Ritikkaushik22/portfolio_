import React from 'react'
import { useState } from 'react';
import Address from './Address';
function Contact() {
const myStyle={
  // position: 'relative',
  // top: '50px',
  left: '0',
  // filter: 'brightness()',
  // width: '100%',
  height: '100vh',
width: '100vw',
  // background: "no-repeat top center",
  backgroundColor:'#111',
//     backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  backgroundSize: 'cover',
  // padding: '0px 0 120px'
  padding: '200px 0 120px'

};

// const myul={

//   margin:'0',
//   padding:'0',
//   display:'flex',
//   position:'absolute',
//   top:'50%',
//   left:'50%',
//   transform:'translate(-50%,-50%)'

// };

// const ulli={

//   listStyle:'none',
//   margin:'0 15px'


// };


// const ullia={
//   position:'relative',
//   display:'block',
//   width:'60px',
//   height:'60px',
//   textAlign:'center',
//   lineHeight:'63px',
//   background:'#333',
//   borderRadius:'50%',
//   fontSize:'30px',
//   color:'#666',
//   transition:'.5s'


  


// };



const [show, setshow] = useState(true)

const Box=()=> {
  return <Address/>;
}
return (
  <div id='contact' className='text-center' style={myStyle}>
      <h2 style={{color:"#ff5d56",fontFamily: 'Berkshire Swash, cursive'}}>Get in touch</h2>
      <p style={{color:"#707070"}}>Feel free to drop me a line - Contact us</p>
    
      <button style={{color:'#707070'}} className="btn btn-outline-dark" onClick={()=>{
        setshow(!show)
      }}>{show?"Show":"Hide"} Contact Details</button>
      {show?null:<Box/>}

      {/* <div className="container my-3" style={{
        background:'#262626'
      }}>
      <ul style={{myul}}>
<li style={{ulli}}>
  <a style={{ullia}} href="/">
    <i class="fab fa-edge"></i>
  </a>
</li>
<li style={{ulli}}>  <a style={{ullia}} href="/">
    <i class="fab fa-firefox"></i>
  </a>
  </li>
<li style={{ulli}}>
  <a style={{ullia}} href="/">
    <i class="fab fa-chrome"></i>
  </a>
  
</li >
<li style={{ulli}} >
  <a style={{ullia}} href="/">
    <i class="fab fa-opera"></i>
  </a> 
</li>
</ul>
      </div> */}
      
    
  </div>
)
}

export default Contact
