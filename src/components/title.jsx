import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Title = ({ children, classes }) => <Typography variant="h5" gutterBottom className={`title ${classes.root}`}>{children}</Typography>;

const styles = theme => ({
  root: {
    '&:after': {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
  },
});

export default withStyles(styles)(Title);