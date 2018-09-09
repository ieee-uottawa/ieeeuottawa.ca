import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from 'gatsby-link';

import { ChevronDownIcon, ChevronUpIcon } from './icons';

function BlueButton(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
}

function NavButton({
  link, title, component: NavComponent, ...other
}) {
  if (!link) {
    link = title.toLowerCase()
      .replace(/ /g, '-');
  }
  return <NavComponent color="inherit" component={Link} to={link} {...other}>{title}</NavComponent>;
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

class NavDropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      anchorEl: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
      isOpen: !this.state.isOpen,
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null,
      isOpen: false,
    });
  }

  render() {
    const { anchorEl, isOpen } = this.state;
    const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;
    return (
      <div>
        <Button
          {...this.props}
          onClick={(e) => {
            this.props.onClick(e);
            this.handleClick(e);
          }}
        >
          {this.props.children}
          {icon}
        </Button>
        <Popper open={isOpen} anchorEl={anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <MenuList>
                  {this.props.items.map(({ title, link }) => <NavButton title={title} link={link} component={MenuItem} onClick={this.handleClose} />)}
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

NavDropDown.propTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};

NavDropDown.defaultProps = {
  onClick: () => {
  },
};

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

const ieeeButton = withStyles(styles)(BlueButton);

export { ieeeButton as IEEEButton, NavDropDown, NavButton };

