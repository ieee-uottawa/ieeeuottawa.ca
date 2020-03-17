import React from 'react';
import Vote from './Elections/Vote';
// import ExternalRedirect from '../components/Routers/ExternalRedirect';
// import { isFacebookApp } from '../util';

// const browserUrl = 'googlechrome://ieeeuottawa.ca/vote';

const vote = () => {
    return (
        <>
            <Vote />
            {/* {isFacebookApp() && (
                <ExternalRedirect
                    url={browserUrl}
                    urlDescription="our voting page"
                />
            )} */}
        </>
    );
};

export default vote;
