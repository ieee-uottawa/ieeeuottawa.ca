const defaultState = {
    users: 'heree',
    votes: 'votes',
    voted: null,
    sessionExpired: false,
    electionResults: null,
};

export default function actionReducer(state = defaultState, action) {
    const newState = { ...state };
    switch (action.type) {
        case 'getUsersSuccess': {
            newState.users = action.payload;
            return newState;
        }
        case 'getVotesSuccess': {
            newState.votes = action.payload;
            return newState;
        }
        case 'getVotedSuccess': {
            newState.voted = action.payload.result;
            return newState;
        }
        case 'getElectionResultsSuccess': {
            newState.electionResults = action.payload;
            return newState;
        }
        case 'voteSuccess': {
            newState.voted = true;
            return newState;
        }
        case 'loginInvalid': {
            newState.sessionExpired = action.payload.sessionExpired;
            return newState;
        }
        default:
            return newState;
    }
}
