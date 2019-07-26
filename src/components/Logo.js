import React from "react"
import styled, { keyframes } from "styled-components"
import LogoImage from '../images/logo.svg';

const Logo = () => (
  <StyledLogo />
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
    transition: 0.5s;
  }
  #bar0:hover {
    transform: translateX(500px);
  }
  #bar1:hover {
    transform: translateY(250px);
  }
  #main-shape {
    transform-origin: center;
    &:hover {
      transform: rotate(20deg);
    }
  }
`

export default Logo;

