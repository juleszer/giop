/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
    siteMetadata: {
        title: '',
        author: 'Jules Bozouklian & Loic Mastio',
        description: '',
        siteUrl: ``,
        email: '',
        phoneNumber: ''
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-netlify-cms`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-remark-relative-images`,
        `gatsby-remark-copy-linked-files`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/articles`,
                name: `articles`,
            },
        },
        {
            resolve: `gatsby-plugin-snipcart`,
            options: {
                apiKey: process.env.SNIPCART_API_KEY,
                autopop: true,
            }
        }
    ]
}
