import React from 'react'

function CloseMenuButton({togglerNavbar, children}) {
  return (
    <div className='d-flex d-sm-none d-md-none justify-content-end p-3'>
        <button  onClick={togglerNavbar} id='navbar-toggler' 
            className='navbar-toggler navbar-toggler-button smp-navbar-toggler'>
                {children}
        </button>
    </div>
  )
}

export default CloseMenuButton