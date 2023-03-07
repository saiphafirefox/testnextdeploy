
import React,{useState} from 'react'

import Iframe from './Iframe';
import IframeCover from './IframeCover';

function YoutubeVideo({url,title, coverImg}) {

    const [play,setPlay]= useState(false);

  return (
    <div className='col-sm-12 col-md-6' >
        
        {
            play ?
                <Iframe url={url} title={title} />
                :
                <IframeCover title={title} src={coverImg} startVideo={setPlay} />
        }
        
        <div className='text-center pt-3'>
            <span className='para-text-dark'>{title}</span>
       </div>
 </div>
  )
}

export default YoutubeVideo