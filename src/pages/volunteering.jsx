import React from 'react';

const Volunteering = () => (
  <div>
    <p className="p-margins">
      Do you want to get more involved in your community? Do you want to help our executive committee run events for the IEEE student body? Fill
      out this form to let us know!
    </p>

    <iframe
      title="Volunteer Form"
      id="JotFormIFrame-82546672983269"
      onLoad="window.parent.scrollTo(0,0)"
      allowTransparency="true"
      allowFullScreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotform.com/82546672983269"
      frameBorder="0"
      style={{
        width: '1px',
        minWidth: '100%',
        height: '981px',
        border: 'none',
      }}
      scrolling="no"
    />
  </div>
);

export default Volunteering;

