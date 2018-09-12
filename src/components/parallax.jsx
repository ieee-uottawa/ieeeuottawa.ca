import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { IEEEButton } from './buttons';

const ParallaxItem = (props) => {
  const alphaOverlay = 0.25;
  let button = null;
  if (props.buttonText != null) {
    let child;
    if (props.buttonURL != null) {
      child = <a href={props.buttonURL} className="white-url-txt" style={{ margin: '20px 16px' }}>{props.buttonText}</a>;
    } else {
      child = props.buttonText;
    }
    button = <IEEEButton variant="outlined" color="secondary" className="white-btn" style={{ margin: '20px 16px' }}>{child}</IEEEButton>;
  }

  return (
    <div
      style={{
        height: '240px',
        background: `linear-gradient(rgba(0, 0, 0, ${alphaOverlay}), rgba(0, 0, 0, ${alphaOverlay})), url(${props.imageURL})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div className="center">
        {props.messageText != null && (
        <Typography
          variant="headline"
          style={{ color: 'white' }}
        >
          {props.messageText}
          {button != null && button}
        </Typography>
        )}
      </div>
    </div>
  );
};

ParallaxItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  messageText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonURL: PropTypes.string,
};

ParallaxItem.defaultProps = {
  messageText: null,
  buttonText: null,
  buttonURL: null,
};

export default ParallaxItem;
