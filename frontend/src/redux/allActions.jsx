import axios from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const BACKEND_URL = process.env.GATSBY_BACKEND_URL_PROD;

export function getUsers() {
    return async dispatch => {
        try {
            const response = await axios.get(`${BACKEND_URL}/users`);
            dispatch({ type: 'getUsersSuccess', payload: response.data });
        } catch (error) {
            dispatch({ type: 'getUsersFailed', payload: error });
            throw error;
        }
    };
}

export function getVotes() {
    return async dispatch => {
        try {
            const response = await axios.get(`${BACKEND_URL}/vote`);
            dispatch({
                type: 'getVotesSuccess',
                payload: response.data.result
            });
        } catch (error) {
            dispatch({ type: 'getVotesFailed', payload: error });
            throw error;
        }
    };
}

export function login(googleToken) {
    return async dispatch => {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/users/login`,
                undefined,
                {
                    headers: { Authorization: googleToken }
                }
            );
            localStorage.setItem('token', response.data);
            dispatch({ type: 'loginSuccess' });
        } catch (error) {
            if (error.response) {
                const { status } = error.response;
                if (status === 401) {
                    dispatch({
                        type: 'loginFailed',
                        payload: { invalidLogin: true }
                    });
                    return;
                }
                if (status === 409) {
                    dispatch({ type: 'voteSuccess' });
                    return;
                }
            }
            dispatch({ type: 'loginFailed', payload: { error } });
            throw error;
        }
    };
}

export function vote(form, email) {
    const data = { form, email };
    return async dispatch => {
        try {
            const response = await axios.post(`${BACKEND_URL}/vote`, data, {
                headers: { Authorization: localStorage.getItem('token') }
            });
            dispatch({ type: 'voteSuccess', payload: response });
        } catch (error) {
            if (error.response) {
                const { status } = error.response;
                if (status === 401) {
                    dispatch({
                        type: 'loginInvalid',
                        payload: { sessionExpired: true }
                    });
                    return;
                }
                if (status === 409) {
                    dispatch({ type: 'voteSuccess' });
                    return;
                }
            }
            dispatch({ type: 'voteFailed', payload: error });
            throw error;
        }
    };
}
