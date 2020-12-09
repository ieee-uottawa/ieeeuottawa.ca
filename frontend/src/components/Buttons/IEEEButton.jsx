import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';

const IEEEButton = props => {
    const { children } = props;
    return <Button {...props}>{children}</Button>;
};

IEEEButton.propTypes = {
    children: PropTypes.any.isRequired
};

const styles = theme => ({
    root: {
        '&:hover': {
            background: theme.palette.secondary.main,
            border: '3px solid transparent'
        }
    },
    label: {
        '& span:hover': {
            color: '#FFF !important'
        }
    }
});

export default withStyles(styles)(IEEEButton);
