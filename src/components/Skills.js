import React from 'react'
import '../public/style/Skills.css'

function Skills({value}) {
    return(
        <div class="progress-circle" style={{'background': `conic-gradient(#f80 ${value.experience}, #333 0%)`}}>
            <div class="progress-text">
                <span>{value.experience}</span>
                <span>{value.title}</span>
            </div>
        </div>
    )
}

export default Skills