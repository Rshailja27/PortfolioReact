// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Icon } from "@iconify/react";


const FooterContainer = styled.footer`
  background-color:  #00e6b8;
  width: 100vw;
  padding: 1rem;
  text-align: center;
  opacity: 0.8;
`;

function Footer() {
  return (
    <FooterContainer>
       <Icon icon="icomoon-free:github" style={{fontSize:'2.6rem'}} />
       <Icon icon="ph:link-bold" style={{fontSize:'2.6rem',marginLeft:'3rem'}}/> 
    </FooterContainer>
  );
}

export default Footer;
