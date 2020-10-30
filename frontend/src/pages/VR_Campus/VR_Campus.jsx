import React from 'react';
import { Typography, GridList } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { ExecCard, Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';

function fixName(name) {
    name = name.replace('--', ': ');
    name = name.replace('-', ' ');
    return name
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}

const VR_Campus = () => (
    <StaticQuery
        query={graphql`
            {
                allFile(
                    filter: { relativeDirectory: { eq: "vr-photo-spheres" } }
                ) {
                    edges {
                        node {
                            name
                            publicURL
                            relativePath
                        }
                    }
                }
            }
        `}
        render={({ allFile: { edges } }) => {
            console.log(edges);
            return (
                <div>
                    <div
                        style={{
                            margin: '2rem auto',
                            maxWidth: '600px'
                        }}
                    >
                        <Title variant="h5" gutterBottom className="title">
                            {translate('VR Campus')}
                        </Title>
                        <br />
                        <Typography>
                            Welcome to IEEE uOtttawa's virtual campus photo
                            spheres.
                        </Typography>
                        <br />
                        <ol>
                            {edges.map(({ node }) => {
                                // Every node delineates the category. It should be
                                // sorted before this point so the categories are in order.
                                return (
                                    <li>
                                        <a href={`/vr/${node.name}`}>
                                            <Typography>
                                                {fixName(node.name)}
                                            </Typography>
                                        </a>
                                    </li>
                                );
                            })}
                        </ol>
                        <br />
                    </div>
                </div>
            );
        }}
    />
);

export default VR_Campus;
