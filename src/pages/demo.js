import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Button from "../components/Button"
import SEO from "../components/seo"

const Demo = () => (
  <Layout>
    <SEO title="Demo" />
    <DemoWrapper>
      <Button 
        background='Plum'
      > 
        First
      </Button> 
      <Button 
        background='MediumPurple'
      >
        Second
      </Button>       
      <OverrideButton 
        background='DarkMagenta'
      >        
        Third
      </OverrideButton>                  
    </DemoWrapper>
  </Layout>
)

export default Demo

const OverrideButton = styled(Button)`
  border: 2px solid lime;
`;

const DemoWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

const ReversedButton = props => <button {...props} children={props.children.split('').reverse()} />
