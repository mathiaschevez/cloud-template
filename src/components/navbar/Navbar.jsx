import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/cloud.png';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#cloud">Categories</a></p>
    <p><a href="#features">Contact</a></p>
    <p><a href="#app">About us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='cloud__navbar'>
      <div className='cloud__navbar-links'>
        <div className='cloud__navbar-links_logo'>
          <img src={logo} alt='logo' />
          <h1>StartupLanding</h1>
        </div>
        <div className='cloud__navbar-links_container'>
          <Menu />  
        </div>
      </div>
      <div className='cloud__navbar-sign'>
        <button type='button'>Purchase Now</button>
      </div>
      <div className="cloud__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="cloud__navbar-menu_container scale-up-center">
            <div className="cloud__navbar-menu_container-links">
              <Menu />
              <div className="cloud__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Purchase</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar