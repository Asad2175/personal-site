import React from 'react'

function Button({text, color, bgColor, border, handleClick}) {
  return (
    <div>
      <button 
        style={{
            color: color, 
            backgroundColor: bgColor,
            border: `1px solid ${border}`
        }}
        id={text.toLowerCase().replace(' ', '-')}
        onClick={handleClick}
      >{text}</button>
    </div>
  )
}

export default Button
