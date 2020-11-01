import React from 'react';
import GridList from '@material-ui/core/GridList';
import { graphql, StaticQuery } from 'gatsby';
import { Event, Title } from '../../helpers/components';
import { translate, translateDescription } from '../../helpers/translation';
import { isCurrentEvent, isPastEvent } from '../../utils/util';

const query = graphql`
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
`;

const Events = () => (
    <StaticQuery
        query={query}
        render={({ allEventsJson: { edges } }) => {
            // Get yesterday's date.
            const now = new Date();
            now.setDate(now.getDate() - 1);

            return (
                <div>
                    <Title variant="h5" gutterBottom className="title">
                        {translate('Current Events')}
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
                                    description: EN,
                                    FR,
                                    url
                                }
                            }) =>
                                isCurrentEvent(id) && (
                                    <Event
                                        key={String(id)}
                                        id={String(id)}
                                        image={image}
                                        name={name}
                                        description={translateDescription(
                                            EN,
                                            FR
                                        )}
                                        url={url}
                                    />
                                )
                        )}
                    </GridList>
                    <br />
                    <hr />
                    <Title variant="h5" gutterBottom className="title">
                        {translate('Past Events')}
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
                                    description: EN,
                                    FR,
                                    url
                                }
                            }) =>
                                isPastEvent(id) && (
                                    <Event
                                        key={String(id)}
                                        id={String(id)}
                                        image={image}
                                        name={name}
                                        description={translateDescription(
                                            EN,
                                            FR
                                        )}
                                        url={url}
                                    />
                                )
                        )}
                    </GridList>
                </div>
            );
        }}
    />
);

export default Events;
