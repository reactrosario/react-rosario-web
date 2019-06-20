import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


const Footer = () => (
  <FooterWrapper>
    <FooterContent />   
    {/* </FooterContent> */}
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
  display: flex;
  height: 40px;
`

export default Footer
