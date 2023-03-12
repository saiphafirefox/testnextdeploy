import React from 'react'
import ExtraSkill from './ExtraSkill';
import TechnicalSkill from './TechnicalSkill';


export default function Skill() {

  return (
    <div className='skill-section mt-5 pt-5' id='skills'>
        <div className='container'>
          <TechnicalSkill/>
          <ExtraSkill />
        </div>
    </div>
  )
}


