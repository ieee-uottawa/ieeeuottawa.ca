import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Hidden, IconButton } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';
import NavButton from '../Material/NavButton';
import NavDropDown from '../Material/NavDropDown';
import { CloseIcon, MenuIcon } from '../Icons/icons';
import MaterialMenu from '../Material/MaterialMenu';
import Link from '../Routers/Link';
import Toggle from '../Buttons/Toggle/Toggle';
import sun from '../../../static/images/darkmode/sun.png';
import moon from '../../../static/images/darkmode/moon.png';
import logo from '../../../static/images/uottawa_branch_logo-2.png';
import routes from '../../routes';

const query = graphql`
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
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            anchorEl: null
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
        this.handleMenuTheme = this.handleMenuTheme.bind(this);
    }

    handleMenuTheme() {
        const { theme, toggleTheme } = this.props;
        toggleTheme(theme === 'light' ? 'dark' : 'light');
    }

    handleMenuClick({ currentTarget }) {
        this.setState({
            isOpen: true,
            anchorEl: currentTarget
        });
    }

    handleMenuClose() {
        this.setState({
            isOpen: false,
            anchorEl: null
        });
    }

    renderLogo() {
        return (
            <Link to="/" href="/" style={{ flexGrow: 1 }}>
                <img
                    src={logo}
                    alt="IEEE uOttawa Logo"
                    style={{
                        maxWidth: '140px',
                        paddingTop: '15px',
                        paddingLeft: '32px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                />
            </Link>
        );
    }

    renderMenuItems() {
        return (
            <div>
                {routes.map(({ title, link, items, component }) => {
                    if (!items) {
                        return (
                            <NavButton
                                key={title}
                                link={link}
                                loadable={component}
                                title={title}
                                component={Button}
                            />
                        );
                    }
                    return (
                        <NavDropDown
                            key={title}
                            loadable={component}
                            color="inherit"
                            items={items}
                            clickbubbledown="true"
                            component={Button}
                        >
                            {title}
                        </NavDropDown>
                    );
                })}
            </div>
        );
    }

    renderMobileMenuItems(edges) {
        const { isOpen, anchorEl } = this.state;
        return (
            <div>
                <IconButton onClick={this.handleMenuClick}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                {isOpen && (
                    <MaterialMenu
                        anchorEl={anchorEl}
                        items={edges.map(
                            ({ node: { title, link, items } }) => ({
                                title,
                                link,
                                items
                            })
                        )}
                        isOpen={isOpen}
                        onClose={this.handleMenuClose}
                    />
                )}
            </div>
        );
    }

    renderThemeToggle() {
        const { theme } = this.props;
        return (
            <Toggle
                icons={{
                    checked: (
                        <img
                            src={moon}
                            width="16"
                            height="16"
                            alt="presentation"
                            style={{
                                pointerEvents: 'none'
                            }}
                        />
                    ),
                    unchecked: (
                        <img
                            src={sun}
                            width="16"
                            height="16"
                            alt="presentation"
                            style={{
                                pointerEvents: 'none'
                            }}
                        />
                    )
                }}
                checked={theme === 'dark'}
                onClick={this.handleMenuTheme}
            />
        );
    }

    render() {
        return (
            <StaticQuery
                query={query}
                render={({ allNavItemsJson: { edges } }) => (
                    <AppBar
                        color="default"
                        position="sticky"
                        style={{ padding: '0px 0 0' }}
                    >
                        <Toolbar>
                            {this.renderLogo()}
                            <Hidden smDown>
                                {this.renderMenuItems()}
                                {this.renderThemeToggle()}
                            </Hidden>
                            <Hidden mdUp>
                                {this.renderThemeToggle()}
                                {this.renderMobileMenuItems(edges)}
                            </Hidden>
                        </Toolbar>
                    </AppBar>
                )}
            />
        );
    }
}

Header.defaultProps = {
    theme: null
};

Header.propTypes = {
    theme: PropTypes.string,
    toggleTheme: PropTypes.func.isRequired
};

export default Header;
