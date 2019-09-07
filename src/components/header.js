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
        render={(data) => <StyledImg fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
      <NavBar>
        <StyledLink to="/">Inicio</StyledLink>
        <StyledLink to="/">Blog</StyledLink>
        <StyledLink to="/">Contacto</StyledLink>
        <StyledLink to="/contributors">Contribuyentes</StyledLink>
      </NavBar>
    </HeaderContent>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  margin: 2% 0;
  width: 100%;

  && {
    background: linear-gradient(45deg, rgba(33,193,251,1) 0%, rgba(129,32,227,1) 100%);
    // background: linear-gradient(45deg, rgba(129,32,227,1) 100%, rgba(33,193,251,1) 0%);
  }
`;

const GlobalStyle = createGlobalStyle`
  div${HeaderWrapper} {
    background: green;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledImg = styled(Img)`
  height: 100%;
  margin: 0 2%;
  width: 90px;
`
const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`

const StyledLink = styled(Link)`
  display: flex;
  flex: 1 1 0;
  margin-right: 15px;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  transition: border 1s linear forward;
  &:hover, &:focus {
    border-bottom: 3px solid white;
  }
`

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
