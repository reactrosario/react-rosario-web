/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import backgroundImage from "../images/background.png"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Body>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </Body>
    )}
  />
)

const Body = styled.div `
  background-color: black;
  background-size: cover;
  background-image: url(${backgroundImage});
  background-size: cover;
  font-family: 'Nanum Gothic', sans-serif;
  color: white;
  height: -webkit-fill-available;
  height: 1000px;
  position: absolute;
  width: 100%;
`

const StyledMain = styled.main`
  margin: 0 2%;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
