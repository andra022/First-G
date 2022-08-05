import * as React from 'react'
import Layout from '../../components/layout'
import {Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageHeading='Blog Posts' pageTitle="My Blog Posts">
        {
        data.allMdx.nodes.map( node => (
           <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.Title}
                </Link>
              </h2>
            <p>Posted: {node.frontmatter.Date}</p>
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
      slug
    }
  }
}
`

export default BlogPage