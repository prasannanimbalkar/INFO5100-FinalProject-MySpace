import React from 'react'
import './weather.css'

const weather = (props) => {
  return (
    <div>
      <div className='current-container'>
        <div>
          <h1>{props.city}</h1>
          <i className={`wi ${props.favicon} display-1`}></i>
          <h4>
            {props.cel ? <h1>{props.cel}&deg;</h1> : null}
          </h4>
          {minmaxtemp(props.min, props.max)}
          <h4>{props.description}</h4>
        </div>
      </div>
    </div>
  )
}

function minmaxtemp(min, max) {
  if (min && max) {
    return (
      <h4>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h4>
    )
  }
}

export default weather;
