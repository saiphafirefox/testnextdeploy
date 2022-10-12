import React from 'react'

function ProgressText({percent,label}) {
    

  return (
    <div className='progress-bar-textbox text-center '>
      <span className='percent'>{percent}%</span>
      <h6 className='label'>{label}</h6>
    </div>
  )
}

export default ProgressText