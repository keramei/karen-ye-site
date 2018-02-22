import React from "react";
import g from "glamorous";

const Title = g.h2({
  textTransform: `lowercase`,
});

const Images = g.figure({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  textAlign: `center`,
})

export default ({ data, transition }) => {
  if (data === null || data.markdownRemark === null) {
    return (<div>There's nothing here :(</div>)
  }
  const { markdownRemark } = data;
  const { fields, frontmatter, html } = markdownRemark;

  let image = null;
  if (fields.collection !== "narratives") {
    image = (<img src={frontmatter.cover} />);
  }
  return (
    <div style={transition && transition.style}>
      <Images>
        {image}
        <Title>{frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Images>
    </div>
  );
};

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        collection
      }
      frontmatter {
        title
        cover
      }
      html
    }
  }
`;