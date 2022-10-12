import React from 'react'
import About from '../components/about/About';
import Activity from '../components/activity/Activity';
import Education from '../components/education/Education';
import Footer from '../components/footer/Footer';
import Introduction from '../components/intro/Introduction';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';

function Home() {
  return (
    <>
      <div className='pt-5'></div>
      <Introduction/>
      <About/>
      <Skill />
      <Education/>
      <Activity/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home