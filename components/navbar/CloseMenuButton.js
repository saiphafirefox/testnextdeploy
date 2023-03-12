import React from 'react'

export default function CloseMenuButton({toggleNavbar, icon}) {
  return (
    <div className='d-flex d-sm-none d-md-none justify-content-end p-3'>
        <button  
          onClick={toggleNavbar} 
          id='navbar-toggler' 
          className='navbar-toggler navbar-toggler-button smp-navbar-toggler'>
            {icon}
        </button>
    </div>
  )
}