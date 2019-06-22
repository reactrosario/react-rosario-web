import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"


const Header = () => (
  <HeaderWrapper>
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
      </NavBar>
    </HeaderContent>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  margin: 2% 0;
  background: linear-gradient(45deg, rgba(33,193,251,1) 0%, rgba(129,32,227,1) 100%);
  width: 100%;
  position: absolute;
`;

const HeaderContent = styled.div`
  padding: 1% 3%;   
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 70px;
`

const StyledLink = styled(Link)`
  color: white;
  padding: 0 6%;
  text-decoration: none;
`

const StyledImg = styled(Img)`
  height: 100%;
  margin: 0 2%;
  width: 12%;
`
const NavBar = styled.div`
  margin: 0 2%;
  width: fit-content;
  align-items: center;
  display: flex;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
