import React from 'react';
import ExternalRedirect from '../components/external-redirect';
import constitutionPDF from '../../static/files/IEEE-Constitution-2019-2020.pdf';

const Constitution = () => (
    <ExternalRedirect
        forceExternal
        url={constitutionPDF}
        urlDescription="our constitution"
    />
);

export default Constitution;
