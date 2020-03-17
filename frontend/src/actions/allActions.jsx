import axios from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const BACKEND_URL = process.env.GATSBY_BACKEND_URL_PROD;

export function getUsers() {
    return dispatch => {
        return axios
            .get(`${BACKEND_URL}/users`)
            .then(response => {
                dispatch({ type: 'getUsersSuccess', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'getUsersFailed', payload: error });
                throw error;
            });
    };
}

export function getVotes() {
    return dispatch => {
        return axios
            .get(`${BACKEND_URL}/vote`)
            .then(response => {
                dispatch({
                    type: 'getVotesSuccess',
                    payload: response.data.result
                });
            })
            .catch(error => {
                dispatch({ type: 'getVotesFailed', payload: error });
                throw error;
            });
    };
}

export function getVoted(email) {
    return dispatch => {
        return axios
            .get(`${BACKEND_URL}/vote/voted?email=${email}`)
            .then(response => {
                dispatch({ type: 'getVotedSuccess', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'getVotedFailed', payload: error });
                throw error;
            });
    };
}

export function vote(form, email) {
    const data = { form, email };
    return dispatch => {
        return axios
            .post(`${BACKEND_URL}/vote`, data)
            .then(response => {
                dispatch({ type: 'voteSuccess', payload: response });
            })
            .catch(error => {
                dispatch({ type: 'voteFailed', payload: error });
                throw error;
            });
    };
}
