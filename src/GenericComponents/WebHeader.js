import React from 'react'
import { BUTTONS } from '../constants/General'
import { handleWhatsapp } from '../Services/GenericFunctions'

function WebHeader({logo, NavItems, Button}) {
  return (
    <div className="main-header">
        <div className="left">
        <img src={logo} />
        </div>
        <div className="middle">
        <NavItems />
        </div>
        <div className="right">
        <Button 
            text={BUTTONS.CONTACT} 
            color='#ffffff'
            bgColor='#FD6F00'
            border='#FD6F00'
            handleClick={handleWhatsapp}
        />
        </div>
    </div>
  )
}

export default WebHeader
