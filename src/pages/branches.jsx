import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Title from '../components/title';

class Branches extends Component {

  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>

        <Title variant="h5" gutterBottom className="title"> Branches </Title>

        <Typography className="center-horizontal" variant="body1" style={pStyle}> No office hours for summer semester,contact
          <a href={"mailto:" + "chair@ieeeuottawa.ca"} style={{ color: '#3498db' }}> chair@ieeeuottawa.ca </a>
          if you need access to Office
        </Typography>

      </div>
    );
  }
}

export default Branches
