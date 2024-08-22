import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Projects.css';

function Projects({ themeMode }) {
  return (
    <div className={`projects  ${themeMode}`}>
      <div className="heading"> 
            <div className="h1"><h1 style={{fontSize:'2rem'}}>Projects</h1></div> 
            <div className='underline'></div>
        </div>
       <div className="all-projects">
            <div class={`card ${themeMode}`}>
              <div class={`card-content ${themeMode}`}>
                <img src='./card-image.PNG' alt='card'/>
                <p>360imagedisplay</p>
              </div>
              <div class={`card-footer ${themeMode}`}>
              <p>View on GitHub <GitHubIcon style={{fontSize: '20px' }} /> </p>
              </div>
            </div>
            <div class={`card ${themeMode}`}>
              <div class={`card-content ${themeMode}`}>
                <img src='./card-image.PNG' alt='card'/>
                <p>amzo-android</p>
              </div>
              <div class={`card-footer ${themeMode}`}>
              <p>View on GitHub <GitHubIcon style={{fontSize: '20px'}} /> </p>
              </div>
            </div>
            <div class={`card ${themeMode}`}>
              <div class={`card-content ${themeMode}`}>
              <img src='./card-image.PNG' alt='card'/>
                <p>amzo-android-api</p>
              </div>
              <div class={`card-footer ${themeMode}`}>
                <p>View on GitHub <GitHubIcon style={{fontSize: '20px'}} /> </p>
              </div>
            </div>
       </div>
       <div className='projects-btn'>
       <Button variant="outlined"
        sx={{
           display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color:'#000',padding:'13px 18px',
        borderRadius:'8px',
        border:'1px solid black',
        fontWeight:'700', mt:6, fontSize:'18px',
         '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
          border:'none'
        }, 
        }}>
        <span>All</span>
        <GitHubIcon style={{ margin:'0 4px' }} />
        <span>Projects</span>
      </Button>
       </div>
    </div>
  )
}

export default Projects;
