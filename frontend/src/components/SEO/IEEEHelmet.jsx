import React from 'react';
import Helmet from 'react-helmet';
import { logo1 as logo } from '../../helpers/theme';
import favicon from '../../../static/images/ieee_logo_circle.png';
import '../../layouts/index.scss';

const IEEEHelmet = () => {
    return (
        <Helmet
            title="IEEE uOttawa Student Branch"
            link={[
                {
                    rel: 'shortcut icon',
                    type: 'image/png',
                    href: `${favicon}`
                }
            ]}
        >
            <meta
                property="og:image"
                content={`https://ieeeuottawa.ca${logo}`}
            />
            <meta property="og:title" content="IEEE uOttawa Student Branch" />
            <meta
                property="og:description"
                content="The IEEE uOttawa Student Branch is the official student branch for the University of Ottawa and the official Sub-Association for ELG/CEG/SEG under the ESS. The University of Ottawa’s IEEE Student Branch was established to provide professional services to improve each student’s experience on campus. This includes accommodating students with access to up-to-date equipment, internet access, textbooks and a quiet work environment."
            />
            <meta property="og:url" content="https://ieeeuottawa.ca/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ieeeuottawa" />
        </Helmet>
    );
};

export default IEEEHelmet;
