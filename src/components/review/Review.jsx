import React from 'react'
import './review.css'

const Review = ({ userImg, logo, review, name, occupation}) => {
  return (
    <div className='cloud__review'>
      <img src={userImg} alt="user" />
      <div className='cloud__review-container'>
        <img src={logo} alt="logo" />
        <p>{review}</p>
        <div className='cloud__review-container-user'>
          <p className='cloud__review-container-user-name'>{name}</p>
          <p className='cloud__review-container-user-occupation'>{occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default Review