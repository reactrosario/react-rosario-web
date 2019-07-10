import React from "react"
import styled from "styled-components"

const Button = ({ children, background }) => (
  <StyledButton
    background={background}
  > 
    {children}
  </StyledButton>               
)

export default Button

const StyledButton = styled.button`
  height: 80px;
  margin: 2%;
  width: 100%;
  color: white;
  border-radius: 50px;
  border: unset;
  background-color: ${({ background }) => background || 'red'};

  &:hover {
    background-color: Indigo;
    cursor: pointer;
  }
  
  $.other-style{
    border: 1px solid yellow; 
  }

  // & ~ & {
  //   background: pink; // <StyledButton> as a sibling of <StyledButton>, but maybe not directly next to it
  // }  

  // & + & {
  //   background: lime; // <StyledButton> next to <StyledButton>
  // }  

  .another-style & {
    border: 2px solid lime; // <StyledButton> inside another element labeled ".something-else"
  }  
`;
