
import React,{useRef, useState} from 'react'


function EmbededYoutube({children,title}) {

  return (
    <div className='col-sm-12 col-md-6'>
       {children}
       <div className='text-center pt-3'>
        <span className='fs-6'>{title}</span>
       </div>
    </div>
  )
}

export default EmbededYoutube