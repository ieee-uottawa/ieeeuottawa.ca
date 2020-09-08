/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// https://github.com/gatsbyjs/gatsby/issues/11934
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
    const config = getConfig();
    if (stage.startsWith('develop') && config.resolve) {
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-dom': '@hot-loader/react-dom',
        };
    }
};

const { getPages } = require(`./src/utils/routes`);

exports.createPages = ({ actions }) => {
    const { createPage, createRedirect } = actions;
    const redirectMap = { '/home': '/' };
    for (const { page, path, link } of getPages()) {
        redirectMap[link] = path;
        createPage(page);
    }
    for (const fromPath in redirectMap) {
        createRedirect({
            fromPath,
            toPath: redirectMap[fromPath],
            redirectInBrowser: true,
            isPermanent: true,
        });
    }
};
