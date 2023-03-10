import React from 'react'

export default function ProgressCircleText({percent,label}) {
  return (
    <div className='progress-bar-textbox text-center '>
      <span className='percent'>{percent}%</span>
      <h6 className='label'>{label}</h6>
    </div>
  )
}