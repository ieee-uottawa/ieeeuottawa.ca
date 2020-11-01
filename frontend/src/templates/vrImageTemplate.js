import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';
import loadable from '@loadable/component';
import { vrformatName } from '../utils/util';

const AFrameWrapper = loadable(() => import('./AFrameWrapper'));

// The 'data' prop will be injected by the GraphQL query below.
export default function Template({ data }) {
    const { allFile } = data;

    // Get the image data.
    const { edges } = allFile;
    const { node } = edges[0];
    const { name, publicURL } = node;

    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <Typography variant="h1">{vrformatName(name)}</Typography>
                <Typography variant="h5">
                    Loading Source file: {publicURL}
                </Typography>
                <Typography>Thank you for your patience!</Typography>
                <AFrameWrapper name={name} publicURL={publicURL} />
            </div>
        </div>
    );
}

Template.defaultProps = {
    data: null
};

Template.propTypes = {
    data: PropTypes.any
};

export const pageQuery = graphql`
    query($relativePath: String!) {
        allFile(filter: { relativePath: { eq: $relativePath } }) {
            edges {
                node {
                    name
                    publicURL
                    relativePath
                }
            }
        }
    }
`;
