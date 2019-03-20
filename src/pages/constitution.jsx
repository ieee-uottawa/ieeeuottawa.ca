import React from 'react';
import ExternalRedirect from '../components/external-redirect';

import constitutionPDF from '../../static/files/IEEE-Constitution.pdf';

const Constitution = () => <ExternalRedirect forceExternal={true} url={constitutionPDF} urlDescription="our constitution" />;

export default Constitution;

