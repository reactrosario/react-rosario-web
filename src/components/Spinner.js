import React from 'react'
import styled from "styled-components"
import LogoRos from '../images/logo.svg'


const Spinner = () => {
  return(
    <StyledSpinner>{LogoRos}</StyledSpinner>
  )
}

const StyledSpinner = styled.div`
  position: relative;
  width: 8em;
  height: 8em;
  background: url("../images/LogoRos.png");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  border: 3px solid #3cefff;
  border-radius: 50%;
  overflow: hidden;
  animation: spin 3s ease infinite;

&::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 8em;
  height: 8em;
  background-color: hsla(185, 100%, 62%, 0.75);
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
`

export default Spinner