const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `works` })
    const collection = slug.split("/")[1]
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `collection`,
      value: collection,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      createPage({
        path: "/",
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          collection: "illustrations",
        }
      });
      createPage({
        path: "/narratives/",
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          collection: "narratives",
        }
      });
      createPage({
        path: "/studies/",
        component: path.resolve(`./src/templates/gallery.js`),
        context: {
          collection: "studies",
        }
      });
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug == "/about/") { return; }
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/work-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    })
  })
};