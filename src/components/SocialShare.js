import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faGithub,
  faInstagram,
  faTwitter,
  faSlack,
} from '@fortawesome/free-brands-svg-icons'


const SocialShare = () => (
  <SocialShareWrapper>
    {/*  TODO: change to as="a"  */}
    <Link href="https://www.facebook.com/React-Rosario-359696574659484/" target="_blank">
      <FontAwesomeIcon  icon={faFacebookSquare} color="white"/>
    </Link>
    <Link href="https://github.com/reactrosario" target="_blank">
      <FontAwesomeIcon icon={faGithub} color="white" />
    </Link>
    <Link href="https://www.instagram.com/reactrosario/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} color="white" />
    </Link>
    <Link href="https://twitter.com/reactrosario" target="_blank">
      <FontAwesomeIcon icon={faTwitter} color="white" />
    </Link>
    <Link href="https://meetupjs.slack.com/" target="_blank">
      <FontAwesomeIcon icon={faSlack} color="white" />    
    </Link>
  </SocialShareWrapper>
)

const SocialShareWrapper = styled.div`
  margin: 0 1rem;
  display: flex;
  font-size: 22px;
  justify-content: center;
`;

const Link = styled.a`
  margin: 0 12%;
  z-index: 1;
  background: transparent;
  position: relative;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    & svg {
      color: #04BBFF;
    }
  }
  
  &::before {
    content: '';
    z-index: -1;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    border: 8px solid red;
    border-radius: 50%;
    transform-origin: center;
    transform: scale(0);
  }
  &:hover::before,
  &:active::before {
    transition-duration: .2s, .4s;
    transition-property: transform, opacity;
    transition-timing-function: ease-out;
    transform-origin: center;
    transform: scale(1.8);
    opacity: 0;
  }
`

export default SocialShare