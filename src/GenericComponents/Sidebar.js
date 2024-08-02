import React from 'react'
import logo from '../../src/logo.png'
import '../public/style/sidebar.css'

function Sidebar({NavItems}) {
  return (
    <div className="offcanvas offcanvas-start sidebar text-bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
             <img src={logo} />
            </h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body side-menu">
            <NavItems />
        </div>
    </div>
  )
}

export default Sidebar
