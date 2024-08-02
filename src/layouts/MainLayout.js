import React, { useContext, useEffect, useState } from 'react'
import {Header, Footer, Services, Portfolio, AboutMe} from '../components'
import { ScrollContext } from '../Context/ScrollState'
import Home from '../pages/Home'

function MainLayout() {
  const {id, setId} = useContext(ScrollContext);

  useEffect( () => {
    document.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const offset = 150; // Offset in pixels
      let currentSectionId = '';

      const scrollPosition = window.scrollY + offset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });
      setId(currentSectionId);
    });
  })
  return (
    <div className="main">
      <Header />
        <div className="container">
            <Home />
            <Services />
            <AboutMe />
            <Portfolio />
        </div>
      <Footer />
    </div>
  )
}

export default MainLayout
