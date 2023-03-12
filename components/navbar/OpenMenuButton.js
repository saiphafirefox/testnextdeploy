import React from 'react'

export default function OpenMenuButton({toggleNavbar, className='', icon}) {
  return (
          <button  
            onClick={toggleNavbar} 
            id='navbar-toggler' 
            className={`navbar-toggler navbar-toggler-button smp-navbar-toggler d-block d-sm-none d-md-none ${className}`}>
              {icon}
          </button>
  )
}
