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
    {/* TODO: change to as="a" */}
    <Link href="https://www.facebook.com/React-Rosario-359696574659484/">
      <span><FontAwesomeIcon  icon={faFacebookSquare} color="white"/></span>
    </Link>
    <Link href="https://github.com/reactrosario">
      <span><FontAwesomeIcon icon={faGithub} color="white" /></span>
    </Link>
    <Link href="https://www.instagram.com/reactrosario/">
      <span><FontAwesomeIcon icon={faInstagram} color="white" /></span>
    </Link>
    <Link href="https://twitter.com/reactrosario">
      <span><FontAwesomeIcon icon={faTwitter} color="white" /></span>
    </Link>
    <Link href="https://meetupjs.slack.com/"><span><FontAwesomeIcon icon={faSlack} color="white" /></span>
          
    </Link>
  </SocialShareWrapper>
)

const SocialShareWrapper = styled.div`
  margin: 0 2%;
  display: flex;
  font-size: 22px;  
`;

const Link = styled.a`
  margin: 0 12%;
  span {
  z-index: 1;
  background: transparent;
  position: relative;
  outline: none;
  border: none;
}

span:hover {
  cursor: pointer;
}

span::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px solid #04BBFF;
  transform-origin: center;
  transform: scale(0);
}

span:hover::before {
  transition: all 0.55s ease-in-out;
  transform-origin: center;
  transform: scale(2.25);
  opacity: 0;
}
span:active::before {
  transition: all 0.55s ease-in-out;
  transform-origin: center;
  transform: scale(2.25);
  opacity: 0;
}
`

export default SocialShare