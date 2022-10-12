import Image from 'next/image'
import React from 'react'

function ActivityBox({img, label}) {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 '>
        <div className='activity-box border shadow'>
            <Image src={img} className="img-fluid activity-box-img"  alt='Activity at previous at institution' />
            <div className='activity-box-footer'>
                <div className='p-2'>
                    <p className='m-0'>{label}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ActivityBox