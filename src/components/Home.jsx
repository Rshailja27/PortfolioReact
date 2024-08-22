import React from 'react';
import MainSection from './MainSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';

import './Home.css';

function Home({ themeMode }) {
  return (
    <>
      <MainSection themeMode={themeMode}/>
      <AboutMe themeMode={themeMode} />
      <Skills  themeMode={themeMode}/>
      <Projects  themeMode={themeMode}/>
      <ContactMe  themeMode={themeMode}/>
      <Footer themeMode={themeMode}/>
    </>
  );
}

export default Home;
