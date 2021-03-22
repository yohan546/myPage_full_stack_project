import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';
import {
    RECEIVE_CURRENT_USER,
    RECEIVE_ERRORS,
    CLEAR_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
        case CLOSE_MODAL:
            return [];
        case CLEAR_ERRORS:
            return [];
        case OPEN_MODAL:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;