import React from 'react';
import GridList from '@material-ui/core/GridList';
import { graphql, StaticQuery } from 'gatsby';
import { Event, Title } from '../../helpers/components';
import { translate, translateDescription } from '../../helpers/translation';

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
            now.setDate(now.getDate()-1);

            return (
                <div>
                    <Title variant="h5" gutterBottom className="title">
                        {translate('Upcoming Events')}
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
                            }) => {
                                const date_string = String(id)
                                    .split('-')
                                    .slice(0, 3)
                                    .join('-');
                                const date = Date.parse(date_string);
                                if (date > now) {
                                    return (
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
                                    );
                                } else {
                                    return null;
                                }
                            }
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
                            }) => {
                                const date_string = String(id)
                                    .split('-')
                                    .slice(0, 3)
                                    .join('-');
                                const date = Date.parse(date_string);
                                if (date < now) {
                                    return (
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
                                    );
                                } else {
                                    return null;
                                }
                            }
                        )}
                    </GridList>
                </div>
            );
        }}
    />
);

export default Events;
