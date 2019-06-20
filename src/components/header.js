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
      <StyledLink to="/" />
    </HeaderContent>
  </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  margin: 3% 0;
  background: linear-gradient(45deg, rgba(33,193,251,1) 0%, rgba(129,32,227,1) 100%);
  width: 100%;
  position: absolute;
`;

const HeaderContent = styled.div`
  padding: 1% 3%;   
  position: relative;
  display: flex;
  height: 80px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledImg = styled(Img)`
  height: 100%;
  width: 12%;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
