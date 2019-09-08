import React from "react"
import styled from "styled-components"

import SocialShare from './SocialShare'

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <SocialShare />
      <StyledText>Comunidad React Rosario {new Date().getFullYear()}</StyledText>
    </FooterContent>
  </FooterWrapper>
)

const FooterWrapper = styled.div`
  margin: 1rem 0;
  padding: 10px;
  background: rgba(129,32,227,1);
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const FooterContent = styled.div`
  /* padding: 1% 3%;    */
  position: relative;
  width: 100%;
  height: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;  

  @media only screen and (min-width: 768px){
    flex-direction: row;
  }
`;

const StyledText = styled.span`
  color: #55198B;
  font-weight: bold; 
  padding-right: .8rem;
`;

export default Footer
