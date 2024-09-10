import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';

import './Home.css';

function PortfolioPage({ handleThemeChange, themeMode}) {
  return (
    <>
      <Navbar handleThemeChange={handleThemeChange} themeMode={themeMode}/>
      <Home themeMode={themeMode}/>
      <AboutMe themeMode={themeMode} />
      <Skills  themeMode={themeMode}/>
      <Projects  themeMode={themeMode}/>
      <ContactMe  themeMode={themeMode}/>
      <Footer themeMode={themeMode}/>
    </>
  )
}

export default PortfolioPage
