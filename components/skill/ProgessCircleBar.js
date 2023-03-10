import React from 'react'
import ProgressCircleText from './ProgressCircleText'

export default function ProgessCircleBar({label, percent}) {
  return (
    <div className='col-6 col-sm-6 col-md-3 circle-progress-bar-container'>
    <div className='progress-bar' data-percentage={`${percent}`} >
      <ProgressCircleText percent={percent} label={`${label}`} />
    </div>
  </div>
  )
}
