import React from 'react'
import Image from 'next/image'

export default function IframeCover({src,startVideo,title}) {
  return (
    <div className='yt-cover' >
        <div className='yt-cover-img'>
            <Image src={src} alt={title} placeholder="blur"  />
        </div>
        <span type="button" className='play-btn' onClick={startVideo}>
            <i className="bi bi-youtube"></i>
        </span>
</div>
  )
}