import Image from 'next/image'
import React from 'react'
import IntroImg from '../../public/images/intro.png'
import waveSVG from '../../public/images/about/wave.svg'

function Introduction() {
  return (
    <div className='mt-5 pt-5 pb-2' id='home'>
      <div className='container'>
        <div className='row intro-section mt-md-5 pt-md-5'>
          <div className='col-sm-12 col-md-6 '>
            <Image className='img-fluid' src={IntroImg} width={200} height={200} alt="Introduction image" />
          </div>
          <div className='col-sm-12 col-md-6 text-start order-md-first'>
              <span className='text-1 text-dark'>Hi, I&apos;m Sai.</span>
              <span className='desc-text-1 animated-text'>
                I am a <span className='text-developer'>Junior Web Developer</span>
              </span>
              
              <p className='para-text-dark'>
                Interested in solving development. 
                Willing to help society through technology.
              </p>
              <a className='btn btn-sm btn-primary text-white fs-5' type='button'
              href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
              target="_blank"
              >Hire me</a>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Introduction