import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { event } from 'react-ga';
import { Typography } from '../../helpers/material-ui';
import { Link } from '../../helpers/components';

class ForcedExternalRedirect extends Component {
    constructor(props) {
        super();
        this.state = {
            seconds: props.seconds,
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
        const description = urlDescription || url;
        return (
            <div className="p-margins center-horizontal center-vertical">
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
                    />
                </Typography>
            </div>
        );
    }
}

ForcedExternalRedirect.defaultProps = {
    forceExternal: false,
    urlDescription: null,
    seconds: 5
};

ForcedExternalRedirect.propTypes = {
    forceExternal: PropTypes.bool,
    url: PropTypes.string.isRequired,
    urlDescription: PropTypes.string,
    seconds: PropTypes.number
};

export default ForcedExternalRedirect;
