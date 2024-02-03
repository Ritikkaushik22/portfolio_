import React from 'react'
import ghost from './ghost.gif'
function LoadingSpinner() {
  return (
    <div
      className='spinner-container'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // semi-transparent background
        zIndex: 9999, // ensure it's on top of other content
      }}
    >
        <img src={ghost} style={{ maxWidth: '10%', maxHeight: '10vh' }} alt='loading'></img>
      
    </div>
  )
}

export default LoadingSpinner
