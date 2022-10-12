import Image from 'next/image'
import React from 'react'

function WebProject({img, text, demoLink, sourceCode}) {
   
  return (
    <div className='web-project'>
        <div className='row'>
            <div className='col-sm-12 col-md-6'>
                <Image src={img} className="img-fluid" alt='Web Project' />
            </div>
            <div className='col-sm-12 col-md-6'>
                <div className='web-project-description h-100 text-center d-flex flex-column justify-content-center'>
                    <span className='text-3 d-block'>{text}</span>
                    <div className='pt-3'>
                        <a target="_blank" rel='noreferrer' href={demoLink} className='btn btn-primary mx-3 text-light'>
                            Demo Link</a>
                        <a target="_blank" rel='noreferrer' href={sourceCode} className='btn btn-primary text-light'>
                            Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebProject