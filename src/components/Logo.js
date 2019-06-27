import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Logo = () => (
  <LogoWrapper>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data =>
        <StyledImg
          fluid={data.placeholderImage.childImageSharp.fluid}
          imgStyle={{
            maxWidth: 900,
            objectFit: 'contain',
          }}
        />
      }
    />
  </LogoWrapper>
)

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledImg = styled(Img)`
  height: 50%;
  width: 50%;
  margin: 0 5%;
`

export default Logo;

