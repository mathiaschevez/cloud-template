import React from 'react'
import './reviews.css'
import { Review } from '../../components';
import { firstUser, secondUser, googleLogo, hubspotLogo } from './imports';


const Reviews = () => {
  return (
    <div className='cloud__reviews'>
      <Review userImg={firstUser} logo={googleLogo} review={'They simply get it done. They always give a clear explanation. From the beginning you will learn you are dealing with amazingly talented people'} name={'Karolin Astaize'} occupation={'Vice President - Talent & Acquisition'} />
      <Review userImg={secondUser} logo={hubspotLogo} review={'Amazing service from this company! A completely different experience working with this mind blowing team. Would love to work again.'} name={'Karolin Astaize'} occupation={'Vice President - Talent & Acquisition'} />
    </div>
  );
}

export default Reviews