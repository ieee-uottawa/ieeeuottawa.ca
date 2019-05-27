import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './service-item.scss';

const ServiceItem = (props, style) => (
  <span className="services-item">
    <span className="icon-container" styles={style}>
      {props.icon}
    </span>
    <Typography variant="h6" className="services-item-title">
      {props.title}
    </Typography>
    <Typography variant="subtitle1" className="services-item-body">
      {props.body}
    </Typography>
  </span>
);

ServiceItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const styles = theme => ({
  //root: {
      border: `2px solid ${theme.palette.text.primary}`,
  //},
});

export default withStyles(styles)(ServiceItem);

//export default ServiceItem;
