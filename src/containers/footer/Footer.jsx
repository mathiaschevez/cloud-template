import React from 'react'
import { useMediaQuery } from 'react-responsive';
import './footer.css'
import logo from '../../assets/cloud.png';

const Footer = () => {
  return (
    <div className="cloud__footer">
      <div className="cloud__footer-links">
        <div className="cloud__footer-links-list">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Afiliate</li>
            <li>Careers & Culture</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="cloud__footer-links-list">
          <h3>About us</h3>
          <ul>
            <li>Support Center</li>
            <li>Customer Support</li>
            <li>About Us</li>
            <li>Copyright</li>
            <li>Popular Campaign</li>
          </ul>
        </div>
        <div className="cloud__footer-links-list">
          <h3>Our Information</h3>
          <ul>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Site Map</li>
            <li>Store Hours</li>
          </ul>
        </div>
        <div className="cloud__footer-links-list">
          <h3>My Account</h3>
          <ul>
            <li>Press Inquiries</li>
            <li>Social Media</li>
            <li>Directories</li>
            <li>Images & B-roll</li>
            <li>Permissions</li>
          </ul>
        </div>
        <div className="cloud__footer-links-list">
          <h3>Policy</h3>
          <ul>
            <li>Application security</li>
            <li>Software principles</li>
            <li>Unwanted software policy</li>
            <li>Responsible supply chain</li>
          </ul>
        </div>
      </div>
      <div className="cloud__footer-bottom">
        <div className="cloud__footer-bottom-logo">
          <img src={logo} alt="logo" />
          <h3>StartupLanding</h3>
        </div>
        <div className="cloud__footer-bottom-list">
          <ul>
            <li>Home</li>
            <li>Advertise</li>
            <li>Supports</li>
            <li>Marketing</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer