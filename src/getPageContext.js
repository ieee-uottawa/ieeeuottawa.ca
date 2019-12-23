/* eslint-disable no-underscore-dangle */
import { SheetsRegistry } from 'jss';
import {
    createGenerateClassName,
    createMuiTheme
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export function getCurrentTheme(mode) {
    const currentMode = mode || 'light';
    return createMuiTheme({
        palette: {
            primary: {
                main: '#FFFFFF'
            },
            secondary: blue,
            type: currentMode
        },
        typography: {
            useNextVariants: true
        }
    });
}

export function getCurrentLanguage(language) {
    const currentLanguage = language || 'EN';
    return currentLanguage;
}

function createPageContext() {
    return {
        theme: getCurrentTheme(),
        language: getCurrentLanguage(),
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName()
    };
}

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }

    return global.__INIT_MATERIAL_UI__;
}
