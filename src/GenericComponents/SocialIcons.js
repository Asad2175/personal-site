import React from 'react'
import { LINKEDIN } from '../constants/SocialLinks'

function SocialIcons() {
  function openLink(type) {
    switch(type) {
      case 'LINKEDIN':
        return window.open(LINKEDIN, '_blank');
    }
  }
  return (
    <>
      <img src="/images/linkedin.png" onClick={() => openLink('LINKEDIN')} />
    </>
  )
}

export default SocialIcons
