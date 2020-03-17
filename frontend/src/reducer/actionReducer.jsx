const defaultState = {
    users: 'heree',
    votes: 'votes'
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
        default:
            return newState;
    }
}
