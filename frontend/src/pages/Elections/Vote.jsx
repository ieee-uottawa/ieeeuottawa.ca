import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Paper, Grid, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Title } from '../../helpers/components';
import { mapDispatchToProps } from '../../helpers/actions';
import { isServerSideRendering } from '../../util';
import { candidates, positions as positions_ } from '../../helpers/elections';

const query = graphql`
    query {
        allDataJson {
            nodes {
                VP_Communications {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                McNaughton_Centre_Director {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_External {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                Treasurer {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Secretary {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Internal {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                WIE_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                WIE_Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Social {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                VP_Academic {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Webmaster {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                        fr
                    }
                }
                Photonics_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
                Photonics_Vice_Chair {
                    name
                    program
                    LinkedIn
                    FB
                    profile
                    platform {
                        en
                    }
                }
            }
        }
    }
`;

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getTestAPI();
    }

    getTestAPI() {
        const { actions } = this.props;
        actions.getUsers().then(() => {
            const { users } = this.props;
            // eslint-disable-next-line no-console
            console.log('API is working: ', users);
        });
    }

    handleChange(position, event) {
        const { form } = this.state;
        const candidate = event.target.value;
        form[position] = candidate;
        this.setState({ form });
        // eslint-disable-next-line no-console
        console.log('Form Changed ', form);
    }

    sortPositions(dataJson) {
        return Object.entries(dataJson).sort(
            ([position1], [position2]) =>
                positions_.indexOf(position1) > positions_.indexOf(position2)
                    ? 1
                    : -1
        );
    }

    obtainPics(temp) {
        const pictureMap = {};
        for (const item of temp) {
            const candidates_ = item[1];
            for (const candidate of candidates_) {
                const { name, profile } = candidate;
                if (
                    name !== 'VACANT' &&
                    name.length > 0 &&
                    profile.length > 0
                ) {
                    pictureMap[name] = profile;
                }
            }
        }
        return pictureMap;
    }

    renderForm(json) {
        const formLabelStyle = {
            fontSize: '30px',
            color: '#000000',
            textAlign: 'left',
            marginBottom: '20px'
        };
        const pictureMap = this.obtainPics(json);
        const positions = Object.keys(candidates);
        return (
            <div style={{ padding: '10px' }}>
                {positions.map(position => {
                    const currentCandidates = candidates[position];
                    const hasCandidates = currentCandidates.length > 0;
                    return (
                        hasCandidates && (
                            <div key={position} style={{ margin: '30px' }}>
                                <FormControl>
                                    <FormLabel
                                        component="legend"
                                        color="primary"
                                        style={formLabelStyle}
                                    >
                                        <Typography variant="h5" gutterBottom>
                                            {position}
                                        </Typography>
                                    </FormLabel>
                                    <RadioGroup
                                        aria-label={position}
                                        name={position}
                                        onChange={event =>
                                            this.handleChange(position, event)
                                        }
                                    >
                                        {currentCandidates.map(candidate => {
                                            let imgSrc = null;
                                            if (candidate in pictureMap)
                                                imgSrc = pictureMap[candidate];
                                            return (
                                                <FormControlLabel
                                                    key={candidate}
                                                    value={candidate}
                                                    label={
                                                        <div
                                                            style={
                                                                {
                                                                    // display: 'flex',
                                                                    // alignItems: 'center'
                                                                }
                                                            }
                                                        >
                                                            {imgSrc && (
                                                                <img
                                                                    alt="pic"
                                                                    style={{
                                                                        borderRadius:
                                                                            '25%',
                                                                        verticalAlign:
                                                                            'middle',
                                                                        width:
                                                                            '70px',
                                                                        marginRight:
                                                                            '10px'
                                                                    }}
                                                                    src={imgSrc}
                                                                />
                                                            )}
                                                            {candidate}
                                                        </div>
                                                    }
                                                    control={
                                                        <Radio color="secondary" />
                                                    }
                                                />
                                            );
                                        })}
                                        {this.renderRadioButton('Abstain')}
                                        {this.renderRadioButton(
                                            'No confidence'
                                        )}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        )
                    );
                })}
                <div style={{ textAlign: 'center' }}>
                    <Button size="large" variant="contained" color="secondary">
                        SUBMIT
                    </Button>
                </div>
            </div>
        );
    }

    renderRadioButton(value) {
        return (
            <FormControlLabel
                value={value}
                label={value}
                control={<Radio color="secondary" />}
            />
        );
    }

    render() {
        return (
            <StaticQuery
                query={query}
                render={({ allDataJson }) => {
                    const dataJson = allDataJson.nodes[0];
                    if (!dataJson) return null;
                    const candidatesSorted = this.sortPositions(dataJson);
                    return (
                        <>
                            <Title variant="h5" gutterBottom className="title">
                                Vote
                            </Title>
                            <div style={{ marginTop: '30px' }}>
                                <Grid container justify="center">
                                    <Paper
                                        style={{
                                            width: '400px',
                                            marginBottom: '30px'
                                        }}
                                    >
                                        {this.renderForm(candidatesSorted)}
                                    </Paper>
                                </Grid>
                            </div>
                        </>
                    );
                }}
            />
        );
    }
}

Vote.defaultProps = {
    actions: null,
    users: null
};

Vote.propTypes = {
    actions: PropTypes.any,
    users: PropTypes.any
};

const mapStateToProps = ({ actionReducer }) => {
    return {
        users: actionReducer.users
    };
};

export default (isServerSideRendering()
    ? Vote
    : connect(
          mapStateToProps,
          mapDispatchToProps
      )(Vote));
