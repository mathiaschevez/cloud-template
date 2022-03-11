import React from 'react'
import './features.css';
import shield from '../../assets/shield.png';
import apps from '../../assets/apps.png';

const Features = () => {
  return (
    <div className='cloud__features'>
      <div className='cloud__features-shield'>
        <img src={shield} alt="shield" />
        <div className='cloud__features-shield-info'>
          <h1>Unbeatable privacy & secure data storage subscription</h1>
          <p>Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.</p>
          <a href="">SECURE DATA STORAGE</a>
        </div>
      </div>  
      <div className='cloud__features-apps'>
        <div className='cloud__features-apps-info'>
          <h1>Integrated with the ultimate add-on management</h1>
          <p>Our data centers have top-notch security and surveillance, with a reliable 99.9% uptime. Secure email hosting with encryption both at rest and end-to-end, along with S/MIME message encryption.</p>
          <a href="">EXPLORE ALL ADD-ONS</a>
        </div>
        <img src={apps} alt="apps" />
      </div>
    </div>
  )
}

export default Features