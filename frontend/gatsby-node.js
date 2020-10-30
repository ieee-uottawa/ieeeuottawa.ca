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
    const vrImageTemplate = require.resolve(
        `./src/templates/vrImageTemplate.js`
    );
    const result_vr = await graphql(`
        {
            allFile(filter: { relativeDirectory: { eq: "vr-photo-spheres" } }) {
                edges {
                    node {
                        name
                        publicURL
                        relativePath
                    }
                }
            }
        }
    `);
    console.log('Result:');
    console.log(result_vr);
    // Handle errors
    if (result_vr.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result_vr.data.allFile.edges.forEach(({ node }) => {
        console.log('Creating page for:');
        console.log(node);
        createPage({
            path: `/vr/${node.name}`,
            component: vrImageTemplate,
            context: {
                vr: true,
                name: node.name,
                relativePath: node.relativePath,
                imageUrl: node.publicURL
            }
        });
    });
};
