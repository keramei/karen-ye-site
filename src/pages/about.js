import React from "react";
import g from "glamorous";

import { rhythm } from "../utils/typography";

const Title = g.h2({
  display: `inline-block`,
  width: "100%",
  textAlign: `center`,
});

const About = g.div({
  lineHeight: rhythm(2),
})

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <About>
      <Title>{frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </About>
  );
};

export const query = graphql`
  query AboutQuery {
    markdownRemark(
      fields: {
        slug: { eq: "/about/" }
      }
    ) {
      html
      frontmatter{
        title
      }
    }
  }
`;
