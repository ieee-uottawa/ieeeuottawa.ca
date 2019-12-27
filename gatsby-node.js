/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { getPages } = require(`./src/routes`);

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    for (const { page } of getPages()) createPage(page);

    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/home`,
        toPath: `/`,
        redirectInBrowser: true,
        isPermanent: true
    });
};
