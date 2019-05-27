import React from 'react';
import Helmet from 'react-helmet';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { init } from '@sentry/browser';
import { initialize } from 'react-ga';
import { graphql, StaticQuery } from 'gatsby';

import withRoot from '../withRoot';
import Header from '../components/header';
import Footer from '../components/footer';
import cart from '../redux/reducers/cart_reducers';
import { isDevEnvironment, isServerSideRendering } from '../util';

import './index.scss';
import logo from '../../static/images/uottawa_branch_logo-1.png';

// favicons
import appleTouchIcon from '../../static/favicon/apple-touch-icon.png';
import favicon16 from '../../static/favicon/favicon-32x32.png';
import favicon32 from '../../static/favicon/favicon-16x16.png';
// import siteManifest from '../../static/favicon/site.webmanifest';
import safariSVG from '../../static/favicon/safari-pinned-tab.svg';

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

const Layout = ({ children, theme = 'light', toggleTheme }) => (
  <Provider store={store}>
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Helmet title="IEEE uOttawa Student Branch">
        <meta property="og:image" content={`https://ieeeuottawa.ca${logo}`} />
        <meta property="og:title" content="IEEE uOttawa Student Branch" />
        <meta
          property="og:description"
          content="The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS. The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ieeeuottawa" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <StaticQuery
        query={
          graphql`
            query {
              allFaviconJson {
                edges {
                  node {
                    rel
                    sizes
                    href {
                      publicURL
                    }
                    type
                    color
                  }
                }
              }
            }
          `
        }
        render={({ allFaviconJson: { edges } }) => {
          return (
            <Helmet>
              {
                edges.map(({ node: { rel, sizes, type, color, href: { publicURL: href } } }) => {
                  const props = {
                    rel,
                    sizes,
                    type,
                    color,
                    href,
                  };
                  Object.keys(props)
                    .filter(key => !props[key])
                    .forEach(key => delete props[key]);
                  console.log(props);

                  return <link {...props} />;
                })
              }
            </Helmet>
          );
        }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
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
