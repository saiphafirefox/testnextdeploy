import Image from 'next/image'
import React from 'react'

export default function Activity({image, label}) {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 '>
        <div className='activity-box border shadow'>
            <Image src={image} className="img-fluid activity-box-img" placeholder='blur'
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            alt='Activity at previous at institution' />
            <div className='activity-box-footer'>
                <div className='p-2'>
                    <p className='m-0 para-text-dark'>{label}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

