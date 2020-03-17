import React from 'react';
import Vote from './Elections/Vote';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp } from '../util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'x-web-search://?http://ieeeuottawa.ca/vote';

const vote = () => {
    return (
        <>
            {!isFacebookApp() && <Vote />}
            {/* Android */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    seconds={3}
                    urlDescription="our voting page"
                />
            )}
            {/* iOS */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrliOS}
                    seconds={4}
                    urlDescription="our voting page"
                />
            )}
        </>
    );
};

export default vote;
