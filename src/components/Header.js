import React, { useEffect, useState } from 'react'
import logo from '../../src/logo.png'
import {Button, MobileHeader, NavItems, WebHeader} from '../GenericComponents'
import '../public/style/Header.css'

function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWidth)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWidth);
    };
  }, []);
  return (
    <header className={scrollTop > 200 ? 'changeBg' : ''}>
      <div className="container">
        {windowWidth > 1024 ? <WebHeader
          logo={logo}
          NavItems={NavItems}
          Button={Button}
        /> : <MobileHeader
        logo={logo}
        NavItems={NavItems}
        Button={Button}
      /> }
      </div>
    </header>
  )
}

export default Header
