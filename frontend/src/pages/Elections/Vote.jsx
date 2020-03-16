import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Title } from '../../helpers/components';
import { mapDispatchToProps } from '../../helpers/actions';
import { isServerSideRendering } from '../../util';

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getTestAPI();
    }

    getTestAPI() {
        const { actions } = this.props;
        actions.getUsers().then(() => {
            const { users } = this.props;
            console.log('API is working: ', users);
        });
    }

    getCandidates() {
        return [
            { Chair: ['Michal Ridner'] },
            { 'Vice Chair': ['Madison Smrtka'] },
            { Treasurer: ['Madison Smrtka'] },
            { 'VP Social': ['Madison Smrtka'] },
            { 'VP Internal': ['Madison Smrtka'] },
            { Chair: ['Madison Smrtka'] },
            { Chair: ['Madison Smrtka'] }
        ];
    }

    renderForm() {}

    render() {
        return (
            <>
                <>
                    <Title variant="h5" gutterBottom className="title">
                        Vote
                    </Title>
                    <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <FormControl component="fieldset">
                            <FormLabel
                                style={{
                                    fontSize: '30px',
                                    color: '#000000'
                                }}
                            >
                                Chair
                            </FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender2"
                                // value={value}
                                // onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio color="primary" />}
                                    label="Female"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio color="primary" />}
                                    label="Male"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                            <FormHelperText>
                                labelPlacement start
                            </FormHelperText>
                        </FormControl>
                    </div>
                </>
            </>
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
