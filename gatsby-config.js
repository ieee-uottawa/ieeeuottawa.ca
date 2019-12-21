const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        siteUrl: 'https://www.ieeeuottawa.ca'
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
        // {
        //   resolve: 'gatsby-plugin-favicon',
        //   options: {
        //     logo: './static/images/ieee_logo_circle.png',
        //     icons: {
        //       android: true,
        //       appleIcon: true,
        //       appleStartup: true,
        //       coast: true,
        //       favicons: true,
        //       firefox: true,
        //       yandex: true,
        //       windows: true,
        //     },
        //   },
        // },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-dark-mode'
    ]
};
