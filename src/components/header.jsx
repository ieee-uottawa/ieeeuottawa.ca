import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { graphql, StaticQuery } from 'gatsby';

import logo from '../../static/images/uottawa_branch_logo-2.png';
import { NavButton, NavDropDown } from './buttons';
import { CloseIcon, MenuIcon } from './icons';
import { MaterialMenu } from './material-components';
import Link from './link';
import getPageContext from './../getPageContext';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null,
      theme: 'light',
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMenuTheme = this.handleMenuTheme.bind(this);
  }

  handleMenuTheme({ currentTarget }) {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
    } else {
      this.setState({ theme: 'light' });
    }
    getPageContext(this.state.theme);
  }

  handleMenuClick({ currentTarget }) {
    this.setState({
      isOpen: true,
      anchorEl: currentTarget,
    });
  }

  handleMenuClose() {
    this.setState({
      isOpen: false,
      anchorEl: null,
    });
  }

  render() {
    const { isOpen, anchorEl } = this.state;
    return (
      <StaticQuery
        query={
          graphql`
          query {
            allNavItemsJson {
              edges {
                node {
                  title
                  link
                  items {
                    title
                    link
                  }
                }
              }
            }
          }
        `
        }
        render={({ allNavItemsJson: { edges } }) => (
          <AppBar color="default" position="sticky" style={{ padding: '0px 0 0' }}>
            <Toolbar>
              <Link to="/" href="/" style={{ flexGrow: 1 }}>
                <img
                  src={logo}
                  alt="IEEE uOttawa Logo"
                  style={{
                    maxWidth: '140px',
                    paddingTop: '15px',
                    paddingLeft: '32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                />
              </Link>
              <Hidden smDown>
                <div>
                  {edges.map(({ node: { title, link, items } }) => {
                    let navItem;

                    if (!items) {
                      navItem = <NavButton title={title} link={link} component={Button} />;
                    } else {
                      navItem = <NavDropDown color="inherit" items={items} clickBubbleDown component={Button}>{title}</NavDropDown>;
                    }

                    return navItem;
                  })}
                </div>
                <Button onClick={this.handleMenuTheme}>Dark Mode</Button>
              </Hidden>
              <Hidden mdUp>
                <div>
                  <IconButton onClick={this.handleMenuClick}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                  {isOpen && (
                    <MaterialMenu
                      anchorEl={anchorEl}
                      items={edges.map(({ node: { title, link, items } }) => ({ title, link, items }))}
                      isOpen={isOpen}
                      onClose={this.handleMenuClose}
                    />
                  )}
                </div>
              </Hidden>
            </Toolbar>
          </AppBar>
        )}
      />
    );
  }
}

export default Header;
