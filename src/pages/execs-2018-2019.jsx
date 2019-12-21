/* eslint-disable camelcase */
import React from 'react';
import { Typography, GridList } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import Title from '../components/title';
import ExecCard from '../components/ExecCard';

const Execs_2018_2019 = () => (
    <StaticQuery
        query={graphql`
            query {
                allExecs20182019Json {
                    edges {
                        node {
                            name
                            position
                            email
                            image {
                                childImageSharp {
                                    fixed(width: 166, height: 166) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={({ allExecs20182019Json: { edges } }) => {
            return (
                <div>
                    <Title variant="h5" gutterBottom className="title">
                        About Us
                    </Title>
                    <div style={{ margin: '0 5% 0' }}>
                        <Typography variant="body1" className="p-margins">
                            The IEEE uOttawa Student Branch is the official
                            student branch for the University of Ottawa and the
                            official Sub-Association for ELG/CEG/SEG under the
                            ESS.
                        </Typography>
                        <Typography variant="body1" className="p-margins">
                            The University of Ottawa’s IEEE Student Branch was
                            established to provide professional services to
                            improve each student’s experience on campus. This
                            includes accommodating students with access to
                            up-to-date equipment, internet access, textbooks and
                            a quiet work environment.
                        </Typography>
                        <Typography variant="body1" className="p-margins">
                            *Disclaimer: The opinions and content carried by
                            this page are those of its owners or operators, not
                            of IEEE.
                        </Typography>
                    </div>

                    <Typography
                        variant="h6"
                        gutterBottom
                        className="center-horizontal"
                    >
                        Our Execs
                    </Typography>
                    <GridList cols={5} style={{ margin: '0 5% 0' }}>
                        {edges.map(
                            ({ node: { name, position, image, email } }) => (
                                <ExecCard
                                    name={name}
                                    email={email}
                                    key={email}
                                    position={position}
                                    image={image}
                                />
                            )
                        )}
                    </GridList>
                </div>
            );
        }}
    />
);

export default Execs_2018_2019;
