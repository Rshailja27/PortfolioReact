import React from 'react'
import reactLogo from '/dark_logo.png'
import CustomizedSwitch from './Switch'
import './Navbar.css'

function Navbar({ handleThemeChange, themeMode }) {
    const handleSwitchChange = (event) => {
        handleThemeChange(event.target.checked ? 'dark' : 'light');
      };

  return (
    <div>
      <ul>
        <li>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo_react" alt="React logo"/>
            </a>
        </li>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#skils">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="theme-switch">
            <CustomizedSwitch  
            checked={themeMode === 'dark'}
            onChange={handleSwitchChange}  />
        </li>
        </ul>
    </div>
  )
}

export default Navbar
