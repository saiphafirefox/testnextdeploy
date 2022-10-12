import Image from 'next/image'
import React from 'react'
import myImg from '../../public/images/me.png'

function About() {
  return (
    <div className='about-section'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,64L60,90.7C120,117,240,171,360,192C480,213,600,203,720,170.7C840,139,960,85,1080,80C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <div className='container about-section-container'>
            <div className='row align-items-center'>
                <div className='col-sm-12 col-md-6 about-section-img'>
                    <Image className='img-fluid' src={myImg} width={350} height={350}
                    placeholder="blur" blurDataURL='/images/blur/me.png' 
                    alt="Sai Marn Pha Image" />
                </div>
                <div className='col-sm-12 col-md-6 about-section-desc'>
                    <span className='text-2 text-light'>Who am I?</span>
                    <p className='para-text-light mt-3'>
                        I am a web developer skillful in MERN Stark. Aspire to create 
                        performant and delightful software for users.
                        I am also a badminton player 🏸
                    </p>
                    <a href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
                     target="_blank" rel="noreferrer"
                    type='button' className='btn btn-outline-primary mt-3 cv-button'>
                        Download CV <i className="bi bi-download"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About