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

const ElectionPlatforms2020 = () => (
    <StaticQuery
        query={graphql`
            query {
                dataJson {
                    VP_Communications {
                        name
                        platform {
                            en
                            fr
                        }
                    }
                    Vice_Chair {
                        name
                        platform {
                            en
                        }
                    }
                    McNaughton_Centre_Director {
                        name
                        platform {
                            en
                        }
                    }
                    VP_External {
                        name
                        platform {
                            en
                            fr
                        }
                    }
                    Treasurer {
                        name
                        platform {
                            en
                        }
                    }
                    VP_Internal {
                        name
                        platform {
                            en
                            fr
                        }
                    }
                    WIE_Chair {
                        name
                        platform {
                            en
                        }
                    }
                    WIE_Vice_Chair {
                        name
                        platform {
                            en
                        }
                    }
                    Chair {
                        name
                        platform {
                            en
                        }
                    }
                    VP_Social {
                        name
                        platform {
                            en
                            fr
                        }
                    }
                    VP_Academic {
                        name
                        platform {
                            en
                            fr
                        }
                    }
                }
            }
        `}
        render={({ dataJson }) => (
            <div>
                <Title variant="h5" gutterBottom className="title">
                    Election Platforms
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
                        <div>
                            <Typography
                                variant="h5"
                                gutterBottom
                                style={{ margin: '8px' }}
                            >
                                {position.replace(/_/g, ' ')}
                            </Typography>
                            {candidates.map(({ name, platform }) => (
                                <CandidateCard
                                    name={name}
                                    platform={platform}
                                />
                            ))}
                        </div>
                    ))}
            </div>
        )}
    />
);

export default ElectionPlatforms2020;
