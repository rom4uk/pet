import React from 'react'

function MathStartScreen(props) {
  return (
    <div className='alert alert-secondary'>
        <h3>Are you ready?</h3>
        <button 
          className='btn btn-success'
          onClick={props.onStart}
        >Start</button>
      </div>
  )
}

export default MathStartScreen

