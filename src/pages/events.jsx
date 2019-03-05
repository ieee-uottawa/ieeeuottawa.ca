import React from 'react';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { graphql, StaticQuery } from 'gatsby';

import Event from '../components/event';

const Events = () => (
  <StaticQuery
    query={
      graphql`
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
    `
    }
    render={({ allEventsJson: { edges } }) => (
      <div>
        <Typography variant="h5" gutterBottom className="title">Events</Typography>
        <GridList id="event-grid" cols={2}>
          {edges.map(({ node: { id, image: { childImageSharp: { fixed: image } }, name, description, url } }) => (
            <Event
              key={id}
              image={image}
              name={name}
              description={description}
              url={url}
            />
          ))}
        </GridList>
      </div>
    )}
  />
);

export default Events;

