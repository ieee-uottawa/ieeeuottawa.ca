import React from 'react';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

import { IEEEButton } from '../components/buttons';
import Link from '../components/link';

import './event.scss';

const Event = props => (
  <GridListTile key={props.imageURL} cols={1} id="container">
    <Link to={props.url} href={props.url}>
      <img src={props.imageURL} alt={props.name} id="img" />
    </Link>
    <Link to={props.url} href={props.url}>
      <Typography variant="headline">
        {props.name}
      </Typography>
    </Link>
    <Typography variant="subheading">
      {props.description}
    </Typography>
    <br />
    <IEEEButton variant="outlined" color="secondary" component={Link} to={props.url}>
      <span id="btn-text">Read more</span>
    </IEEEButton>
  </GridListTile>
);

Event.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Event;

