import React from "react";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div
        className="work-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
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
