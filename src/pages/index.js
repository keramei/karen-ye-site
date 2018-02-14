import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import { Grid, Row, Col } from 'react-flexbox-grid';

import { rhythm } from "../utils/typography";

const GalleryImg = g.img({
  "objectFit": "cover",
  "width": "100%",
  "height": "100%",
  "margin": 0,

});

const SquareBox = g.div({
  "position": "relative",
  "overflow": "hidden",

  "&:before": {
    "content": " ",
    "display": "block",
    "paddingTop": "100%",
  },
});
const SquareContent = g.div({
  "position": "absolute",
  "top": 0,
  "left": 0,
  "bottom": 0,
  "right": 0,
});

const Figure = g.figure({
  "height": "100%",
  "width": "100%",
});

const Overlay = g.div({
  "position": "absolute",
  "top": 0,
  "left": 0,
  "bottom": 0,
  "right": 0,
  "opacity": 0,
  "color": "rgb(255,255,255)",
  "backgroundColor": "rgb(0,0,0)",
  "transition": ".5s ease",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",

  "&:hover": {
    "opacity": 1,
    "backgroundColor": "rgba(0,0,0,0.5)",
  }
})
export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} >
        Gallery
      </g.H1>
      <Grid fluid>
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) =>
            <Col xs={6} md={4} style={{ "paddingBottom": "16px" }} key={node.id}>
              <Link
                to={node.fields.slug}
                css={{ textDecoration: `none`, color: `inherit` }}
              >
                <SquareBox>
                  <SquareContent>
                    <Figure>
                      <GalleryImg src={node.frontmatter.images[0]} />
                    </Figure>
                    <Overlay>
                      {node.frontmatter.title}
                    </Overlay>
                  </SquareContent>
                </SquareBox>
              </Link>
            </Col>
          )}
        </Row>
      </Grid>
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___title],
      order:ASC,
    }
  ) {
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