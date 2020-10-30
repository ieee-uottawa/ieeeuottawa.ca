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
            'react-dom': '@hot-loader/react-dom'
        };
    }
};

const { getPages } = require(`./src/utils/routes`);

exports.createPages = async ({ actions, graphql, reporter }) => {
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
            isPermanent: true
        });
    }

    // Generate VR pages
    const vrTemplate = require.resolve(`./src/templates/vrTemplate.js`);
    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            vr: true,
            path: node.frontmatter.slug,
            component: vrTemplate,
            context: {
                layout: null,
                vr: true,
                // additional data can be passed via context
                slug: node.frontmatter.slug
            }
        });
    });
};
