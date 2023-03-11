import React from 'react'

export default function Institution({icon, institute, location, academic}) {
  return (
    <>
        <span className='text-3'> {icon}  {institute} </span>
        <span className='para-text-light'>{location}</span>
        <p className='para-text-light'>{academic}</p>
    </>
  )
}
