import React from 'react';

import { isServerSideRendering } from '../util';

const TriviaSignUp = () =>
    !isServerSideRendering() && (
        <iframe
            title="The Office Trivia Sign Up"
            id="JotFormIFrame-82485020233246"
            onLoad={window.parent.scrollTo(0, 0)}
            allowTransparency="true"
            allowFullScreen="true"
            allow="geolocation; microphone; camera"
            src="https://form.jotform.com/82485020233246"
            style={{
                width: '1px',
                minWidth: '100%',
                height: '981px',
                border: 'medium none'
            }}
            scrolling="no"
            frameBorder="0"
        />
    );

export default TriviaSignUp;
