import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from 'gatsby-link';

import logo from '../images/uottawa_branch_logo-1.png';
import { NavButton, NavDropDown } from './buttons';

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  { title: 'Office Hours' },
  { title: 'Trivia' },
  {
    title: 'Elections 2018-2019',
    link: '/elections',
  },
  {
    title: 'About Us',
    items: [
      { title: 'About Us' },
      { title: 'Budget' },
      { title: 'Constitution' },
      { title: 'IEEE Code of Conduct' },
      { title: 'Services - McNaughton Centre' },
      { title: 'Volunteer Opportunities' },
      { title: 'Photos' },
    ],
  },
  {
    title: 'Shop',
    items: [
      { title: 'Shop' },
      { title: 'Our Cart' },
    ],
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { references: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ currentTarget }) {
    this.state.references
      .filter(ref => ref)
      .forEach((ref) => {
        if (ref !== currentTarget) {
          ref.handleClose();
        }
      });
  }

  render() {
    return (
      <AppBar position="sticky" style={{ padding: '32px 0 0' }}>
        <Toolbar>
          <Link to="/" href="/" style={{ flexGrow: 1 }}><img src={logo} alt="IEEE uOttawa Logo" style={{ maxHeight: 60 }} /></Link>
          {navItems.map(({ title, link, items }) => {
            let navItem;

            if (!items) {
              navItem = <NavButton title={title} link={link} component={Button} />;
            } else {
              navItem = (
                <NavDropDown ref={ref => this.state.references.push(ref)} color="inherit" items={items} onClick={this.handleClick}>
                  {title}
                </NavDropDown>
              );
            }

            return navItem;
          })}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
