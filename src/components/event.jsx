import React from 'react';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

import { IEEEButton } from './buttons';
import Link from './link';

import './event.scss';

const Event = props => (
  <GridListTile cols={1} id="container">
    <Link to={props.url} href={props.url} eventLabel={`Clicked ${props.name}`}>
      <Img fixed={props.image} className="event-img" />
    </Link>
    <Link to={props.url} href={props.url} eventLabel={`Clicked ${props.name}`}>
      <Typography variant="h5" style={{ paddingBottom: '8px' }}>
        {props.name}
      </Typography>
    </Link>
    <Typography variant="subtitle1" style={{ whiteSpace: 'pre-line' }}>
      {`${props.description.substring(0, 250).trim()}\u2026`}
    </Typography>
    <br />
    <IEEEButton variant="outlined" color="secondary" component={Link} to={props.url} eventLabel={`Clicked ${props.name}`}>
      <Typography variant="button">Read more</Typography>
    </IEEEButton>
  </GridListTile>
);

Event.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Event;
