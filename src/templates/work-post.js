import React from "react";
import g from "glamorous";

const Title = g.h2({
  display: `inline-block`,
  width: `100%`,
  textAlign: `center`,
  textTransform: `lowercase`,
});

const Images = g.figure({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  textAlign: `center`,
})

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  let images = [];
  for (var idx in frontmatter.images) {
    images.push(<img key={idx} src={frontmatter.images[idx]} />);
  }
  return (
    <div>
      <Images>
        {images}
        <Title>{frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Images>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        images
      }
      html
    }
  }
`;