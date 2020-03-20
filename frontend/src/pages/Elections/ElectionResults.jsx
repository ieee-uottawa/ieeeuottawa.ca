import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Card, CardContent } from '@material-ui/core';
import { isServerSideRendering } from '../../utils/util';
import { mapDispatchToProps } from '../../helpers/actions';
// import platforms from '../../data/election-platforms-2020-2021.json';

import { Title } from '../../helpers/components';

class ElectionResults extends Component {
    constructor(props) {
        super(props);
        this.state = { electionResults: null };
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.getElectionResults().then(() => {
            const { electionResults } = this.props;
            this.setState({ electionResults });
        });
    }

    renderHeading() {
        return (
            <Typography
                variant="body1"
                className="p-margins"
                style={{ textAlign: 'center' }}
            >
                Congratulations to elected Candidates and a huge thank you to
                all of you who came out voted – we had the highest recorded
                voter turnout this year!
                <br /> <br />
            </Typography>
        );
    }

    renderAGM() {
        return (
            <Typography variant="body1" className="p-margins">
                <i>
                    For the individuals who did not get elected, there are still
                    many ways to stay involved with the IEEE, both locally and
                    on an international scope! Everyone is welcome to attend our
                    Annual General Meeting (open to all students), where we will
                    be holding by-elections for vacant executive positions, and
                    discussing other important topics –
                </i>
                {/* <a href="https://tinyurl.com/IEEEUOAGM2018"> see details </a> */}
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
                                        {position}
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
        if (!electionResults) return <>Loading...</>;
        return (
            <div>
                <Title variant="h5" gutterBottom className="title">
                    Election Results
                </Title>
                <div style={{ padding: '20px' }}>
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
