import React from 'react';
import { Typography } from '../../helpers/material-ui';
import { WIEflyer as flyer } from '../../helpers/theme';
import { Title } from '../../helpers/components';
import { translate } from '../../helpers/translation';

const pStyle = {
    textAlign: 'center',
    marginBottom: '15px'
};

const imageStyle = {
    margin: '16px auto 0',
    borderRadius: '3%',
    height: '596px',
    display: 'block',
    WebkitBorderRadius: '3%',
    WebkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    marginTop: '25px',
    marginBottom: '55px'
};

const WIE = () => (
    <>
        <Title variant="h5" gutterBottom className="title">
            Big Eng Little Eng
        </Title>
        <Typography
            className="center-horizontal"
            variant="body1"
            style={pStyle}
        >
            {translate('Sign Up Now!')}
        </Typography>
        <Typography
            className="center-horizontal"
            variant="body1"
            style={pStyle}
        >
            <a
                href="https://forms.gle/iARM4Cx7oq1FBrp18"
                style={{ color: '#3498db' }}
            >
                {translate('Click here')}
            </a>
        </Typography>
        <img src={flyer} alt="big-eng-little-eng" style={imageStyle} />
    </>
);

export default WIE;
