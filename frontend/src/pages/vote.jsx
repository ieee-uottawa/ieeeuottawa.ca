import React from 'react';
// import Vote from './Elections/Vote';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp, isServerSideRendering } from '../util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'safari://ieeeuottawa.ca/vote';

const vote = () => {
    // let text = 'tester';
    // if (!isServerSideRendering() && isFacebookApp()) {
    //     text += '1';
    //     // window.location.href = 'https://ieeeuottawa.ca';
    //     // window.open('https://ieeeuottawa.ca', '_blank');
    //     text += '2';
    // }
    // text += '3';
    return (
        <>
            {/* <Vote /> */}
            {/* Android */}
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    urlDescription="our voting page"
                />
            )}
            {/* iOS */}
            <a href="x-web-search://?ieeeottawa.ca">Click Here web search</a>
            {isFacebookApp() && (
                <ForcedExternalRedirect
                    url="x-web-search://?ieeeottawa.ca"
                    urlDescription="our voting page"
                />
            )}
        </>
    );
};

export default vote;
