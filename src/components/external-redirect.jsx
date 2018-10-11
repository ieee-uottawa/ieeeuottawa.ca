import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Link from './link';

class ExternalRedirect extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 5, intervalID: null };
  }

  componentDidMount() {
    this.state.intervalID = setInterval(() => {
      if (this.state.seconds === 1) {
        window.location.replace(this.props.url);
      }
      this.setState({ seconds: this.state.seconds - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    const { url, urlDescription } = this.props;
    const { seconds } = this.state;
    return (
      <div className="p-margins center-horizontal">
        <Typography variant="h4" gutterBottom>
          You will be redirected to {urlDescription || url} in {seconds} seconds.
        </Typography>
        <Typography variant="h4" gutterBottom><Link to={url} href={url}>Click here</Link> to be redirected there now.</Typography>
      </div>
    );
  }
}

ExternalRedirect.propTypes = {
  url: PropTypes.string.isRequired,
  urlDescription: PropTypes.string,
};

ExternalRedirect.propTypes = {
  urlDescription: null,
};

export default ExternalRedirect;

