import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function IEEEButton(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
}

const styles = theme => ({
  root: {
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  label: {
    '& span:hover': {
      color: '#FFF !important',
    },
  },
});

export default withStyles(styles)(IEEEButton);

