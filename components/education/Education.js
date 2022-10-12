import React from 'react'

function Education() {
  return (
    <div className='education-section text-light mt-5' id='educations'>
        <div className='container pt-5 pb-5'>
            <div className='text-center'>
                <span className='text-2'>Education</span>
            </div>
            <div className='row text-center mt-5'>
                <div className='col-12 col-sm-12 col-md-6 education-section-matriculation'>
                    <span className='text-3'><i className="bi bi-mortarboard"></i>  Matriculation</span>
                    <span className='para-text-light'>Lashio, Shan State</span>
                    <p className='para-text-light'>2016-2017</p>
                </div>
                <div className='col-12 col-sm-12 col-md-6 mt-3 mt-md-5 pt-md-5'>
                    <span className='text-3'><i className="bi bi-mortarboard"></i> Colledge</span>
                    <span className='para-text-light'>MTU, Mandalay</span>
                    <p className='para-text-light'>2017-present</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education