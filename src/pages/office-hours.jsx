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
    const pStyle = {
      textAlign: 'center'
    };

    return (
      <div>
        <Typography variant="h5" gutterBottom className="title">Office Hours </Typography>
        <p style={pStyle}> No office hours for summer semester,contact
          <a href={"mailto:" + "chair@ieeeuottawa.ca"}> chair@ieeeuottawa.ca </a>
          if you need access to Office
          </p>
        {/* <img
          src="https://scontent.fxds1-1.fna.fbcdn.net/v/t1.15752-9/53435263_1497679790363311_4304661672842231808_n.png?_nc_cat=103&_nc_ht=scontent.fxds1-1.fna&oh=1c24b5a22e17e7d48143537dd3792920&oe=5CDE6ED1"
          alt="IEEE Office Hours Winter 2019"
          style={imgStyle}
        /> */}

      </div>
    );
  }
}

export default OfficeHours;
