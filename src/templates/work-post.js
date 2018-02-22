import React from "react";
import g from "glamorous";

const Images = g.figure({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  textAlign: `center`,
})

export default ({ data, transition }) => {
  if (typeof(data) === 'undefined' || data.markdownRemark === null) {
    return (<div>There's nothing here :(</div>)
  }
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <div style={transition && transition.style}>
      <Images>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Images>
    </div>
  );
};

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;