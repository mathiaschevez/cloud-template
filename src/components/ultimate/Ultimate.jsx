import React from 'react'
import "./ultimate.css"

const Ultimate = ({ image, title, color}) => {
  return (
    <div className="cloud__ultimate">
      <div className="cloud__ultimate-image" style={{backgroundColor: `${color}`}}>
        <img src={image} alt="ultimate" />
      </div>  
      <div className="cloud__ultimate-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Ultimate