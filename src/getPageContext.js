import { SheetsRegistry } from 'jss';
import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// A theme with custom primary and secondary color.
// It's optional.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: blue,
    type: 'light'
  },
  typography: {
    useNextVariants: true,
  },
});

function toggleTheme(mode) {
  theme.palette.type = mode;
}

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext(mode) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (mode) {
    toggleTheme(mode);
    console.log(theme.palette.type);
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
