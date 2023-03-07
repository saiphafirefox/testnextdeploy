
import dynamic from "next/dynamic";


export default dynamic(() => import('bootstrap/js/dist/carousel.js').then(module=>{

    const {Carousel} = module;
    if (typeof window == undefined|| !Carousel) return false;
    return new Carousel("webProjectCarousel", { interval: 2000})
    
    }), {

    ssr: false
  })
