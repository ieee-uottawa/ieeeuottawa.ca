/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const GA = require('react-ga');
const { isDevEnvironment } = require('./src/utils/util');

module.exports.onRouteUpdate = ({ location }) => {
    if (!isDevEnvironment) {
        let path = location.pathname + location.search;
        if (path.match(/\/.*(\/).*/g)) {
            const lastSlashPos = path.lastIndexOf('/');
            path =
                path.substring(0, lastSlashPos) +
                path.substring(lastSlashPos + 1, path.length);
        }
        GA.pageview(path);
    }
};

module.exports.onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === 'undefined') {
        // eslint-disable-next-line global-require
        require('intersection-observer');
    }
};
