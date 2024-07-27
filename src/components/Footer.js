import React from 'react'
import '../public/style/Footer.css' 
import logo from '../../src/logo.png'
import { NavItems, SocialIcons } from '../GenericComponents';
import { DESIGNATION, EMAIL, NAME, PHONE_NO } from '../constants/General';

function Footer() {
  return (
    <footer>
      <div className='main-footer'>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-footer">
          <NavItems />
        </div>
        <div className="social-footer">
          <SocialIcons />
        </div>
        <div className="connector-footer">
          <div className="item">
            <img src="images/mail.png" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="item">
            <img src="images/phone.png" />
            <a href={`tel:${PHONE_NO}`}>{PHONE_NO}</a>
          </div>
        </div>
        <div className="developer">
          Developed by {NAME} ({DESIGNATION})
        </div>
      </div>
    </footer>
  )
}

export default Footer
