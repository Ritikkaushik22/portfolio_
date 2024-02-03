import React from 'react'

function Footer() {

const myStyle={
        textAlign: "center",
        // padding: "3px",
        backgroundColor: "black",
        color: "white",
        padding: '50px 0 50px'
      
}
  return (
    <div>
    <footer style={myStyle}>
  <p>Design by: Ritik Kaushik<br></br>
  <i className="fa-regular fa-envelope m-1"></i>
  <a href="mailto:hege@example.com" style={{textDecoration:'none',color:'#707070'}}>escobarxcoder@gmail.com</a><br></br>
  Copyright © 2023. All rights reserved.</p>
</footer>
      
    </div>
  )
}

export default Footer
