import React from 'react';
import { Typography, GridList } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import { ExecCard, Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';

const Execs_2020_2021 = () => (
    <StaticQuery
        query={graphql`
            query {
                allExecs20202021Json {
                    nodes {
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
                allComs20192020Json {
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
        render={({
            allExecs20202021Json: { nodes }
            // allComs20192020Json: { edges }
        }) => {
            return (
                <div>
                    <Title variant="h5" gutterBottom className="title">
                        {translate('About Us')}
                    </Title>
                    <div style={{ margin: '0 5% 0' }}>
                        <Typography variant="body1" className="p-margins">
                            {translate(
                                'The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS.'
                            )}
                        </Typography>
                        <Typography variant="body1" className="p-margins">
                            {translate(
                                'The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment.'
                            )}
                        </Typography>
                        <Typography variant="body1" className="p-margins">
                            {translate(
                                '*Disclaimer: The opinions and content carried by this page are those of its owners or operators, not of IEEE.'
                            )}
                        </Typography>
                    </div>

                    <Typography
                        variant="h6"
                        gutterBottom
                        className="center-horizontal"
                    >
                        {translate('Our Execs')} 2020/2021
                    </Typography>
                    <GridList cols={5} style={{ margin: '0 5% 0' }}>
                        {nodes.map(({ name, position, image, email }) => (
                            <ExecCard
                                name={name}
                                email={email}
                                key={email}
                                position={translate(position)}
                                image={image}
                            />
                        ))}
                    </GridList>
                    {/* TODO after AGM */}
                    {/* <Typography
                        variant="h6"
                        gutterBottom
                        className="center-horizontal"
                    >
                        {translate('Our Commissioners')}
                    </Typography>
                    <GridList cols={5} style={{ margin: '0 5% 0' }}>
                        {edges.map(
                            ({ node: { name, position, image, email } }) => (
                                <ExecCard
                                    name={name}
                                    email={email}
                                    key={email}
                                    position={translate(position)}
                                    image={image}
                                />
                            )
                        )}
                    </GridList> */}
                </div>
            );
        }}
    />
);

export default Execs_2020_2021;
