import React from 'react';
import GridList from '@material-ui/core/GridList';
import { graphql, StaticQuery } from 'gatsby';

import Title from '../components/Titles/Title';
import Event from '../components/Event/Event';

const query = graphql`
    query {
        allEventsJson(sort: { fields: id, order: DESC }) {
            edges {
                node {
                    id
                    name
                    description
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
`;

const Events = () => (
    <StaticQuery
        query={query}
        render={({ allEventsJson: { edges } }) => (
            <div>
                <Title variant="h5" gutterBottom className="title">
                    Events
                </Title>
                <GridList id="event-grid" cols={2}>
                    {edges.map(
                        ({
                            node: {
                                id,
                                image: {
                                    childImageSharp: { fixed: image }
                                },
                                name,
                                description,
                                url
                            }
                        }) => (
                            <Event
                                key={String(id)}
                                image={image}
                                name={name}
                                description={description}
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
