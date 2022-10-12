import React from 'react'

function ProgressBar({percentage, label}) {
    

  return (
    <div className='extra-skill-progress-bar'>
        <div className='row'>
            <div className='col-6'> <span>{label}</span></div>
            <div className='col-6 text-end'> <span>{percentage}%</span></div>
        </div>
        <div className='extra-skill-progress-bar-max mt-1 mb-2'>
            <div data-percentage={percentage} className='extra-skill-progress-bar-value'></div>
        </div>
    </div>
    
  )
}

export default ProgressBar