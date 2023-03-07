import React, {useState} from 'react'
import CarouselItem from './CarouselItem'

import MyPortfolioImg from '../../../public/images/project/portfolio.png';
import AsenwiLandingImg from '../../../public/images/project/asenwiLanding.png';
import ApiImg from '../../../public/images/project/api.png';


export default function WebProjects() {
  const [carouselInterval, setCarouselInterval] = useState(2500)
  return (
    <>
      <div className='text-center'>
        <span className='text-2'>Web Projects</span>
      </div>
      <div id="webProjectCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active" data-bs-interval={carouselInterval}>
            <CarouselItem img={AsenwiLandingImg}
              demoLink="https://asenwi.com"
              sourceCode="https://github.com/SaiPha454/asenwi"
              text="Landing Page" />
          </div>
          <div className="carousel-item" data-bs-interval={carouselInterval}>
            <CarouselItem img={MyPortfolioImg} 
              demoLink="https://saimarnpha.com"
              sourceCode="https://github.com/SaiPha454/portfolio"
              text="My Portfolio Website" />
          </div>
          <div className="carousel-item" data-bs-interval={carouselInterval}>
            <CarouselItem img={ApiImg} 
              demoLink="https://github.com/SaiPha454/POS"
              sourceCode="https://github.com/SaiPha454/POS"
              text="POS Api Porject" />
          </div>
        </div>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#webProjectCarousel" data-bs-slide-to="0" className="active carousel-indicator-index mx-2" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#webProjectCarousel" data-bs-slide-to="1" className='carousel-indicator-index mx-2' aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#webProjectCarousel" data-bs-slide-to="2" className='carousel-indicator-index mx-2' aria-label="Slide 3"></button>
        </div>
      </div>
    </>
  )
}
