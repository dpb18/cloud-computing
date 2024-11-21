import React from 'react'
import './Footer3.css'
// import { assets } from '../../assets/assets'

const Footer3 = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo'  alt="" />
                <p>Khorisa, an Assamese ethnic cuisine restaurant, was established in 2011. It specializes in traditional dishes that highlight the rich culinary heritage of Assam. The restaurant is named after "khorisa," a popular fermented bamboo shoot delicacy in Assamese cuisine, reflecting its commitment to preserving and promoting authentic flavors.</p>
                <div className="footer-social-icons">
                    {/* <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" /> */}
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91(9864534725)</li>
                    <li>customercare@khorisa.com</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Khorisa.com -All Rights Reserved.</p>
    </div>
  )
}

export default Footer3