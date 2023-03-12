import React from 'react'

export default function AboutDescription() {
  return (
    <>
        <span className='text-2 text-light'>Who am I?</span>
        <p className='para-text-light mt-3'>
            I am a MERN Stack web developer with 2+ years coding experience. Currently work for myself as a freelancer.
            Aspire to solve real life problems with software technology. I&apos;m a good team player.
            Also a badminton player 🏸✌️
        </p>
        <a href='https://drive.google.com/file/d/1vFitTWRlaN1SLeexa8lFzvkP6ctoyVff/view'
        target="_blank" rel="noreferrer"
        type='button' className='btn btn-outline-primary mt-3 cv-button'
        > 
        Download CV <i className="bi bi-download"></i>
        </a>
    </>
  )
}
