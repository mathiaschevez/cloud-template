import React from 'react'
import './beyondItem.css'

const BeyondItem = ({ image, title }) => {
  return (
    <div className='cloud__beyondItem'>
      <div className="cloud__beyondItem-image">
        <img src={image} alt="beyondItem" />
      </div>
      <div className="cloud__beyondItem-info">
        <h3>{title}</h3>
        <p>Get your info tests delivered at home collect a sample from your progress tests.</p>
        <button type='button'>LEARN MORE</button>
      </div>
    </div>
  )
}

export default BeyondItem