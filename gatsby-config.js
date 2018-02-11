module.exports = {
  siteMetadata: {
    title: 'Test Gatsby Site',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/works`,
        name: 'works',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
};