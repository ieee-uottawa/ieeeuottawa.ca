import React from 'react';
import { graphql } from 'gatsby';
import { Typography } from '@material-ui/core';

// The 'data' prop will be injected by the GraphQL query below.
export default function Template({ data }) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;
    return (
        <div className="blog-post-container">
            <Typography
                style={{
                    padding: '8px',
                    textAlign: 'left',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontSize: '18px'
                }}
            >
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </Typography>
        </div>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;
