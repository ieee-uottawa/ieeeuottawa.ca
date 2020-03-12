import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import CandidateCard from '../../components/Cards/CandidateCard/CandidateCard';
import Title from '../../components/Titles/Title';

const positions = [
    'Chair',
    'Vice_Chair',
    'Treasurer',
    'VP_Social',
    'VP_Internal',
    'VP_Communications',
    'VP_Academic',
    'VP_External',
    'WIE_Chair',
    'WIE_Vice_Chair',
    'Webmaster',
    'Secretary',
    'McNaughton_Centre_Director'
];

const ElectionPlatforms = () => (
    <StaticQuery
        query={graphql`
            query {
                allDataJson {
                    nodes {
                        VP_Communications {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                                fr
                            }
                        }
                        Vice_Chair {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                                fr
                            }
                        }
                        McNaughton_Centre_Director {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        VP_External {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                                fr
                            }
                        }
                        Treasurer {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        VP_Internal {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        WIE_Chair {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        WIE_Vice_Chair {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        Chair {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        VP_Social {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        VP_Academic {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                        Webmaster {
                            name
                            program
                            LinkedIn
                            platform {
                                en
                            }
                        }
                    }
                }
            }
        `}
        render={({ allDataJson }) => {
            const dataJson = allDataJson.nodes[0];
            if (!dataJson) return null;
            return (
                <div>
                    <Title
                        variant="h5"
                        gutterBottom
                        className="title"
                        style={{ marginBottom: '30px' }}
                    >
                        Election Platforms (2020/2021)
                    </Title>
                    {Object.entries(dataJson)
                        .sort(
                            ([position1], [position2]) =>
                                positions.indexOf(position1) >
                                positions.indexOf(position2)
                                    ? 1
                                    : -1
                        )
                        .map(([position, candidates]) => (
                            <div key={position}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    style={{
                                        margin: '8px',
                                        textAlign: 'center',
                                        fontSize: '200%'
                                    }}
                                >
                                    {position.replace(/_/g, ' ')}
                                </Typography>
                                {candidates.map(
                                    ({ name, platform, program }) => (
                                        <CandidateCard
                                            key={name}
                                            name={name}
                                            platform={platform}
                                            program={program}
                                        />
                                    )
                                )}
                            </div>
                        ))}
                </div>
            );
        }}
    />
);

export default ElectionPlatforms;
