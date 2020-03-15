import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import CandidateCard from '../../components/Cards/CandidateCard/CandidateCard';
import Title from '../../components/Titles/Title';
import { positions } from '../../helpers/elections';

const query = graphql`
    query {
        allDataJson {
            nodes {
                VP_Communications {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                McNaughton_Centre_Director {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_External {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                Treasurer {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Internal {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                WIE_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                WIE_Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Social {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Academic {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Webmaster {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Photonics_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Photonics_Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
            }
        }
    }
`;

const ElectionPlatforms = () => (
    <StaticQuery
        query={query}
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
                                    ({
                                        name,
                                        platform,
                                        program,
                                        profile,
                                        LinkedIn,
                                        FB
                                    }) => (
                                        <CandidateCard
                                            key={name}
                                            name={name}
                                            platform={platform}
                                            program={program}
                                            profile={profile}
                                            LinkedIn={LinkedIn}
                                            FB={FB}
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
