const defaultState = {
    users: 'heree',
    votes: 'votes',
    voted: null
};

export default function actionReducer(state = defaultState, action) {
    const newState = { ...state };
    switch (action.type) {
        case 'getUsersSuccess': {
            newState.users = action.payload;
            return newState;
        }
        case 'getVotesSuccess': {
            newState.votes = action.payload.result;
            return newState;
        }
        case 'getVotedSuccess': {
            newState.voted = action.payload.result;
            return newState;
        }
        default:
            return newState;
    }
}
