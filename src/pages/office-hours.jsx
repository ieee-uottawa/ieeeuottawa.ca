import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { isServerSideRendering } from '../util';

class OfficeHours extends Component {
  constructor(props) {
    super(props);

    this.state = { screenWidth: isServerSideRendering() ? 0 : window.innerWidth };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    if (!isServerSideRendering()) window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    if (!isServerSideRendering()) window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    const { screenWidth: width } = this.state;
    const imgStyle = {
      display: 'block',
      maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
      margin: width > 712 ? '0 auto' : '0 16px',
    };

    return (
      <div>
        <Typography variant="h5" gutterBottom className="title">Office Hours (Fall 2018)</Typography>
        <img
          src="https://scontent-yyz1-1.cdninstagram.com/vp/ab14411baf2acd99518ff8ef7e679eac/5C4B2248/t51.2885-15/e35/42068664_1843225942398456_3717299338623716850_n.jpg"
          alt="IEEE Office Hours Fall 2018"
          style={imgStyle}
        />
      </div>
    );
  }
}

export default OfficeHours;
