import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReactLoading from 'react-loading';

import { Title } from '../../helpers/components';
import { mapDispatchToProps } from '../../helpers/actions';
import { isServerSideRendering, isFacebookApp } from '../../utils/util';
import { candidates, sortPositions } from '../../helpers/elections';

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

const responseGoogle = response => {
    // eslint-disable-next-line no-console
    console.log('failure', response);
};

const browserUrl = 'googlechrome://ieeeuottawa.ca/vote';

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            displayForm: false,
            loggedIn: false,
            email: '',
            username: '',
            voted: false,
            loading: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.isFormCompleted = this.isFormCompleted.bind(this);
    }

    componentDidMount() {
        const { actions } = this.props;
        actions.getVotes().then(() => {
            const { votes } = this.props;
            console.log('getVotes(): ', votes);
            this.setState({ loading: false });
        });
    }

    login(googleToken) {
        const { actions } = this.props;
        this.setState({ loading: true });
        actions.login(googleToken).then(() => {
            const { voted } = this.props;
            this.setState({ voted, loading: false });
            if (voted === true) this.handleLogout();
        });
    }

    vote() {
        const { actions } = this.props;
        const { form, email } = this.state;
        this.setState({ loading: true });
        actions.vote(form, email).then(() => {
            this.setState({ loading: false });
            if (!isServerSideRendering()) {
                this.login(email);
            }
        });
    }

    handleChange(position, event) {
        const { form } = this.state;
        const candidate = event.target.value;
        form[position] = candidate;
        this.setState({ form });
    }

    handleSubmit() {
        const { email, loggedIn } = this.state;
        if (this.isFormCompleted() && email && loggedIn) {
            this.vote();
        } else {
            console.log('Failure, please try again later');
        }
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

    handleLogin(response) {
        if (response) {
            const googleToken = response.tokenId;
            const { email, givenName, familyName } = response.profileObj;
            if (this.isSchoolEmail(email)) {
                this.setState({
                    displayForm: true,
                    loggedIn: true,
                    email,
                    username: `${givenName} ${familyName}`
                });
                this.login(googleToken);
            } else {
                this.setState({ displayForm: false, loggedIn: false });
            }
        }
    }

    handleLogout() {
        this.setState({ displayForm: false, loggedIn: false });
    }

    isSchoolEmail(email) {
        return email.toLowerCase().indexOf('@uottawa.ca') > -1;
    }

    isFormCompleted() {
        const { form } = this.state;
        const submitted = Object.keys(form).length;
        return submitted === 10;
    }

    renderLoginPage() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Please log in to continue
                </Typography>
            </div>
        );
    }

    renderUnsupportedBrowser() {
        return (
            isFacebookApp() && (
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom color="secondary">
                        Unsupported Browser
                    </Typography>
                    <a href={browserUrl}>
                        <Typography variant="h5" gutterBottom color="secondary">
                            ieeeuottawa.ca/vote
                        </Typography>
                    </a>
                </div>
            )
        );
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
                                                        <div>
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
                    <Button
                        disabled={!this.isFormCompleted()}
                        onClick={this.handleSubmit}
                        size="large"
                        variant="contained"
                        color="secondary"
                    >
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

    renderLoginButton() {
        const { loggedIn, displayForm, voted } = this.state;
        return (
            !loggedIn &&
            !isFacebookApp() && (
                <div style={{ textAlign: 'center' }}>
                    <GoogleLogin
                        clientId={process.env.GATSBY_GOOGLE_SIGNIN_CLIENTID}
                        buttonText="Log in with your uOttawa email"
                        hostedDomain="uottawa.ca"
                        onSuccess={this.handleLogin}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin"
                        isSignedIn={this.handleLogin}
                    />
                    <div style={{ marginTop: '30px' }}>
                        {!displayForm && !voted && this.renderLoginPage()}
                    </div>
                </div>
            )
        );
    }

    renderLogoutButton() {
        const { loggedIn, username, email } = this.state;
        return (
            loggedIn &&
            !isFacebookApp() && (
                <div style={{ textAlign: 'center' }}>
                    <GoogleLogout
                        clientId={process.env.GATSBY_GOOGLE_SIGNIN_CLIENTID}
                        buttonText="Logout"
                        onLogoutSuccess={this.handleLogout}
                    />

                    <Typography
                        variant="h5"
                        gutterBottom
                        style={{ margin: '20px' }}
                    >
                        Welcome, {username}
                    </Typography>

                    <Typography
                        variant="h5"
                        gutterBottom
                        style={{ margin: '20px' }}
                    >
                        {email}
                    </Typography>
                </div>
            )
        );
    }

    renderVoted() {
        const { voted } = this.state;
        return (
            voted && (
                <div style={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        style={{ margin: '20px' }}
                    >
                        Thank you for voting!
                    </Typography>
                </div>
            )
        );
    }

    render() {
        const { displayForm, loading } = this.state;
        return (
            <StaticQuery
                query={query}
                render={({ allDataJson }) => {
                    const dataJson = allDataJson.nodes[0];
                    if (!dataJson) return null;
                    const candidatesSorted = sortPositions(dataJson);
                    return (
                        <>
                            <Title variant="h5" gutterBottom className="title">
                                Vote
                            </Title>
                            {this.renderLoginButton()}
                            {this.renderLogoutButton()}

                            {loading && (
                                <div style={{ textAlign: 'center' }}>
                                    <Grid container justify="center">
                                        <ReactLoading
                                            type="spin"
                                            color="#3498db"
                                        />
                                    </Grid>
                                </div>
                            )}
                            {this.renderVoted()}
                            {!loading && (
                                <div style={{ marginTop: '30px' }}>
                                    {this.renderUnsupportedBrowser()}
                                    <Grid container justify="center">
                                        {displayForm && (
                                            <Paper
                                                style={{
                                                    width: '400px',
                                                    marginBottom: '30px'
                                                }}
                                            >
                                                {this.renderForm(
                                                    candidatesSorted
                                                )}
                                            </Paper>
                                        )}
                                    </Grid>
                                </div>
                            )}
                        </>
                    );
                }}
            />
        );
    }
}

Vote.defaultProps = {
    actions: null,
    votes: null,
    voted: null
};

Vote.propTypes = {
    actions: PropTypes.any,
    votes: PropTypes.any,
    voted: PropTypes.any
};

const mapStateToProps = ({ actionReducer }) => {
    return {
        votes: actionReducer.votes,
        login: actionReducer.login,
        voted: actionReducer.voted
    };
};

export default (isServerSideRendering()
    ? Vote
    : connect(
          mapStateToProps,
          mapDispatchToProps
      )(Vote));
