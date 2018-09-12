import React from 'react';
import PropTypes from 'prop-types';

const MailingListSignUp = () => (
  <iframe
    title="Mailing List Sign Up"
    id="JotFormIFrame-82547117883263"
    onLoad={window.parent.scrollTo(0, 0)}
    allowTransparency="true"
    allowFullScreen="true"
    allow="geolocation; microphone; camera"
    src="https://form.jotform.com/82547117883263"
    frameBorder="0"
    style={{
      width: '1px',
      minWidth: '100%',
      height: '539px',
      border: 'none',
    }}
    scrolling="no"
  />
);

export default MailingListSignUp;

