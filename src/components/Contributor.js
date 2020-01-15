/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Contributor = ({ name, imageName, contributions, social, social2 }) => (
  <StyledContributor>
    <StyledLeft>
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
    </StyledLeft>
    <StyledRight>
      <StyledName>
        {name}
      </StyledName>
      <TagsWrapper>
        <StyledTag>
          {contributions.map((item) => `${item} `)}
        </StyledTag>
      </TagsWrapper>
      {social
        ? <SocialLink href={social} target="_blank"><FontAwesomeIcon icon={faGithub} color="white" /></SocialLink>
        : "" }
      {social2
        ? <SocialLink href={social2} target="_blank"><FontAwesomeIcon icon={faLinkedin} color="white" /></SocialLink> : ""}
    </StyledRight>
  </StyledContributor>
)

const StyledContributor = styled.div`
  width: 47%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0;
  margin: 20px auto;
  padding: 10px 0;
  transition: .3s ease; 

  &:hover {
    box-shadow: 0 12px 20px rgba(68,68,68,.5);
    transform: translateY(-2px);
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImg = styled(Img)`
  margin: 0;
  height: 80px;
  width: 80px;
  align-self: center;
  border-radius: 50%;
`
const StyledRight = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
  }
`;

const StyledName = styled.span`
  flex-direction: column;
  width: 100%;
  color: white;
  font-weight: bold;  
`

const TagsWrapper = styled.p`
  flex-direction: column;
  width: 100%;
  color: white;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 5px;
  }
`

const StyledTag = styled.span`
  color: #3daef8;
  margin-right: 10px;
`

const SocialLink = styled.a`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

Contributor.propTypes = {
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  contributions: PropTypes.array.isRequired,
  social: PropTypes.string,
  social2: PropTypes.string,
}

export default Contributor;
