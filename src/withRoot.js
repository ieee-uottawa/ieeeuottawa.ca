import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

import getPageContext, { getCurrentTheme } from './getPageContext';

function withRoot(Component) {
    let muiPageContext = null;

    class WithRoot extends React.Component {
        constructor(props) {
            super(props);
            muiPageContext = getPageContext();
        }

        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#server-side-jss');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        render() {
            return (
                <JssProvider
                    generateClassName={muiPageContext.generateClassName}
                >
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => {
                            const currentTheme = getCurrentTheme(theme);
                            /* MuiThemeProvider makes the theme available down the React tree thanks to React context. */
                            return (
                                <MuiThemeProvider
                                    theme={currentTheme}
                                    sheetsManager={muiPageContext.sheetsManager}
                                >
                                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                                    <CssBaseline />
                                    <Component
                                        {...this.props}
                                        theme={theme}
                                        toggleTheme={toggleTheme}
                                    />
                                </MuiThemeProvider>
                            );
                        }}
                    </ThemeToggler>
                </JssProvider>
            );
        }
    }

    return WithRoot;
}

export default withRoot;
