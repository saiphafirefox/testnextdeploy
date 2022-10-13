import Image from 'next/image'
import React from 'react'
import IntroImg from '../../public/images/intro.png'


function Introduction() {
  return (
    <div className='mt-5 pt-5 pb-2' id='home'>
      <div className='container'>
        <div className='row intro-section mt-md-5 pt-md-5'>
          <div className='col-sm-12 col-md-6 '>
            <div className='avatar'>
              <Image className='img-fluid' src={IntroImg} width={200} height={200} 
              placeholder="blur" blurDataURL='/images/blur/avatar.png'
              alt="Sai Marn Pha avatar" />
            </div>
          </div>
          <div className='col-sm-12 col-md-6 text-start order-md-first'>
              <span className='text-1 text-dark'>Hi, I&apos;m Sai.</span>
              <span className='desc-text-1 animated-text'>
                I am a <span className='text-developer'>Junior Web Developer</span>
              </span>
              
              <p className='para-text-dark'>
                Passionated about software development. 
                Willing to help society solve problems through technology.
              </p>
              <a className='btn btn-sm btn-primary text-white fs-5' type='button'
              href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
              target="_blank" rel="noreferrer"
              >Hire me</a>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Introduction