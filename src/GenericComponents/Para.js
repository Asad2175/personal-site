import React from 'react'

function para({text, align, color}) {
    return (
        <p 
            style={{
                'textAlign': align,
                'color': color
            }}>
            {text}
        </p>
    )
}

export default para
