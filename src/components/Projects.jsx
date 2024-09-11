import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectCard from './ProjectCards'; 
import './Projects.css';

function Projects({ themeMode }) {
  const projects = [
    { projectName: '360imagedisplay' },
    { projectName: 'amzo-android' },
    { projectName: 'amzo-android-api' }
  ];

  return (
    <div id='projects' className={`projects ${themeMode}`}>
      <div className="heading">
        <div className="h1"><h1 style={{ fontSize: '2rem' }}>Projects</h1></div>
        <div className='underline'></div>
      </div>

      <div className="all-projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            themeMode={themeMode}
          />
        ))}
      </div>

      <button className={`projects-btn ${themeMode}`}>
        <span>All</span>
        <GitHubIcon style={{ margin: '0 4px' }} />
        <span>Projects</span>
      </button>
    </div>
  );
}

export default Projects;
