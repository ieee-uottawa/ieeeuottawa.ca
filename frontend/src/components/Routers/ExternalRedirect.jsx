import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { event } from 'react-ga';
import { Typography } from '../../helpers/material-ui';
import { Link } from '../../helpers/components';
import { translateRedirect, translate } from '../../helpers/translation';

class ExternalRedirect extends Component {
    constructor() {
        super();
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
                    ,,,,
                    {translateRedirect(description, seconds)}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    <Link
                        to={url}
                        href={url}
                        eventlabel={url}
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
                        {translate('Click here')}{' '}
                    </Link>
                    {translate('to be redirected there now.')}
                </Typography>
            </div>
        );
    }
}

ExternalRedirect.defaultProps = {
    forceExternal: false,
    urlDescription: null
};

ExternalRedirect.propTypes = {
    forceExternal: PropTypes.bool,
    url: PropTypes.string.isRequired,
    urlDescription: PropTypes.string
};

export default ExternalRedirect;
