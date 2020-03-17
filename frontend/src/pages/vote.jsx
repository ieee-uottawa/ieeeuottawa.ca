import React from 'react';
// import Vote from './Elections/Vote';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp, isServerSideRendering } from '../util';

const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'safari://ieeeuottawa.ca/vote';

const vote = () => {
    let text = 'tester';
    if (!isServerSideRendering() && isFacebookApp()) {
        text += '1';
        // window.location.href = 'https://ieeeuottawa.ca';
        window.open('https://ieeeuottawa.ca', '_blank');
        text += '2';
    }
    text += '3';
    return (
        <>
            {/* <Vote /> */}
            {/* {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    urlDescription="our voting page"
                />
            )} */}
            {text}
            {/* {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrliOS}
                    urlDescription="our voting page"
                />
            )} */}
        </>
    );
};

export default vote;
