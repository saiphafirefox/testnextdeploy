import React from 'react'

function NavLink({href='#', label, icon}) {
  return (
    <div className='smp-nav-item p-1'>
        <a href={href}>
            <div className='icon'>
               {icon}
            </div>
            {label}
        </a>
    </div>
  )
}

export default NavLink