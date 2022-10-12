

import dynamic from "next/dynamic";


const Bootjs = dynamic(() => import('bootstrap/js/dist/carousel').then(res=>{
  let MyCarousel = document.getElementById('#webProjectCarousel');
    const carousel = new Carousel(MyCarousel, { interval: 2000})
}), {
    ssr: false,
  })


export default Bootjs;