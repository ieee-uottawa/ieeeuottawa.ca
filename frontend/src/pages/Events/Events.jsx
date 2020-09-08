import React from 'react';
import GridList from '@material-ui/core/GridList';
import { graphql, StaticQuery } from 'gatsby';
import { Event, Title } from '../../helpers/components';
import { translate, translateDescription } from '../../helpers/translation';

const Events = () => (
    <StaticQuery
        query={graphql`
            query {
                allEventsJson(sort: { fields: id, order: DESC }) {
                    edges {
                        node {
                            id
                            name
                            description
                            FR
                            url
                            image {
                                childImageSharp {
                                    fixed(width: 230, height: 230) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={({ allEventsJson: { edges } }) => (
            <div>
                <Title variant='h5' gutterBottom className='title'>
                    {translate('Events')}
                </Title>
                <GridList id='event-grid' cols={2}>
                    {edges.map(
                        ({
                            node: {
                                id,
                                image: {
                                    childImageSharp: { fixed: image },
                                },
                                name,
                                description: EN,
                                FR,
                                url,
                            },
                        }) => (
                            <Event
                                key={String(id)}
                                id={String(id)}
                                image={image}
                                name={name}
                                description={translateDescription(EN, FR)}
                                url={url}
                            />
                        )
                    )}
                </GridList>
            </div>
        )}
    />
);

export default Events;
