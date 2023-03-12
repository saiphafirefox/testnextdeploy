import React from 'react'
import DynamicImportCarousel from './web/DynamicImportCarousel';
import SchoolProjects from './school/SchoolProjects';
import WebProjects from './web/WebProjects';


function Project() {

  return (
    <div className='pt-5 mt-5 pb-5' id='projects'>
      <DynamicImportCarousel/>
      <div className='container mt-5'>
        <WebProjects/>
        <SchoolProjects />
      </div>
    </div>
  )
}

export default Project