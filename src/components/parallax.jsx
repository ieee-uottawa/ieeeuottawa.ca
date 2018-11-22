import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { IEEEButton } from './buttons';
import Link from './link';

const ParallaxItem = ({ buttonText, buttonURL, imageURL, messageText }) => {
  const alphaOverlay = 0.25;
  let button = null;
  if (buttonText != null) {
    if (buttonURL != null) {
      button = (
        <IEEEButton variant="outlined" color="secondary" className="white-btn white-url-txt" style={{ margin: '20px 16px' }} component={Link}
                    to={buttonURL}>
          {buttonText}
        </IEEEButton>
      );
    } else {
      button = <IEEEButton variant="outlined" color="secondary" className="white-btn" style={{ margin: '20px 16px' }}>{buttonText}</IEEEButton>;
    }
  }

  return (
    <div
      style={{
        height: '240px',
        background: `linear-gradient(rgba(0, 0, 0, ${alphaOverlay}), rgba(0, 0, 0, ${alphaOverlay})), url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div className="center">
        {messageText != null && (
          <Typography
            variant="h5"
            style={{ color: 'white' }}
          >
            {messageText}
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
