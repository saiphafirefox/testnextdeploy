import React,{useEffect} from 'react'
import ProgressBar from './ProgressBar'

function ExtraSkill() {

    useEffect(()=>{
        let progress_bars = document.querySelectorAll('.extra-skill-progress-bar-value');
        let observer_callback=(entries)=>{
            
          entries.forEach((entry)=>{
            let width = entry.target.getAttribute('data-percentage');
             if(entry.isIntersecting){
                entry.target.style.width= `${width}%`;
                progress_bar_obersever.unobserve(entry.target);
             }
            
          })
        }
        let progress_bar_obersever = new IntersectionObserver(observer_callback, {threshold:0.8})
        progress_bars.forEach((element)=>{
            progress_bar_obersever.observe(element)
        })
      },[])

  return (
    <div className='extra-skill mt-5 pt-5'>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 '>
                <div className='extra-skill-front-end pb-3'>
                    <span className='text-3'> <i className="bi bi-code-slash"></i> Front-end</span>
                    <div className='pt-3'>
                        <ProgressBar percentage={60} label="HTML" />
                        <ProgressBar percentage={60} label="CSS" />
                        <ProgressBar percentage={50} label="SASS" />
                        <ProgressBar percentage={60} label="JS" />
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 back-end'>
                <div className='back-end'>
                    <span className='text-3'> <i className="bi bi-hdd-rack"></i> Back-end</span>
                    <div className='pt-3'>
                        <ProgressBar percentage={60} label="Nodejs" />
                        <ProgressBar percentage={40} label="Linux" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExtraSkill