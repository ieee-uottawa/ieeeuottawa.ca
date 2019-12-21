import React from 'react';
import PropTypes from 'prop-types';
import Link from './link';

const NavButton = ({ link, title, component: NavComponent, ...other }) => {
    const linker = link || `/${title.toLowerCase().replace(/ /g, '-')}`;
    return (
        <NavComponent color="inherit" component={Link} to={linker} {...other}>
            {title}
        </NavComponent>
    );
};

NavButton.defaultProps = {
    component: null,
    link: null,
    title: null
};

NavButton.propTypes = {
    component: PropTypes.func,
    link: PropTypes.string,
    title: PropTypes.string
};

export default NavButton;
