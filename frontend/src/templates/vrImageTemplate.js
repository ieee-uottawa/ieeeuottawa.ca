import React from 'react';
import { graphql } from 'gatsby';

// The 'data' prop will be injected by the GraphQL query below.
export default function Template({ data }) {
    const { allFile } = data;

    // Get the image data.
    const { edges } = allFile;
    const node = edges[0].node;
    const { name, publicURL } = node;

    console.log(`Rendering ${publicURL}`);
    console.log(node);

    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{name}</h1>
                <img src={publicURL} />
            </div>
        </div>
    );
}

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
