import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Demo = () => (
  <Layout>
    <SEO title="Demo" />
    <DemoWrapper>
      <StyledButton 
        first
        background='Plum'
      > 
        First
      </StyledButton>          
      <StyledButton 
        second 
        background='MediumPurple'
      >
        Second
      </StyledButton>        
      <StyledButton 
        third 
        background='DarkMagenta'
        className='other-style'
      >        
        Third
      </StyledButton>
      {/* <div className='another-style'>
        <StyledButton 
          fourth 
          background='orange'
        >        
          Fourth
        </StyledButton>         
      </div>                */}
    </DemoWrapper>
  </Layout>
)

const DemoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`

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
  
  // &.other-style{
  //   border-color: yellow;
  // }

  // & ~ & {
  //   background: pink; // <StyledButton> as a sibling of <StyledButton>, but maybe not directly next to it
  // }  

  // & + & {
  //   background: lime; // <StyledButton> next to <StyledButton>
  // }  

  .another-style & {
    border: 2px solid lime; // <StyledButton> inside another element labeled ".something-else"
  }  
`

export default Demo
