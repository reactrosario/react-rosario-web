import React, { Fragment } from "react"
import styled from "styled-components"
import LogoImage from '../images/logo.svg';

const Logo = () => {
  return (
    <Fragment>
      <StyledLogo />
    </Fragment>
  );
}

const StyledLogo = styled(LogoImage)`
  width: 50%;
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

const Title = styled.p`
  position: absolute;
  font-weight: bold;
  font-size: 3rem;
  top: 175px;
  left: 350px;
`

export default Logo;

