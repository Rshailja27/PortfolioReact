import React from 'react';
import { Icon } from "@iconify/react";

function Card({ imageSrc, projectName, themeMode }) {
  return (
    <div className={`card ${themeMode}`}>
      <div className={`card-content ${themeMode}`}>
        <img src={imageSrc} alt={`${projectName} project`} />
        <p>{projectName}</p>
      </div>
      <div className={`card-footer ${themeMode}`}>
        <p>View on GitHub <Icon icon="icomoon-free:github" /></p>
      </div>
    </div>
  );
}

export default Card;
