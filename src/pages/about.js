import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import logo from '../images/mikey.png';

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on the internet dedicated to showing the best
      photos, videos, and wisdom of Mikey Hilker.

      Born from the bowels of Hespler Ontario, Son to Hitler, he's flourished to the astonishing height of 5'4".
    </p>
    <img src={logo} alt="Mikey" />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`