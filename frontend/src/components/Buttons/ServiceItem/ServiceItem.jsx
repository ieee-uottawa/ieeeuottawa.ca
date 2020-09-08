import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import './service-item.scss';

const ServiceItem = ({ icon, title, body, classes }) => (
    <span className='services-item'>
        <span className={classes.iconContainer}>{icon}</span>
        <Typography variant='h6' className='services-item-title'>
            {title}
        </Typography>
        <Typography variant='subtitle1' className='services-item-body'>
            {body}
        </Typography>
    </span>
);

ServiceItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    classes: PropTypes.any.isRequired,
};

const styles = (theme) => ({
    iconContainer: {
        width: '100px',
        height: '100px',
        border: `2px solid ${theme.palette.text.primary}`,
        borderRadius: '50%',
        display: 'inline-block',
    },
});

export default withStyles(styles)(ServiceItem);
