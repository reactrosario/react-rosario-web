import React from "react"

import Contributor from "../components/Contributor";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contributors" />
    <Contributor name="Juan" imageName="juan" contribution="#StyledComponent" social="https://github.com/reactrosario" />
    <Contributor name="Gustavo" imageName="gustavo" contribution="#Gatsby" social="https://github.com/gustavo" />
  </Layout>
);

export default IndexPage;
