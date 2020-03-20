import React from 'react';
import Vote from './Vote';
import ForcedExternalRedirect from '../../components/Routers/ForcedExternalRedirect';
import { isFacebookApp, renderUnsupportedBrowser } from '../../utils/util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'x-web-search://?http://ieeeuottawa.ca/vote';

const VoteMain = () => {
    return (
        <>
            {renderUnsupportedBrowser()}
            {!isFacebookApp() && <Vote />}
            {/* Android */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    seconds={2}
                    urlDescription=""
                />
            )}
            {/* iOS */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrliOS}
                    seconds={3}
                    urlDescription=""
                />
            )}
        </>
    );
};

export default VoteMain;
