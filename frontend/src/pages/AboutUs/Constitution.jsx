import React from 'react';
import ExternalRedirect from '../../components/Routers/ExternalRedirect';
import constitutionPDF from '../../../static/files/IEEE-Constitution-2020-2021.pdf';

const Constitution = () => (
    <ExternalRedirect
        forceExternal
        url={constitutionPDF}
        urlDescription="our constitution"
    />
);

export default Constitution;
