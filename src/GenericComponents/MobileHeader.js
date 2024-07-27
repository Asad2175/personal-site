import React from 'react'
import { BUTTONS } from '../constants/General'
import Sidebar from './Sidebar'

function MobileHeader({logo, NavItems, Button}) {
  return (
    <>
        <div className="main-header">
            <div className="left">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <div className="menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </a>
            </div>
            <div className="middle">
                {/* <NavItems /> */}
                <img src={logo} />
            </div>
            <div className="right">
                <Button 
                    text={BUTTONS.CONTACT}  
                    color='#ffffff'
                    bgColor='#FD6F00'
                    border='#FD6F00'
                />
            </div>
        </div>
        <Sidebar />
    </>
  )
}

export default MobileHeader
