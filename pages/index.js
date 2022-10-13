import React from 'react'
import About from '../components/about/About';
import Activity from '../components/activity/Activity';
import Education from '../components/education/Education';
import Footer from '../components/footer/Footer';
import Introduction from '../components/intro/Introduction';
import Project from '../components/project/Project';
import Skill from '../components/skill/Skill';
import Head from 'next/head';

function Home() {
  return (
    <>
      <div className='pt-5'></div>
      <Head>

        <title>Sai Marn Pha</title>
        <meta name="description" content="Sai Marn Pha portfolio | saimarnpha.com" />
        <meta name="keywords" content="Sai Marn Pha. Sai Marn Pha portfolio" />
        <meta name="author" content="Sai Marn Pha" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
      </Head>
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