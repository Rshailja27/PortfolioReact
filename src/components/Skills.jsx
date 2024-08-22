import React from 'react';
import styled from 'styled-components';
import './Skills.css';

function Skills({ themeMode }) {
  return (
    <div className={`skills ${ themeMode }`}>
      <div className="heading"> 
            <div className="h1"><h1 style={{fontSize:'2rem'}}>Skills</h1></div> 
            <div className='underline'></div>
        </div>
       <div className="laguages">
            
        <div class="grid-item">    
          <img className={`language-logo ${ themeMode }`} src="./html5.svg" alt="html5-logo" />
          <p>HTML 5</p>
        </div>
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./css3.svg" alt="CSS3-logo" /> 
              <p>CSS3</p>
            </div>
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./javascript-svg.svg" alt="JavaScript-logo" />
              <p>JavaScript</p>
            </div>  
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./bootstrap.svg" alt="BootStrap-logo" />
              <p>BootStrap</p>
            </div>
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./react.svg" alt="React-logo" />
              <p>React</p> 
            </div>
            <div class="grid-item">
            <img className={`language-logo ${ themeMode }`} src="./styled-components.svg" alt="Styled-logo"/> <p>Styled Components</p>
            </div>  
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./redux.svg" alt="Redux-logo" /><p>Redux</p>
            </div>
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./git.svg" alt="Git-logo" /><p>Git</p>
            </div>
            <div class="grid-item">
              <img className={`language-logo ${ themeMode }`} src="./GitHub.svg" alt="GitHub-logo" /><p>GitHub</p>
            </div>
                        
       </div>
    </div>
  )
}

export default Skills;
