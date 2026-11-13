import * as React from "react";
import Blog from "../pages/blog";
import { graphql } from "gatsby";

export default Blog;

export const pageQuery = graphql`
query TemplateTagPage($tag: String) {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: {frontmatter: {updatedDate: DESC}},
    filter: {
      frontmatter: {
        draft: { ne: true }
        tags: { in: [$tag] }
      }
    }
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
          	children {
              ... on ImageSharp {
                fixed: resize(width: 700, height: 100, cropFocus: CENTER) {
                    src
                  }
              }
            }
          }
          author {
            id: jsonId
            avatar {
              children {
                ... on ImageSharp {
                  fixed: resize(width: 35, height: 35, cropFocus: CENTER) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
