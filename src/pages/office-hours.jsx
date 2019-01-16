import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { isServerSideRendering } from '../util';

class OfficeHours extends Component {
  constructor(props) {
    super(props);

    this.state = { screenWidth: 713 };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    if (!isServerSideRendering()) window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    if (!isServerSideRendering()) window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ screenWidth: isServerSideRendering() ? 0 : window.innerWidth });
  }

  render() {
    const { screenWidth: width } = this.state;
    const imgStyle = {
      display: 'block',
      maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
      margin: width > 712 ? '0 auto 16px' : '0 16px 16px',
    };

    return (
      <div>
        <Typography variant="h5" gutterBottom className="title">Office Hours (Winter 2019)</Typography>
        <img
          src="https://scontent-yyz1-1.cdninstagram.com/vp/c2d1886c766cc1f58f1574a4d6cecd23/5CD13876/t51.2885-15/e35/50274568_315423955846548_7560457300602060458_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com"
          alt="IEEE Office Hours Fall 2018"
          style={imgStyle}
        />
      </div>
    );
  }
}

export default OfficeHours;
