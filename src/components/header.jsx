import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'gatsby-link';

import logo from '../images/uottawa_branch_logo-1.png';

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About Us',
    items: [
      { title: 'Our Execs' },
      { title: 'Budget' },
    ],
  },
  { title: 'Shop' },
  { title: 'Office Hours' },
  {
    title: 'Elections 2018-2019',
    link: '/elections',
  },
];

const Header = ({ siteTitle }) => (
  <AppBar position="static" style={{ padding: '32px 0' }}>
    <Toolbar>
      <Link to="/" href="/"><img src={logo} alt="IEEE uOttawa Logo" style={{ maxHeight: 60 }} /></Link>
    </Toolbar>
  </AppBar>
);

export default Header;
