import React from "react";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  let images = [];
  for (var idx in frontmatter.images) {
    images.push(
     <img key={idx} src={frontmatter.images[idx]} />
    );
  }
  return (
    <div className="work-container">
      <div className="work-post">
        <h1>{frontmatter.title}</h1>
        {images}
        <div
          className="work-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        images
      }
      html
    }
  }
`;