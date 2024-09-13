import React, {useState} from 'react';

import SkillsIcons from './SkillsIcons';
import './Skills.css';

function Skills({ themeMode }) {
  const [theme, setTheme] = useState('light'); // or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const skills = [
    { iconPath: 'mdi:language-html5', skillName: 'HTML5' },
    { iconPath: 'ion:logo-css3', skillName: 'CSS3' },
    { iconPath: 'fa6-brands:js', skillName: 'JavaScript' },
    { iconPath: 'ri:bootstrap-fill', skillName: 'BootStrap' },
    { iconPath: 'mdi:react', skillName: 'React' },
    { iconPath: 'file-icons:styledcomponents', skillName: 'Styled Components' },
    { iconPath: 'akar-icons:redux-fill', skillName: 'Redux' },
    { iconPath: 'bi:git', skillName: 'Git' },
    { iconPath: 'fa6-brands:square-github', skillName: 'GitHub' },
  ];
  return (
    <div id='skills' className={`skills ${ themeMode }`}>
      <div className="heading"> 
            <div className="h1"><h1>Skills</h1></div> 
            <div className='underline'></div>
        </div>
       <div className="laguages">
        {
          skills.map((skill,idx) =>(
            <SkillsIcons key={idx} 
            iconPath={skill.iconPath} 
            skillName={skill.skillName}
            themeMode={themeMode}/>
          ))
        }
                        
       </div>
    </div>
  )
}

export default Skills;
