import React from 'react';
import { Typography, withStyles } from '@material-ui/core/';

const Title = ({ children, classes, style }) => (
  <Typography variant="h5" gutterBottom className={`title ${classes.root}`} style={style}>
    {children}
  </Typography>
);

const styles = theme => ({
  root: {
    '&:after': {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
  },
});

export default withStyles(styles)(Title);
