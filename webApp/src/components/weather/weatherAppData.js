import React from 'react'
import './weather.css'

const Form = (props) => {
  return (
    <div className='container-data'>
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweatherdetails}>
      <h1>Search another city</h1>
        <div className='data'>
          <div className=''>
            <input
              type='text'
              className=''
              name='city'
              autoComplete='off'
              placeholder='Enter City'
            ></input>
          </div>
          <div className=''></div>
          <button className='currentBtn'>Get Weather!</button>
        </div>
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

export default Form;
