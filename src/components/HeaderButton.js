import React from 'react'
import styled, { createGlobalStyle } from "styled-components"

import { StaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBlog, faInbox } from '@fortawesome/free-solid-svg-icons'

import Media from 'react-media'

const HeaderButton = (props) => {
  return (
    <Media query="(min-width: 599px)">
      {
        matches =>
        matches ? (
            <StyledLink to="/"><span><FontAwesomeIcon icon={props.iconName} color="white"/>&nbsp;{props.title}</span></StyledLink>
        ) : (
            <StyledLink to="/"><span><FontAwesomeIcon icon={props.iconName} color="white"/></span></StyledLink>
        )
      }
    </Media>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  margin-right: 15px;
  flex: 1 1 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  text-decoration: none;

  span {
    padding: 15px;
    position: relative;
    z-index: 1;
  }
  
  span::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    border-bottom: 4px solid #04BBFF;
    background-color: transparent;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
  
  span:hover::before {
    transform: scaleX(1);
    transform-origin: center left;
  }
`

export default HeaderButton