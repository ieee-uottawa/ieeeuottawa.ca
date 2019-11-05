import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import { isServerSideRendering } from '../util';
import Title from '../components/title';
// import siteImg from '../../static/images/office-hours/site.jpg';
// import execsImg from '../../static/images/office-hours/execs.jpg';
import officeHoursImg from '../../static/images/office-hours/office-hours.png';

class OfficeHours extends Component {
  constructor(props) {
    super(props);

    this.state = { screenWidth: 713 };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    if (!isServerSideRendering())
      window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    if (!isServerSideRendering())
      window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      screenWidth: isServerSideRendering() ? 0 : window.innerWidth
    });
  }

  render() {
    const { screenWidth: width } = this.state;
    const imgStyle = {
      display: 'block',
      borderRadius: '12px',
      maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
      margin: width > 712 ? '0 auto 16px' : '0 16px 16px'
    };
    const pStyle = {
      textAlign: 'center',
      marginBottom: '15px'
    };

    const imageStyle = {
      // margin: '16px auto 0',
      borderRadius: '20%',
      width: '296px',
      // maxWidth: '100%',
      height: '296px',
      display: 'block',
      webkitBorderRadius: '20%',
      webkitBoxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
      boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.06)',
      maxWidth: width > 712 ? '100%' : 'calc(100% - 32px)',
      margin: width > 712 ? '0 auto 16px' : '0 16px 16px',
      marginTop: '25px',
      marginBottom: '55px'
    };

    return (
      <div>
        <Title variant="h5" gutterBottom className="title">
          Office Hours{' '}
        </Title>

        {/* <Typography className="center-horizontal" variant="body1" style={pStyle}> No office hours for summer semester,contact
          <a href={"mailto:" + "chair@ieeeuottawa.ca"} style={{ color: '#3498db' }}> chair@ieeeuottawa.ca </a>
          if you need access to Office
        </Typography> */}
        {/* <img src={siteImg} style={imageStyle} /> */}
        <img
          src={officeHoursImg}
          alt="IEEE Office Hours Winter 2019"
          style={imgStyle}
        />
      </div>
    );
  }
}

export default OfficeHours;
