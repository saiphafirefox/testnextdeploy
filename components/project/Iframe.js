
import React,{useRef, useState} from 'react'


function EmbededYoutube({url,title}) {

  return (
    <div style={{width:"100%"}}>
       <iframe loading='lazy' className='embeded-youtube' 
                src={url} 
                title={title}
                frameBorder="0" 
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  )
}

export default EmbededYoutube