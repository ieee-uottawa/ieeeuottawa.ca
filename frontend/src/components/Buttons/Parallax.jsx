import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import IEEEButton from './IEEEButton';
import Link from '../Routers/Link';

const Parallax = ({ buttonText, buttonURL, imageURL, messageText }) => {
    const alphaOverlay = 0.25;
    let button = null;
    if (buttonText != null) {
        if (buttonURL != null) {
            button = (
                <IEEEButton
                    variant="outlined"
                    color="secondary"
                    className="white-btn white-url-txt"
                    style={{ margin: '20px 16px' }}
                    component={Link}
                    to={buttonURL}
                    eventlabel={buttonURL}
                >
                    {buttonText}
                </IEEEButton>
            );
        } else {
            button = (
                <IEEEButton
                    variant="outlined"
                    color="secondary"
                    className="white-btn"
                    style={{ margin: '20px 16px' }}
                >
                    {buttonText}
                </IEEEButton>
            );
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
                position: 'relative'
            }}
        >
            <div className="center">
                {messageText != null && (
                    <Typography variant="h5" style={{ color: 'white' }}>
                        {messageText}
                        {button != null && button}
                    </Typography>
                )}
            </div>
        </div>
    );
};

Parallax.defaultProps = {
    buttonText: null,
    buttonURL: null,
    messageText: null
};

Parallax.propTypes = {
    buttonText: PropTypes.string,
    buttonURL: PropTypes.string,
    imageURL: PropTypes.string.isRequired,
    messageText: PropTypes.string
};

export default Parallax;
