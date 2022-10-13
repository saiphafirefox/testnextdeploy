import React from 'react'
import Image from 'next/image'

function IframeCover({src,startVideo,title}) {
  return (
    <div className='yt-cover' >
        <div className='yt-cover-img'>
            <Image src={src} alt={title} />
        </div>
        <span type="button" className='play-btn' onClick={startVideo}>
            <i className="bi bi-youtube"></i>
        </span>
</div>
  )
}

export default IframeCover