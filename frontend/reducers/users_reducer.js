import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const defaultState = {};

const usersReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, {[action.currentUser.id]: action.currentUser})
            return newstate;
        default:
            return oldState;
    };
};

export default usersReducer;
