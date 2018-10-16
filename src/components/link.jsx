import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <OutboundLink to={to} {...other}>
      {children}
    </OutboundLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
};

export default Link;
