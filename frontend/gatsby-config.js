const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'IEEE uOttawa Student Website',
        siteUrl: 'https://www.ieeeuottawa.ca',
        description: `IEEE uOttawa Student Website`,
        author: `@Nevin, @Rushil`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-plugin-layout',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'dataPrivate',
                path: path.join(__dirname, 'src/data')
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'dataPublic',
                path: path.join(__dirname, 'static/data')
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'static/images')
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-dark-mode',
        `gatsby-plugin-remove-trailing-slashes`
    ]
};
