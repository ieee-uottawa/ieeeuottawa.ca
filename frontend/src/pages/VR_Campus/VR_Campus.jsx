import React from 'react';
import { Typography } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';
import { vrformatName } from '../../utils/util';

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
                        {translate(
                            "Welcome to IEEE uOttawa's virtual campus photo spheres."
                        )}
                    </Typography>
                    <br />
                    {/** CSS Grid used here because I was having problems with Material Grid */}
                    <div
                        style={{
                            display: 'inline-grid',
                            gridTemplateColumns: 'repeat(auto-fit, 300px)',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        {edges.map(({ node }) => {
                            // Every node name delineates the category. It should be
                            // sorted before this point so the categories are in order.
                            return (
                                <div
                                    style={{
                                        padding: '4px',
                                        position: 'relative'
                                    }}
                                    key={node.name}
                                >
                                    <a href={`/vr/${node.name}`}>
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
                                                {vrformatName(node.name)}
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
