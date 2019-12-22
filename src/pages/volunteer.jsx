import React from 'react';
import ExternalRedirect from '../components/Routers/ExternalRedirect';

const url =
    'https://docs.google.com/forms/d/e/1FAIpQLSfIdHz-ORmtsCgjEp2WpOV5ssXaC60nNpFzAY_qeRH4f7uX1w/viewform';

const Volunteer = () => (
    <ExternalRedirect forceExternal url={url} urlDescription="Volunteer form" />
);

export default Volunteer;
