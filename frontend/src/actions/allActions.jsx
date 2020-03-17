import axios from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const BACKEND_URL = process.env.BACKEND_URL_PROD;

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
                dispatch({ type: 'getVotesSuccess', payload: response.data });
            })
            .catch(error => {
                dispatch({ type: 'getVotesFailed', payload: error });
                throw error;
            });
    };
}
