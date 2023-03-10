import React from 'react'
import About from '../components/about/About';
import Activities from '../components/activity/Activities';
import Education from '../components/education/Education';
import Footer from '../components/footer/Footer';
import Introduction from '../components/introduction/introduction';
import Projects from '../components/project/Projects';
import Skills from '../components/skill/Skills';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='pt-5'></div>
      <Introduction/>
      <About/>
      <Skills />
      <Education/>
      <Activities/>
      <Projects/>
      <Footer/>
    </>
  )
}