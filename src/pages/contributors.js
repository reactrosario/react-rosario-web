import React from "react"

import styled from "styled-components"
import Contributor from "../components/Contributor"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contributors = () => (
  <Layout>
    <SEO title="Contributors" />
    <ContributorsWrapper>
      <Contributor
        name="React Rosario"
        imageName="avatar-reactrosario"
        contributions={["#ReactRosario", "#Gatsby", "#StyledComponent"]}
        social="https://github.com/reactrosario"
      />
      <Contributor
        name="Macarena Gomez"
        imageName="avatar-macarena"
        contributions={["#Gatsby", "#StyledComponent"]}
        social="https://github.com/macarena"
        social2="https://www.linkedin.com/in/macarena/"
      />
      <Contributor
        name="Juan Helbert"
        imageName="avatar-juan"
        contributions={["#ContributorsPage", "#CSS"]}
        social="https://github.com/juanhelbert"
        social2="https://www.linkedin.com/in/juan-helbert-30a65516a/"
      />
      <Contributor
        name="React Rosario"
        imageName="avatar-reactrosario"
        contributions={["#ReactRosario", "#Gatsby", "#StyledComponent"]}
        social="https://github.com/reactrosario"
      />
      <Contributor
        name="Macarena Gomez"
        imageName="avatar-macarena"
        contributions={["#Gatsby", "#StyledComponent"]}
        social="https://github.com/macarena"
        social2="https://www.linkedin.com/in/macarena/"
      />
      <Contributor
        name="Juan Helbert"
        imageName="avatar-juan"
        contributions={["#ContributorsPage", "#CSS"]}
        social="https://github.com/juanhelbert"
        social2="https://www.linkedin.com/in/juan-helbert-30a65516a/"
      />
      <Contributor
        name="React Rosario"
        imageName="avatar-reactrosario"
        contributions={["#ReactRosario", "#Gatsby", "#StyledComponent"]}
        social="https://github.com/reactrosario"
      />
      <Contributor
        name="Macarena Gomez"
        imageName="avatar-macarena"
        contributions={["#Gatsby", "#StyledComponent"]}
        social="https://github.com/macarena"
        social2="https://www.linkedin.com/in/macarena/"
      />
      <Contributor
        name="Juan Helbert"
        imageName="avatar-juan"
        contributions={["#ContributorsPage", "#CSS"]}
        social="https://github.com/juanhelbert"
        social2="https://www.linkedin.com/in/juan-helbert-30a65516a/"
      />
    </ContributorsWrapper>
  </Layout>
);

const ContributorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Contributors;
