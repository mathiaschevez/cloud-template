import React from 'react'
import './header.css';
import mockup from '../../assets/mockup.png';

const Header = () => {
  return (
    <div className='cloud__header section__padding' id='home'>
      <div className='cloud__header-content'>
        <h1>Cloud CRM Software for entry level business enterprise</h1>
        <p>A simple and powerful economic management tool</p>
        <div className='cloud__header-content__buttons'>
          <button type='button'>Try free trial</button>
          <button type='button'>Dicover video</button>
        </div>
      </div>
      <div className='cloud__header-image'>
        <img src={mockup} alt='mockup' />  
      </div>
    </div>
  )
}

export default Header