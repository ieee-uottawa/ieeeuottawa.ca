import React from 'react';
import {
    Typography,
    GridList,
    GridListTile,
    GridListTileBar,
    withTheme
} from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { ChevronRightIcon, ExecCard, Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';
import Img from 'gatsby-image';

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
                            childImageSharp {
                                fixed(width: 300, height: 200) {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={({ allFile: { edges } }) => (
            <div>
                <div
                    style={{
                        margin: '2rem auto',
                        maxWidth: '910px',
                        textAlign: 'center'
                    }}
                >
                    <Title variant="h5" gutterBottom className="title">
                        {translate('VR Campus')}
                    </Title>
                    <br />

                    <Typography>
                        Welcome to IEEE uOtttawa's virtual campus photo spheres.
                    </Typography>
                    <br />
                    <div
                        style={{
                            display: 'inline-grid',
                            gridTemplateColumns: 'repeat(auto-fit, 300px)',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        {edges.map(({ node, i }) => {
                            // Every node delineates the category. It should be
                            // sorted before this point so the categories are in order.
                            return (
                                <div
                                    style={{
                                        padding: '4px',
                                        position: 'relative'
                                    }}
                                    key={i}
                                >
                                    <a
                                        href={`/vr/${node.name}`}
                                        style={{
                                            padding: '0',
                                            margin: '0'
                                        }}
                                    >
                                        <img
                                            src={node.childImageSharp.fixed.src}
                                            alt={`/vr/${node.name}`}
                                            style={{
                                                display: 'block',
                                                width: '300px',
                                                height: '200px',
                                                borderRadius: '10px'
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '30px',
                                                left: '10px'
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: 'white',
                                                    textShadow:
                                                        '-2px 2px 2px black'
                                                }}
                                            >
                                                {fixName(node.name)}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <br />
                </div>
            </div>
        )}
    />
);

export default VR_Campus;
