import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import getPageContext, { getCurrentTheme } from './getPageContext';
import { toggleLanguage } from './helpers/translation';

function withRoot(Component) {
    let muiPageContext = null;

    class WithRoot extends React.Component {
        constructor(props) {
            super(props);
            muiPageContext = getPageContext();
            this.state = { language: 'EN' };
            this.toggleLanguage = this.toggleLanguage.bind(this);
        }

        componentDidMount() {
            const jssStyles = document.querySelector('#server-side-jss');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        toggleLanguage() {
            const { language } = this.state;
            const currentLanguage = language === 'EN' ? 'FR' : 'EN';
            this.setState({ language: currentLanguage });
            toggleLanguage();
        }

        render() {
            const { language } = this.state;
            return (
                <JssProvider
                    generateClassName={muiPageContext.generateClassName}
                >
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => {
                            const currentTheme = getCurrentTheme(theme);
                            return (
                                <MuiThemeProvider
                                    theme={currentTheme}
                                    sheetsManager={muiPageContext.sheetsManager}
                                >
                                    <CssBaseline />
                                    <Component
                                        {...this.props}
                                        theme={theme}
                                        toggleTheme={toggleTheme}
                                        language={language}
                                        toggleLanguage={this.toggleLanguage}
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
