import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading='My Blog Posts' pageTitle="My Blog Posts">
      <ul>
        {
        data.allFile.nodes.map( node => (
           <li key={node.name}>{node.name}</li>
         ) )
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage