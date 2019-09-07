import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Contributor = ({ name, imageName, contribution, social }) => (
  <StyledContributor>
    <StaticQuery
      query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
      render={(data) => {
        const image = data.images.edges.find((n) => n.node.relativePath.includes(imageName));
        if (!image) { return null; }
        const imageSizes = image.node.childImageSharp.sizes;
        return (
          <StyledImg
            alt={imageName}
            sizes={imageSizes}
          />
        );
      }}
    />
    {name}
    {contribution}
    <a href={social}>Github</a>
  </StyledContributor>
)

const StyledContributor = styled.div`
  height: 80px;
  margin: 2%;
  width: 100%;
  color: white;
  border-radius: 50px;

  &:hover {
  }

  $.other-style{
  }
  .another-style & {
    border: 2px solid lime; // <StyledButton> inside another element labeled ".something-else"
  }
`;

const StyledImg = styled(Img)`
  height: 100%;
  margin: 0 2%;
  width: 90px;
`

Contributor.defaultProps = {
  social: "https://github.com/reactrosario",
}

Contributor.propTypes = {
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  contribution: PropTypes.string.isRequired,
  social: PropTypes.string,
}

export default Contributor;
