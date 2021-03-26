import {
    RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
})

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { id: action.currentUser.id };
            return newState;
        case SIGNOUT_CURRENT_USER: 
            return _nullUser;
        default:
            return oldState;
    }
}

export default sessionReducer;