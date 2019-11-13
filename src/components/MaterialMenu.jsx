import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import NavButton from './NavButton';
import NavDropDown from './NavDropDown';

class MaterialMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      menuLevel: 1
    };
    this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
  }

  handleMobileDropdown(newItems) {
    const { width } = this.props;
    const { menuLevel } = this.state;
    if (isWidthDown('sm', width)) {
      this.setState({
        items: newItems,
        menuLevel: menuLevel + 1
      });
    }
  }

  render() {
    const { isOpen, anchorEl, onClose, ...MenuProps } = this.props;
    const { items, menuLevel } = this.state;
    return (
      <Menu
        {...MenuProps}
        key={`menu-lvl-${menuLevel}`}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onClose}
      >
        {items.map(({ title, link, items: navItems }) => {
          if (!navItems)
            return (
              <NavButton
                title={title}
                link={link}
                component={MenuItem}
                onClick={onClose}
              />
            );
          return (
            <NavDropDown
              color="inherit"
              items={items}
              component={MenuItem}
              onClick={() => this.handleMobileDropdown(navItems)}
            >
              {title}
            </NavDropDown>
          );
        })}
      </Menu>
    );
  }
}

MaterialMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  anchorEl: PropTypes.element.isRequired,
  items: PropTypes.arrayOf.isRequired,
  onClose: PropTypes.func,
  width: PropTypes.number.isRequired
};

MaterialMenu.defaultProps = {
  onClose: () => {}
};

export default withWidth()(MaterialMenu);
