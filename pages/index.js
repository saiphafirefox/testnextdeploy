import React from 'react'
import About from '../components/about/About';
import Activities from '../components/activity/Activities';
import Education from '../components/education/Education';
import Footer from '../components/footer/Footer';
import Introduction from '../components/introduction/introduction';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';
import Header from '../components/header';

function Home() {
  return (
    <>
      <Header/>
      <div className='pt-5'></div>
      <Introduction/>
      <About/>
      <Skill />
      <Education/>
      <Activities/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home