import React from "react";
import g from "glamorous";
import Helmet from 'react-helmet'

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
  const { markdownRemark, site } = data;
  const { frontmatter, html } = markdownRemark;

  let title = [frontmatter.title, site.siteMetadata.title].join(" - ")
  if (frontmatter.title === "Illustrations") {
    title = site.siteMetadata.title;
  }
  return (
    <div style={transition && transition.style}>
      <Helmet title={title} />
      <Images>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Images>
    </div>
  );
};

export const query = graphql`
  query WorkPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;