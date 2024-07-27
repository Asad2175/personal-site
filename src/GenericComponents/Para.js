import React from 'react'

function para({text, align, color}) {
    return (
        <p 
            style={{
                'text-align': align,
                'color': color
            }}>
            {text}
        </p>
    )
}

export default para
