
import React from 'react'
import Avatar from './Avatar'
import Description from './Description'

export default function Introduction() {
  return (
    <div className='mt-5 pt-5 pb-2' id='home'>
      <div className='container'>
        <div className='row intro-section mt-md-5 pt-md-5'>
          <Avatar/>
          <Description/>
        </div>
      </div>
    </div>
  )
}
