import React from 'react';
import PropTypes from 'prop-types';
import Link from './link';

const NavButton = ({ link, title, component: NavComponent, ...other }) => {
  let linker = link;
  if (!link) linker = `/${title.toLowerCase().replace(/ /g, '-')}`;
  return (
    <NavComponent color="inherit" component={Link} to={linker} {...other}>
      {title}
    </NavComponent>
  );
};

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
};

export default NavButton;
