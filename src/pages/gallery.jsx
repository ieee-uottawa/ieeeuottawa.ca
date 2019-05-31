import React from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import { graphql, StaticQuery } from 'gatsby';

import Title from '../components/title';
import { GalleryCard } from '../components/cards';

const Gallery = () => (
  <StaticQuery
    query={
      graphql`
        query {
          allGalleryJson {
            nodes {
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
      `
    }
    render={({ allGalleryJson: { nodes } }) => (
      <div className="center-horizontal">
        <Title variant="h5" gutterBottom className="title">Gallery</Title>

        {/* <Typography variant="h6" gutterBottom className="center-horizontal">Our Execs</Typography> */}
        <GridList cols={5} style={{ margin: '0 5.0% 0' }}>
          {nodes.map(({ image }) => <GalleryCard image={image} />)}
        </GridList>
      </div>
    )}
  />
);

export default Gallery;
