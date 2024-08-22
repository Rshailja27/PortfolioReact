import React from 'react';
import Reactlogo from '../assets/react.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import './Home.css';

function MainSection({ themeMode }) {
  return (
    <div className={`home ${themeMode}`}>
      <div className='links'>
          <div className='links-icons'>
            <GitHubIcon sx={{fontSize:'2.8rem',opacity: 0.8}}/>
            <JoinInnerIcon sx={{fontSize:'2.8rem',ml:4,opacity: 0.8}}/>
          </div>
          <div className='react-logo'>
          <a href="https://react.dev" target="_blank">
            <img src={Reactlogo} className='react-anim' alt='react animation' />
          </a>
          </div>
      </div>

      <div className='expand'>
         <ExpandCircleDownIcon sx={{fontSize:'3rem',opacity: 0.8}}/>
      </div>
    </div>
  )
}

export default MainSection
