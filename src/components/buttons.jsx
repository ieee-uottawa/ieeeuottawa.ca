import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'gatsby-link';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from './icons';
import MaterialMenu from './material-menu';

function IEEEButton(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
}

function NavButton({ link, title, component: NavComponent, ...other }) {
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

function unhideMenu(ref) {
  if (ref != null) {
    Array.from(ref.children)
      .filter(child => Array.from(child.classList)
        .some(clazz => clazz.indexOf('MuiModal-hidden') > -1))
      .forEach((child) => {
        for (let i = 0; i < child.classList.length; i += 1) {
          const clazz = child.classList.item(i);
          if (clazz != null && clazz.indexOf('MuiModal-hidden') > -1) child.classList.remove(clazz);
        }
      });
  }
}

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

  handleClick({ currentTarget }) {
    this.setState({
      anchorEl: currentTarget,
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
    const { onClick, children, items, clickBubbleDown, component: DropdownComponent } = this.props;
    const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;

    return (
      <span ref={unhideMenu}>
        <DropdownComponent
          {...this.props}
          onClick={(e) => {
            if (clickBubbleDown || !onClick) this.handleClick(e);
            if (onClick) onClick(e);
          }}
        >
          {children}
          {icon}
        </DropdownComponent>
        <MaterialMenu anchorEl={anchorEl} isOpen={isOpen} onClose={this.handleClose} items={items} />
      </span>
    );
  }
}

NavDropDown.propTypes = {
  items: PropTypes.array.isRequired,
  component: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  clickBubbleDown: PropTypes.bool,
};

NavDropDown.defaultProps = {
  onClick: () => {
  },
  clickBubbleDown: false,
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

const ieeeButton = withStyles(styles)(IEEEButton);
const navButton = withWidth()(NavButton);

export { ieeeButton as IEEEButton, NavDropDown, NavButton };

