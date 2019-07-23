import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import LogoImage from '../images/logo.svg';

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
  <StyledLogo />
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "logo.png" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 900) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data =>
      // <StyledImg
      //   fluid={data.placeholderImage.childImageSharp.fluid}
      //   imgStyle={{
      //     maxWidth: 900,
      //     objectFit: 'contain',
      //   }}
      // />
  //   }
  // />
)

const wiggle = keyframes`
  20%  { transform: translateX(4px);  }
  40%  { transform: translateX(-4px); }
  60%  { transform: translateX(2px);  }
  80%  { transform: translateX(-1px); }
  100% { transform: translateX(0);    }
`;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:black;
}
100%{
  fill:#61DAFB;
}
`;

const coolBoxKeyframes = keyframes`
  0% {
    height: 0px;
    background: green;
  }
  100% {
    height: 200px;
    background: blue;
  }
`

const StyledLogo = styled(LogoImage)`
  margin-top: -395px;
  .fil0, .fil1, .fil2, .fil3 {
    transition: 1s;
  }
  .fil0:hover {
    transform: translateX(500px);
  }
  .fil1:hover {
    transform: translateY(500px);
  }
`

export default Logo;

