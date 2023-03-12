
import React from 'react'

export default function Iframe({url,title}) {
  return (
    <div style={{width:"100%"}}>
      <iframe loading='lazy' className='embeded-youtube' 
      src={url} 
      title={title}
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}