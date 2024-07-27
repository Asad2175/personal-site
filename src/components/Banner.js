import React from 'react'
import { Button, SocialIcons } from '../GenericComponents'
import '../public/style/Banner.css'
import resume from '../public/files/resume.pdf'
import { BUTTONS, DESIGNATION, NAME, PROJECTS_DONE, TOTAL_EXPERIENCE, WHATSAPP_NO } from '../constants/General';

function Banner() {
  const handleDownload = () => {
    const pdfUrl = resume; // URL relative to the public directory

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume.pdf'; // Optional: Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleWhatsapp = () => {
    var phoneNumber = WHATSAPP_NO; // Note: No need for the plus sign
    var message = 'Hello! ....';
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    
    window.open(whatsappURL, '_blank')
  };
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
                handleClick={handleDownload}
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
          <img src="images/man.png" />
        </div>
      </div>
    </section>
  )
}

export default Banner
