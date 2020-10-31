import React from 'react';
import 'aframe';

function fixName(name) {
    name = name.replace('--', ': ');
    name = name.replace('-', ' ');
    return name
        .trim()
        .toLowerCase()
        .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}

export default function AFrameWrapper({ publicURL, name }) {
    return (
        <a-scene>
            <a-sky src={publicURL} />
            <a-text
                font="kelsonsans"
                value={fixName(name)}
                width="6"
                position="-3 1 -3"
                rotation="0 15 0"
                text=""
            />
        </a-scene>
    );
}
