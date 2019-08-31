import React from 'react';
import ExternalRedirect from '../components/external-redirect';

import flyer from '../../static/files/BELEFlyer.png';
import { Typography } from '@material-ui/core';
import Title from '../components/title';


const pStyle = {
  textAlign: 'center',
  marginBottom: '15px',
};

const imageStyle = {
  margin: '16px auto 0',
  borderRadius: '3%',
  // width: '296px',
  // maxWidth: '100%',
  // height: '296px',
  height: '596px',
  display: 'block',
  webkitBorderRadius: '3%',
  webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
  boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
  // maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
  // margin: width > 712 ? '0 auto 16px' : '0 16px 16px',
  marginTop: '25px',
  marginBottom: '55px',
};

const WIE = () =>
  <div>
    <Title variant="h5" gutterBottom className="title"> Women In Engineering (WIE) </Title>
    <Typography className="center-horizontal" variant="body1" style={pStyle}> Sign Up Now! </Typography>
    <Typography className="center-horizontal" variant="body1" style={pStyle}>
        <a href={"https://forms.gle/iARM4Cx7oq1FBrp18"} style={{ color: '#3498db' }}> Click here </a>
    </Typography>
    <img src={flyer} style={imageStyle} />
  </div>;

export default WIE;

