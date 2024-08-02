import React from 'react'
import { ABOUT_ME } from '../constants/General'
import { Button, Para } from '../GenericComponents'
import '../public/style/AboutMe.css'
import resume from '../public/files/resume.pdf'
import Skills from './Skills'
import { SKILLS_LIST } from '../constants/SkillsList'


function AboutMe() {
  const handleDownload = () => {
    const pdfUrl = resume; // URL relative to the public directory

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume.pdf'; // Optional: Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about-me">
        <div className="about-main">
            <h1 className="heading">{ABOUT_ME.heading}</h1>
            {/* <Para 
              text={ABOUT_ME.description}
              align="center"
              color="#707070" 
            /> */}
            <div className="about-box">
              <div className="row">
                <div className="col-6 d-none d-sm-block">
                  <img src="images/man.png" />
                </div>
                <div className="col-sm-6 align-self-center">
                  <Para 
                    text={ABOUT_ME.data}
                    align="left"
                    color="#959595" 
                  />
                  <div className='download-btn'>
                    <Button
                      text='Download CV' 
                      color='#ffffff'
                      bgColor='#FD6F00'
                      border='#FD6F00'
                      handleClick={handleDownload}
                    />
                  </div>
                </div>
              </div>
              <div className='skills-main'>
                <div className='d-flex align-items-center justify-content-center flex-wrap'>
                  {SKILLS_LIST.map( (t) => (
                    <Skills value={t} />
                  ))}
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
