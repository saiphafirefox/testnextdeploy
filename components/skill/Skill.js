import React,{useEffect, useState} from 'react'
import ExtraSkill from './ExtraSkill';
import ProgressText from './ProgressText'


function Skill() {

  useEffect(()=>{
    let progress_circles = document.querySelectorAll('.progress-bar');
    let observer_options={
      threshold:0.7
    };
    let observer_callback=(entries)=>{
      entries.forEach((entry)=>{
          let percentage = entry.target.getAttribute('data-percentage');
          entry.target.classList.toggle(`progress-bar-${percentage}`, entry.isIntersecting)
          if(entry.isIntersecting) observer.unobserve(entry.target)
      })
    }
    let observer = new IntersectionObserver(observer_callback, observer_options)
    progress_circles.forEach((element)=>{
      observer.observe(element)
    })
  },[])

  return (
    <div className='skill-section mt-5 pt-5' id='skills'>
        <div className='container'>
            <div className='text-center'>
                <span className='text-2'>Technical Skills</span>
            </div>
            <div className='row mt-5 gy-5'>
                <div className='col-6 col-sm-6 col-md-3 circle-progress-bar-container'>
                  <div className='progress-bar' data-percentage="80" >
                    <ProgressText percent={80} label="ExpressJs" />
                  </div>
                </div>
                <div className='col-6 col-sm-6 col-md-3 circle-progress-bar-container'>
                  <div className='progress-bar' data-percentage="60">
                  <ProgressText percent={60} label="Nodejs" />
                  </div>
                </div>
                <div className='col-6 col-sm-6 col-md-3 circle-progress-bar-container'>
                  <div className='progress-bar' data-percentage="60">
                  <ProgressText percent={60} label="MongoDB" />
                  </div>
                </div>
                <div className='col-6 col-sm-6 col-md-3 circle-progress-bar-container'>
                  <div className='progress-bar' data-percentage="55">
                  <ProgressText percent={55} label="NextJs" />
                  </div>
                </div>
            </div>
            <ExtraSkill />
        </div>
    </div>
  )
}

export default Skill