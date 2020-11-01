import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { init } from '@sentry/browser';
import { initialize } from 'react-ga';

import { getCurrentLanguage } from '../helpers/translation';
import withRoot from '../utils/withRoot';
import { Header, Footer, IEEEHelmet } from '../helpers/components';
import { isDevEnvironment, isServerSideRendering } from '../utils/util';

import './index.scss';

// CART TEMPORARY DISABLED
// import { createStore } from 'redux';
// import cart from '../redux/reducers/cart_reducers';
// const store = createStore(cart);

import store from '../redux/store';

if (!isDevEnvironment) {
    init({
        dsn: process.env.GATSBY_SENTRY_DSN,
        environment: process.env.NODE_ENV
    });
}

if (!isServerSideRendering()) {
    initialize({
        trackingId: process.env.GATSBY_ANALYTICS_ID,
        gaOptions: {
            head: true,
            exclude: [],
            sampleRate: 100,
            siteSpeedSampleRate: 50,
            storeGac: false
        }
    });
}

const Layout = ({
    children,
    theme = 'light',
    toggleTheme,
    language = getCurrentLanguage(),
    toggleLanguage,
    pathContext
}) => {
    const AddExtraProps = Component => {
        return <Component.type {...Component.props} language={language} />;
    };
    const newComponent = AddExtraProps(children);
    const vr = pathContext.vr || false;
    if (vr) {
        return (
            <div>
                <IEEEHelmet />
                {newComponent}
            </div>
        );
    }
    return (
        <div>
            <Provider store={store}>
                <div
                    style={{
                        minHeight: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <IEEEHelmet />
                    <Header
                        theme={theme}
                        toggleTheme={toggleTheme}
                        language={language}
                        toggleLanguage={toggleLanguage}
                    />
                    <div
                        style={{
                            margin: '1em auto 0',
                            paddingTop: '0',
                            flex: '1 0 auto',
                            width: '100%',
                            minHeight: 'calc(100vh - 386px)'
                        }}
                    >
                        {newComponent}
                    </div>
                    <Footer language={language} />
                </div>
            </Provider>
        </div>
    );
};

Layout.defaultProps = {
    children: null,
    theme: 'light',
    language: 'EN',
    pathContext: null
};

Layout.propTypes = {
    children: PropTypes.any,
    theme: PropTypes.string,
    language: PropTypes.string,
    pathContext: PropTypes.any,
    toggleTheme: PropTypes.func.isRequired,
    toggleLanguage: PropTypes.func.isRequired
};

export default withRoot(Layout);
