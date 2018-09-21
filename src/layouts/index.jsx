import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from '../components/header';
import Footer from '../components/footer';
import cart from '../redux/reducers/cart_reducers';

import './index.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: blue,
  },
});

const store = createStore(cart);

const Layout = ({ children, data }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div style={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Sample',
            },
            {
              name: 'keywords',
              content: 'sample, something',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '1em auto 0',
            paddingTop: '0',
            flex: '1 0 auto',
            width: '100%',
          }}
        >
          {children()}
        </div>
        <Footer />
      </div>
    </Provider>
  </MuiThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
