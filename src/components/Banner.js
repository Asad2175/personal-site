import React from 'react'
import { Button, SocialIcons } from '../GenericComponents'
import '../public/style/Banner.css'
import banner from '../public/images/banner.png'
import {handleResumeDownload, handleWhatsapp} from '../Services/GenericFunctions'
import { BUTTONS, DESIGNATION, NAME, PROJECTS_DONE, TOTAL_EXPERIENCE } from '../constants/General';

function Banner() {
  return (
    <section id="home">
      <div className="banner-main">
        <div className="left-banner">
          <div className="title">Hi I am</div>
          <div className="name">{NAME}</div>
          <div className="designation">{DESIGNATION}</div>
          <div className="social-icons">
            <SocialIcons />
          </div>
          <div className="btns">
            <div className='left-btn'>
              <Button 
                text={BUTTONS.CONTACT} 
                color='#ffffff'
                bgColor='#FD6F00'
                border='#FD6F00'
                handleClick={handleWhatsapp}
              />
            </div>
            <div className='right-btn'>
              <Button
                text='Download CV' 
                color='#959595'
                bgColor='transparent'
                border='#959595'
                handleClick={handleResumeDownload}
              />
            </div> 
          </div>
          <div className="info">
            <div className="box">
              <div className="count">{TOTAL_EXPERIENCE}</div>
              <div className="value">Experiences</div>
            </div>
            <div className="box">
              <div className="count">{PROJECTS_DONE}</div>
              <div className="value">Projects done</div>
            </div>
          </div>
        </div>
        <div className="right-banner">
          <img src={banner} />
        </div>
      </div>
    </section>
  )
}

export default Banner
