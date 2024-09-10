import React from 'react';
import styled from "styled-components";
import { Icon } from "@iconify/react";

// Styled Components for the Switch
const StyledSwitch = styled.label`
  /* Slider pill */
  display: flex;
  width: 3.5rem;
  font-size: 1.5rem;
  border-radius: 30px;
  transition: var(--transition);
  border: 2px solid;
  cursor:pointer;

  /* Hide default checkbox */
  input[type="checkbox"] {
    height: 0;
    width: 0;
    opacity: 0;
  }

  /* Move span when checked */
  input[type="checkbox"]:checked + div {
    transform: translateX(100%);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
  }
`;

export default function CustomizedSwitch({ themeMode, handleSwitchChange }) {

  return (
    <StyledSwitch>
      <input
        type="checkbox"
        checked={themeMode === 'dark'} // Set the checked state based on the theme mode
        onChange={handleSwitchChange} // Trigger handleSwitchChange on toggle
        aria-label={`Toggle theme, currently ${themeMode}.`}
        
      />
      <div>
        {themeMode === "light" ? 
          <Icon icon="game-icons:sunflower" /> 
          : 
          <Icon icon="game-icons:moon" />
        }
      </div>
    </StyledSwitch>
  );
}
