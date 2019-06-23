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

import Header from "./header"
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
        <main>{children}</main>
        <Footer />
      </Body>
    )}
  />
)

const Body = styled.div `
  background-color: black;
  background-size: cover;
  background-image: url(${backgroundImage});
  font-family: 'Nanum Gothic', sans-serif;
  color: white;
  height: -webkit-fill-available;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
