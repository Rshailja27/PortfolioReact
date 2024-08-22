import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function PortfolioPage({ handleThemeChange, themeMode}) {
  return (
    <>
      <Navbar handleThemeChange={handleThemeChange} themeMode={themeMode} fixed="top"/>
      <Home themeMode={themeMode} />
    </>
  )
}

export default PortfolioPage
