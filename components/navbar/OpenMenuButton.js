import React from 'react'

function OpenMenuButton({togglerNavbar, className='', children}) {
  return (
          <button  onClick={togglerNavbar} id='navbar-toggler' 
              className={`navbar-toggler navbar-toggler-button smp-navbar-toggler 
                d-block d-sm-none d-md-none ${className}`}>
              {children}
          </button>
  )
}

export default OpenMenuButton