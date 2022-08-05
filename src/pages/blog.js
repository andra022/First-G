import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading='Blog Posts' pageTitle="My Blog Posts">
        {
        data.allMdx.nodes.map( node => (
           <article key={node.id}>
            <h2>{node.frontmatter.Title}</h2>
            <p>{node.frontmatter.Date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
           </article>
         ) )
        }
    </Layout>
  )
}

export const query = graphql`
query MQuery {
  allMdx(sort: {fields: frontmatter___Date, order: DESC}) {
    nodes {
      frontmatter {
        Date(formatString: "MMMM D, YYYY")
        Title
      }
      id
      body
    }
  }
}
`

export default BlogPage