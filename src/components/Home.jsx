import React from 'react';
import { Icon } from "@iconify/react";
import Reactlogo from '../assets/react.svg';
import './Home.css';

function Home({ themeMode }) {
  return (
    
       <div className={`home ${themeMode}`}>
          <div className='links'>
            <div className='links-icons'>
            <Icon icon="icomoon-free:github" style={{fontSize:'3.5rem',opacity: 0.8}} />
            <Icon icon="ph:link-bold" style={{fontSize:'3.5rem',marginLeft:'3rem',opacity: 0.8}}/> 
            
            </div>
            <div className='react-logo'>
            <a href="https://react.dev" target="_blank">
              <img src={Reactlogo} className='react-anim' alt='react animation' />
            </a>
            </div>
          </div>

      <div className='expand'>
           <Icon icon="fa6-solid:circle-chevron-down" style={{fontSize:'3rem',opacity: 0.8}}/>
      </div>
    </div>
 
  );
}

export default Home;
