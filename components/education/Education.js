import React from 'react'
import Institution from './Institution'

export default function Education() {
  return (
    <div className='education-section text-light mt-5' id='educations'>
        <div className='container pt-5 pb-5'>
            <div className='text-center'>
                <span className='text-2'>Education</span>
            </div>
            <div className='row text-center mt-5'>
                <div className='col-12 col-sm-12 col-md-6 education-section-matriculation'>
                    <Institution icon={<i className="bi bi-mortarboard"></i>} 
                    institute="Matriculation"
                    location="Lashio, Shan State"
                    academic="2016-2017"
                    />
                </div>
                <div className='col-12 col-sm-12 col-md-6 mt-3 mt-md-5 pt-md-5'>
                    <Institution icon={<i className="bi bi-mortarboard"></i>} 
                    institute="College"
                    location="MTU, Mandalay"
                    academic="2017-present"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}