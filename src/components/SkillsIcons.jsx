import React from 'react';
import { Icon } from '@iconify/react';
import './Skills.css';

function SkillsIcons({ iconPath, skillName, themeMode }) {
  return (
    <div className={`grid-item ${themeMode}`}>
      <Icon icon={iconPath} style={{fontSize:'4rem'}} />
      <p>{skillName}</p>
    </div>
  )
}

export default SkillsIcons;
