import React from 'react';
import PropTypes from 'prop-types';
import { Typography, GridListTile } from '@material-ui/core';
import Img from 'gatsby-image';
import { IEEEButton } from './buttons';
import Link from './link';
import './event.scss';

const Event = ({ url, name, description, image }) => (
  <GridListTile cols={1} id="container">
    <Link to={url} href={url} eventLabel={`Clicked ${name}`}>
      <Img fixed={image} className="event-img" />
    </Link>
    <Link to={url} href={url} eventLabel={`Clicked ${name}`}>
      <Typography variant="h5" style={{ paddingBottom: '8px' }}>
        {name}
      </Typography>
    </Link>
    <Typography variant="subtitle1" style={{ whiteSpace: 'pre-line' }}>
      {`${description.substring(0, 250).trim()}\u2026`}
    </Typography>
    <br />
    <IEEEButton
      variant="outlined"
      color="secondary"
      component={Link}
      to={url}
      eventLabel={`Clicked ${name}`}
    >
      <Typography variant="button">Read more</Typography>
    </IEEEButton>
  </GridListTile>
);

Event.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Event;
