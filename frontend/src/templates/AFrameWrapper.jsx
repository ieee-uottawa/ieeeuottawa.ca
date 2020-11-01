import React from 'react';
import PropTypes from 'prop-types';
import { vrformatName } from '../utils/util';
import 'aframe';

export default function AFrameWrapper({ publicURL, name }) {
    return (
        <a-scene>
            <a-sky src={publicURL} />
            <a-text
                font="kelsonsans"
                value={vrformatName(name)}
                width="6"
                position="-3 1 -3"
                rotation="0 15 0"
                text=""
            />
        </a-scene>
    );
}

AFrameWrapper.defaultProps = {
    publicURL: null,
    name: null
};

AFrameWrapper.propTypes = {
    publicURL: PropTypes.string,
    name: PropTypes.string
};
