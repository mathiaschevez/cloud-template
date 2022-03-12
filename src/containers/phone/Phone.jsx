import React from 'react'
import './phone.css'
import { colors, phone, appStore, googleStore } from './imports'

const Phone = () => {
  return (
    <div className="cloud__phone">
      <div className="cloud__phone-container">
        <div 
          className="cloud__phone-container-image"
          style={{ 
            backgroundImage: `url(${colors})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }} 
        >
          <img src={phone} alt="phone" />
        </div>
        <div className="cloud__phone-container-info">
          <h1>Go beyond the limitations with our android and iOS mobile applications</h1>
          <p>Manage your business communications even when you're away from your desk. Native mobile apps for Mail, Mail Admin, and Streams make staying in touch on the go easier and effortless.</p>
          <div className="cloud__phone-container-info-links">
            <img src={appStore} alt="appstore" />
            <img src={googleStore} alt="googlestore" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phone