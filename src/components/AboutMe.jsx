import React from 'react';
import BackToTop from './ScrollTopToBottom';
import './AboutMe.css';

function AboutMe({ themeMode }) {
  return (
    <div id='aboutme' className={`Aboutme ${themeMode}`}>
       <div className="heading"> 
            <div className="h1"><h1 style={{fontSize:'2rem'}}>ABOUT ME</h1></div> 
            <div className='underline'></div>
        </div>
       <div className="details">
            <div className="information">
                <p>
                I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.
                </p>
            </div>
            <div className="info-image">
                <img src="https://avatars.githubusercontent.com/u/46315553?v=4" alt="abt" className='user-content' />
            </div>
<BackToTop themeMode = { themeMode }/>
       </div>
      
    </div>
  )
}

export default AboutMe;
