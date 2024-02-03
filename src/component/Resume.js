// import FileSaver from 'file-saver';
import React from 'react'
import {ToastContainer, toast } from 'react-toastify';

// const urlO=process.REACT_APP_CLIENT_URL

function Resume() {
const notify = () => toast.success("Sucessfully Download!!!",{theme:'#ff5d56',
position:'bottom-center', className: 'toast-message' } );
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
// const downloadFile = (url) => {
//   FileSaver.saveAs(
//     process.env.REACT_APP_CLIENT_URL + "/Ritik_Kaushik.pdf",
//     "MyCV.pdf"
//   );}

return (
  <div id='resume' className='text-center' style={myStyle}>
      <h2 style={{color:"#ff5d56",fontFamily: 'Berkshire Swash, cursive'}}>My Resume</h2>
      <p style={{color:"#707070"}}>"To download my resume, simply click the 'Download Resume' button below. This will instantly retrieve a copy of my resume to your device. Thank you for your interest!"</p>
      <a className="btn btn-outline-dark" href='Ritik_Kaushik.pdf' download="Resume.pdf" onClick={notify} style={{color:'#707070'}} >Download Resume</a>
      <ToastContainer />
      
    
  </div>
)
}

export default Resume
