import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"


const Header = () => (
  <HeaderWrapper>
    <GlobalStyle />
    <HeaderContent>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "LogoRos.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
      <NavBar> 
        <StyledLink to="/">Inicio</StyledLink>
        <StyledLink to="/">Blog</StyledLink>
        <StyledLink to="/">Contacto</StyledLink>    
        <StyledLink to="/demo">Demo</StyledLink>    
      </NavBar>
    </HeaderContent>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  margin: 2% 0;
  width: 100%;

  && {
    background: linear-gradient(45deg, rgba(33,193,251,1) 0%, rgba(129,32,227,1) 100%);
  }
`;

const GlobalStyle = createGlobalStyle`
  div${HeaderWrapper} {
    background: green;
  }
`

const HeaderContent = styled.div`
  padding: 0 3%;   
  display: flex;
  justify-content: space-around;
`

const StyledImg = styled(Img)`
  height: 100%;
  margin: 0 2%;
  width: 10%;
`
const NavBar = styled.div`
  margin: 0 2%;
  align-items: center;
  display: flex;
`

const StyledLink = styled(Link)`
  color: white;
  width: 100%;
  padding: 0 6%;
  text-decoration: none;   
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
