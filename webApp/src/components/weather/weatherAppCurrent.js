import React from 'react'
import './weather.css'

const Current = (props) => {
  return (
    <div className='current'>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweatherdetails}>
        <button className='currentBtn'>Get Current Location Weather</button>
      </form>
    </div>
  )
}

function error() {
  return (
    <div className='alert' role='alert'>
      Enter Valid City Name!
    </div>
  )
}

export default Current;
