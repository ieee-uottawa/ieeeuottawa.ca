import React from 'react';
import { Typography } from '@material-ui/core';

const VR_Campus = () => {
    return (
        <div>
            <Typography
                variant="h5"
                style={{
                    padding: '8px',
                    textAlign: 'left',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontSize: '18px'
                }}
            >
                <h1>VR Campus</h1>
                <p>
                    Check back soon for a selection of 360-degree photos of the
                    uOttawa SITE/CBY buildings.
                </p>
            </Typography>
        </div>
    );
};

export default VR_Campus;
