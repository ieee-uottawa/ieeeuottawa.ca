import React from 'react';
// import Vote from './Elections/Vote';
import ExternalRedirect from '../components/Routers/ExternalRedirect';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp } from '../util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'x-web-search://?http://ieeeuottawa.ca/vote';

const vote = () => {
    return (
        <>
            {/* <Vote /> */}
            {/* Android */}
            {isFacebookApp() && (
                <ExternalRedirect
                    url={browserUrlAndroid}
                    urlDescription="our voting page"
                />
            )}
            {/* iOS */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrliOS}
                    urlDescription="our voting page"
                />
            )}
        </>
    );
};

export default vote;
