import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import logo from '../images/uottawa_branch_logo-1.png';
import { NavButton, NavDropDown } from './buttons';
import { MenuIcon, CloseIcon } from './icons';
import MaterialMenu from './material-components';
import Link from './link';

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  { title: 'Office Hours' },
  {
    title: 'Trivia',
    link: '/trivia-sign-up',
  },
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
      {
        title: 'Services - McNaughton Centre',
        link: '/mcnaughton-centre',
      },
      {
        title: 'Volunteer Opportunities',
        link: '/volunteering',
      },
      { title: 'Photos' },
    ],
  },
  {
    title: 'Shop',
    items: [
      { title: 'Shop' },
      { title: 'Cart' },
    ],
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClick({ currentTarget }) {
    this.setState({ isOpen: true, anchorEl: currentTarget });
  }

  handleMenuClose() {
    this.setState({ isOpen: false, anchorEl: null });
  }

  render() {
    const { isOpen, anchorEl } = this.state;
    return (
      <AppBar position="sticky" style={{ padding: '32px 0 0' }}>
        <Toolbar>
          <Link to="/" href="/" style={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="IEEE uOttawa Logo"
              style={{
                maxHeight: 60,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            />
          </Link>
          <Hidden smDown>
            <div>
              {navItems.map(({ title, link, items }) => {
                let navItem;

                if (!items) {
                  navItem = <NavButton title={title} link={link} component={Button} />;
                } else {
                  navItem = <NavDropDown color="inherit" items={items} clickBubbleDown component={Button}>{title}</NavDropDown>;
                }

                return navItem;
              })}
            </div>
          </Hidden>
          <Hidden mdUp>
            <div>
              <IconButton onClick={this.handleMenuClick}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              {isOpen && <MaterialMenu anchorEl={anchorEl} items={navItems} isOpen={isOpen} onClose={this.handleMenuClose} />}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
