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
  margin: 2% 0;
  background: rgba(129,32,227,1);
  width: 100%;
  bottom: 0;
  position: absolute;
`;

const FooterContent = styled.div`
  padding: 1% 3%;   
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;  
  height: 40px;
`

const StyledText = styled.span`
  color: #55198B;
  font-weight: bold;  
`

export default Footer
