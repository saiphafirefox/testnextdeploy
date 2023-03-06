import React from 'react'
import IntroImg from '../../public/images/intro.png'
import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='col-sm-12 col-md-6 '>
        <div className='avatar'>
            <Image className='img-fluid' src={IntroImg} width={200} height={200} 
            placeholder="blur" alt="Sai Marn Pha avatar" priority />
        </div>
  </div>
  )
}
