import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isServerSideRendering } from '../../utils/util';
import { mapDispatchToProps } from '../../helpers/actions';
import { translate } from '../../helpers/translation';
import { Title } from '../../helpers/components';
import { Typography, Card, CardContent } from '../../helpers/material-ui';
import { electionResults } from '../../helpers/elections';

class ElectionResults extends Component {
    constructor(props) {
        super(props);
        this.state = { electionResults };
    }

    // componentDidMount() {
    //     const { actions } = this.props;
    //     actions.getElectionResults().then(() => {
    //         const { electionResults } = this.props;
    //         this.setState({ electionResults });
    //     });
    // }

    renderHeading() {
        const url = '/execs-2020-2021';
        return (
            <Typography
                variant="body1"
                className="p-margins"
                style={{ textAlign: 'center' }}
            >
                {translate(
                    'Congratulations to elected candidates and a huge thank you to all of you who came out voted!'
                )}
                <a href={url}>
                    <Typography color="secondary">
                        Click here to view our new execs and vacant positions!
                    </Typography>
                </a>
            </Typography>
        );
    }

    renderAGM() {
        return (
            <Typography variant="body1" className="p-margins">
                <i>
                    {translate(
                        'For the individuals who did not get elected, there are still many ways to stay involved with the IEEE, both locally and on an international scope! Everyone is welcome to attend our Annual General Meeting (open to all students), where we will be holding by-elections for vacant executive positions, and discussing other important topics'
                    )}
                </i>
                <br />
            </Typography>
        );
    }

    renderCandidates(electionResults) {
        const positions = Object.keys(electionResults);
        return (
            <>
                {positions.map(position => {
                    const candidatesKeys = electionResults[position];
                    const candidates = Object.keys(candidatesKeys);
                    return (
                        <div key={position} style={{ margin: '30px' }}>
                            <Card style={{ margin: '8px' }}>
                                <CardContent>
                                    <Title
                                        variant="h5"
                                        gutterBottom
                                        className="title"
                                    >
                                        {translate(position)}
                                    </Title>
                                    <div style={{ textAlign: 'center' }}>
                                        {candidates.map(candidate => {
                                            return (
                                                <div key={candidate}>
                                                    <Typography
                                                        variant="body1"
                                                        className="p-margins"
                                                    >
                                                        {candidate} (
                                                        {
                                                            candidatesKeys[
                                                                candidate
                                                            ]
                                                        }
                                                        )
                                                    </Typography>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </>
        );
    }

    render() {
        const { electionResults } = this.state;
        console.log(electionResults);
        if (!electionResults) return <></>;
        return (
            <div>
                <Title variant="h5" gutterBottom className="title">
                    {translate('Election Results')}
                </Title>
                <div style={{ padding: '15px' }}>
                    {this.renderHeading()}
                    {this.renderCandidates(electionResults)}
                    <div style={{ marginTop: '30px' }}>{this.renderAGM()}</div>
                </div>
            </div>
        );
    }
}

ElectionResults.defaultProps = {
    actions: null,
    electionResults: null
};

ElectionResults.propTypes = {
    actions: PropTypes.any,
    electionResults: PropTypes.any
};

const mapStateToProps = ({ actionReducer }) => {
    return {
        electionResults: actionReducer.electionResults
    };
};

export default (isServerSideRendering()
    ? ElectionResults
    : connect(
          mapStateToProps,
          mapDispatchToProps
      )(ElectionResults));
