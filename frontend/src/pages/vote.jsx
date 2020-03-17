import React from 'react';
// import Vote from './Elections/Vote';
import ForcedExternalRedirect from '../components/Routers/ForcedExternalRedirect';
import { isFacebookApp } from '../util';

// const browserUrlAndroid = 'googlechrome://ieeeuottawa.ca/vote';
const browserUrliOS = 'safari://ieeeuottawa.ca/vote';

const vote = () => {
    return (
        <>
            {/* <Vote /> */}
            {/* {isFacebookApp() && (
                <ForcedExternalRedirect
                    url={browserUrlAndroid}
                    urlDescription="our voting page"
                />
            )} */}
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
