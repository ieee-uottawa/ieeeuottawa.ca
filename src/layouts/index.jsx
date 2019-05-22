import React from 'react';
import Helmet from 'react-helmet';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { init } from '@sentry/browser';
import { initialize } from 'react-ga';

import withRoot from '../withRoot';
import Header from '../components/header';
import Footer from '../components/footer';
import cart from '../redux/reducers/cart_reducers';
import { isDevEnvironment, isServerSideRendering } from '../util';

import './index.scss';

const store = createStore(cart);

if (!isDevEnvironment) {
  console.log('Initialized DSN');
  init({
    dsn: process.env.GATSBY_SENTRY_DSN,
    environment: process.env.NODE_ENV,
  });
}

if (!isServerSideRendering()) {
  console.log('Initialized GA', isDevEnvironment ? `: ${process.env.GATSBY_ANALYTICS_ID}` : '');
  initialize({
    trackingId: process.env.GATSBY_ANALYTICS_ID,
    gaOptions: {
      head: true,
      exclude: [],
      sampleRate: 100,
      siteSpeedSampleRate: 50,
      storeGac: false,
    },
  });
}

const Layout = ({ children }) => (
  <Provider store={store}>
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Helmet
        title="IEEE uOttawa Student Branch"
        meta={[
          {
            name: 'description',
            content: 'The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS. The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment.',
          },
          {
            property:'og:image',
            content:'https://ieeeuottawa.ca/static/uottawa_branch_logo-1-3921a2598da3442d0529786dd407f274.png'
          },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '1em auto 0',
          paddingTop: '0',
          flex: '1 0 auto',
          width: '100%',
          minHeight: 'calc(100vh - 386px)',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  </Provider>
);

export default withRoot(Layout);
