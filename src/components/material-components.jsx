import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { NavButton, NavDropDown } from './buttons';

class MaterialMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      menuLevel: 1,
    };
    this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
  }

  handleMobileDropdown(newItems) {
    if (isWidthDown('sm', this.props.width)) {
      this.setState({
        items: newItems,
        menuLevel: this.state.menuLevel + 1,
      });
    }
  }

  render() {
    const { isOpen, anchorEl, onClose, ...MenuProps } = this.props;
    const { items, menuLevel } = this.state;
    return (
      <Menu {...MenuProps} key={`menu-lvl-${menuLevel}`} open={isOpen} anchorEl={anchorEl} onClose={onClose}>
        {items.map(({ title, link, items: navItems }) => {
          if (!navItems) return <NavButton title={title} link={link} component={MenuItem} onClick={onClose} />;
          return (
            <NavDropDown color="inherit" items={items} component={MenuItem} onClick={() => this.handleMobileDropdown(navItems)}>
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
  items: PropTypes.array.isRequired,
  onClose: PropTypes.func,
};

MaterialMenu.defaultProps = {
  onClose: () => {
  },
};

class MaterialSelect extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
    this.setState({ value: event.target.value });
  }

  render() {
    const { label, items, isRequired, style } = this.props;
    const name = label.toLowerCase()
      .replace(/ /g, '-');

    return (
      <FormControl required={isRequired} style={style}>
        <InputLabel shrink htmlFor="select-placeholder">{label}</InputLabel>
        <Select
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{
            name,
            id: `${name}-input`,
          }}
          name={name}
        >
          {Object.values(items).map(value => <MenuItem value={value}>{value}</MenuItem>)}
        </Select>
      </FormControl>
    );
  }
}

MaterialSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.exact({
    key: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  })).isRequired,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.any,
};

MaterialSelect.defaultProps = {
  isRequired: false,
  onChange: () => {
  },
  style: {},
};

const materialMenu = withWidth()(MaterialMenu);

export { materialMenu as MaterialMenu, MaterialSelect };
