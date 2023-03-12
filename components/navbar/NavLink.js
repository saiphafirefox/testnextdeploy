import React from 'react'

export default function NavLink({href='#', label, icon,toggleNavbar}) {
  return (
    <div className='smp-nav-item p-1'>
        <a href={href} onClick={toggleNavbar}>
            <div className='icon'>
               {icon}
            </div>
            {label}
        </a>
    </div>
  )
}