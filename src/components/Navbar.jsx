import React from 'react';
import reactLogo from '/dark_logo.png';
import CustomizedSwitch from './Switch'
import './Navbar.css'

function Navbar({ handleThemeChange, themeMode }) {
    const handleSwitchChange = (event) => {
        handleThemeChange(event.target.checked ? 'dark' : 'light');
      };

  return (
    
    <div id='home' className={`nav ${themeMode}`}>
      <ul>
        <li className='nav-links'>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo_react" alt="React logo"/>
            </a>
        </li>
        <li className='nav-links'><a href="#home">Home</a></li>
        <li className='nav-links'><a href="#aboutme">About Me</a></li>
        <li className='nav-links'><a href="#skills">Skills</a></li>
        <li className='nav-links'><a href="#projects">Projects</a></li>
        <li className='nav-links'><a href="#contactme">Contact</a></li>
        <li className="theme-switch">
        <CustomizedSwitch themeMode={themeMode} handleSwitchChange={handleSwitchChange} />
        </li>
        </ul>
    </div>
    
  )
}

export default Navbar;
