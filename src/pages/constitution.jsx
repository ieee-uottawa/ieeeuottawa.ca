import React from 'react';
import ExternalRedirect from '../components/external-redirect';

import constitutionPDF from '../../static/files/IEEE-Constitution.pdf';
import { Typography } from '@material-ui/core';
import Title from '../components/title';

// const Constitution = () => <ExternalRedirect forceExternal={true} url={constitutionPDF} urlDescription="our constitution" />;

const pStyle = {
    textAlign: 'center',
    marginBottom: '15px',
  };

  const imageStyle = {
    margin: '16px auto 0',
    borderRadius: '20%',
    width: '296px',
    maxWidth: '100%',
    height: '296px',
    display: 'block',
    webkitBorderRadius: '20%',
    webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
    // maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
    // margin: width > 712 ? '0 auto 16px' : '0 16px 16px',
    marginTop: '25px',
    marginBottom: '55px',
  };

  import siteImg from '../../static/images/office-hours/site.jpg';

const Constitution = () =>
    <div>
        <Title variant="h5" gutterBottom className="title"> Constitution </Title>
        <Typography className="center-horizontal" variant="body1" style={pStyle}> Contact <a href={"mailto:" + "chair@ieeeuottawa.ca"} style={{ color: '#3498db' }}> chair@ieeeuottawa.ca </a> for most recent copy</Typography>
        <img src={siteImg} style={imageStyle} />
    </div>;

export default Constitution;

