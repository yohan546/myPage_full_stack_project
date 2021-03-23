import { RECEIVE_ALL_USERS, RECEIVE_CURRENT_USER } from "../actions/session_actions"

const defaultState = {};

const usersReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
            return newState;
        case RECEIVE_ALL_USERS:
            newState = Object.assign({}, oldState, action.users)
            return newState;
        default:
            return oldState;
    };
};

export default usersReducer;
