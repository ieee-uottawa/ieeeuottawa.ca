/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

try {
    const SentryWebpackPlugin = require('@sentry/webpack-plugin');

    module.exports.onCreateWebpackConfig = ({ actions }) => {
        actions.setWebpackConfig({
            plugins: [
                new SentryWebpackPlugin({
                    include: '/public',
                    ignoreFile: '.sentrycliignore',
                })
            ]
        })
    };
} catch (e) {
    if (e.message !== 'Cannot find module \'@sentry/webpack-plugin\'') throw e;
}