import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

    render() {
        return (
            <>
                <>
                    <Title variant="h5" gutterBottom className="title">
                        Vote
                    </Title>
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
