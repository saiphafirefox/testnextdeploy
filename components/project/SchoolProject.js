import React from 'react'
import EmbededYoutube from './EmbededYoutube'

function SchoolProject() {
  return (
    <div className='mt-5 pt-5'>
            <div className='text-center my-3 pb-3'>
                <span className='text-2'>School Projects</span>
            </div>
        <div className='row gy-5'>
            <EmbededYoutube title="Face detection game using Tensorflow.js" >
                <iframe loading='lazy' className='embeded-youtube' 
                src="https://www.youtube.com/embed/Ki4RgO5zAJw?rel=0" 
                title="Face detection game with Tensorflow.js" frameBorder="0"
                
                allow="accelerometer;fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </EmbededYoutube>
            
            <EmbededYoutube title="Control Arduino with voice recognition using C# programming">
                <iframe loading='lazy' className='embeded-youtube' 
                src="https://www.youtube.com/embed/CIGVztbXEic" 
                title="Control Arduino with voice recognition using C# programming language" 
                frameBorder="0" 
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </EmbededYoutube>
            <EmbededYoutube title="Internet of things project" >
                <iframe loading='lazy' className='embeded-youtube' 
                src="https://www.youtube.com/embed/GVLbO-XuglU" 
                title="Internet of things with Arduino ES6" frameBorder="0" 
                allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </EmbededYoutube>
            <EmbededYoutube title="mBot object avoiding and line following with Scratch programming" >
                    <iframe  loading='lazy' className='embeded-youtube' 
                    src="https://www.youtube.com/embed/BlnrbDlhXpA" 
                    title="mBot object avoiding and line following with Scratch Programming" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </EmbededYoutube>
        </div>
    </div>
  )
}

export default SchoolProject