import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const BlogPage = ({data}) => (
  <Layout>
    <div>
      <h1>Latest posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
          <h3>{ post.node.frontmatter.title }</h3>
          <small>Posted by Alex on { post.node.frontmatter.date } </small>
          <br />
          <br />
          <Link to={ post.node.frontmatter.path }>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default BlogPage;