import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './service-item.scss';

const ServiceItem = props => (
  <span className="services-item">
    <span className="icon-container">
      {props.icon}
    </span>
    <Typography variant="title" className="services-item-title">
      {props.title}
    </Typography>
    <Typography variant="subheading" className="services-item-body">
      {props.body}
    </Typography>
  </span>
);

ServiceItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ServiceItem;
