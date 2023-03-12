import React from 'react'
import Image from 'next/image'
import meImg from '../../public/images/about/me.png'

export default function AboutImage() {
  return <Image className='img-fluid' src={meImg} width={350} height={350}
        placeholder="blur" alt="Sai Marn Pha Image" />
}
