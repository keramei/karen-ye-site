import React from "react";
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} >
        Gallery
      </g.H1>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit`  }}
          >
            <g.H3 marginBottom={rhythm(1 / 4)}>
              <img src={node.frontmatter.images[0]} alt={node.frontmatter.title} />
            </g.H3>
          </Link>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          images
        }
      }
    }
  }
}
`