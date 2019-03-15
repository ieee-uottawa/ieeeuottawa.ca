import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { NavButton } from '../buttons/nav-button';
import { NavDropDown } from '../buttons/nav-dropdown';

const MaterialMenu = ({items: originalItems, width, isOpen, anchorEl, onClose, ...menuProps}) => {
  const [items, setItems] = useState(originalItems);
  const [menuLevel, setMenuLevel] = useState(1)

  function handleMobileDropdown(newItems) {
    if (isWidthDown('sm', width)) {
      setItems(newItems);
      setMenuLevel(prev => prev + 1);
    }
  }

  return (
    <Menu {...menuProps} key={`menu-lvl-${menuLevel}`} open={isOpen} anchorEl={anchorEl} onClose={onClose}>
      {items.map(({ title, link, items: navItems }) => {
        if (!navItems) return <NavButton key={`btn-${title}`} title={title} link={link} component={MenuItem} onClick={onClose} />;
        return (
          <NavDropDown key={`menu-${title}`} color="inherit" items={items} component={MenuItem} onClick={() => handleMobileDropdown(navItems)}>
            {title}
          </NavDropDown>
        );
      })}
    </Menu>
  );
};

MaterialMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

MaterialMenu.defaultProps = {
  onClose: () => {},
  anchorEl: null,
};
