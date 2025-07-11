import { graphql } from "gatsby"
import React from "react"
import * as styles from "./index.module.css"
import Container from "../components/Container"
import MainTechnologies from "../components/MainTechnologies"
import MainDataPlatformFeatures from "../components/MainDataPlatformFeatures"
import MainFeatures from "../components/MainFeatures"
import AboutTelenor from "../components/AboutTelenor"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import Divider from "../components/Divider"

const Index = () => (
  <Layout className={styles.main}>
    <Container>
      <MainFeatures />
    </Container>
    <Divider />
    <Container>
      <MainTechnologies />
    </Container>
      <Divider />
    <Container>
      <MainDataPlatformFeatures />
    </Container>
    <Container>
      <AboutTelenor />
    </Container>
  </Layout>
)

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Telenor's application platform" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
