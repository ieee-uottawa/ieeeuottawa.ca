import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { event } from 'react-ga';
import Link from './link';

class ExternalRedirect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 5,
      intervalID: null
    };
  }

  componentDidMount() {
    this.state.intervalID = setInterval(() => {
      const { seconds } = this.state;
      if (seconds === 1) {
        this.stopTimer();
        const { url } = this.props;
        window.location.replace(url);
      }
      this.setState({ seconds: seconds - 1 });
    }, 1000);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  stopTimer() {
    const { intervalID } = this.state;
    clearInterval(intervalID);
  }

  render() {
    const { url, urlDescription, forceExternal } = this.props;
    const { seconds } = this.state;
    const description = urlDescription || url;

    return (
      <div className="p-margins center-horizontal center-vertical">
        <Typography variant="h4" gutterBottom>
          You will be redirected to {description} in {seconds} seconds.
        </Typography>
        <Typography variant="h4" gutterBottom>
          <Link
            to={url}
            href={url}
            eventLabel={url}
            forceExternal={forceExternal}
            style={{ color: '#3498db' }}
            onClick={() =>
              event({
                category: 'Waiting',
                action: 'Clicked link early',
                label: description
              })
            }
          >
            Click here
          </Link>{' '}
          to be redirected there now.
        </Typography>
      </div>
    );
  }
}

ExternalRedirect.propTypes = {
  url: PropTypes.string.isRequired,
  urlDescription: PropTypes.string,
  forceExternal: PropTypes.bool
};

ExternalRedirect.defaultProps = {
  urlDescription: null,
  forceExternal: false
};

export default ExternalRedirect;
