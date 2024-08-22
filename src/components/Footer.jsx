// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import JoinInnerIcon from '@mui/icons-material/JoinInner';

const FooterContainer = styled.footer`
  background-color:  #00e6b8;
  width: 100vw;
  padding: 1rem;
  text-align: center;
  opacity: 0.8;
`;

function Footer({themeMode}) {
  return (
    <FooterContainer>
      <GitHubIcon sx={{mr:2,fontSize:'2.5rem','&:hover': {
          color: '#fff',
        }, }}/>
      <JoinInnerIcon sx={{ml:2,fontSize:'2.5rem','&:hover': {
          color: '#fff',
        },}}/>
    </FooterContainer>
  );
}

export default Footer;
