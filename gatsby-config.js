module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `words`,
        path: `${__dirname}/words`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
