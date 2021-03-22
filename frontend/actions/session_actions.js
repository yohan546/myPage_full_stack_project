import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS'
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS,
    })
}

export const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser,
    })
}

export const receiveAllUsers = (users) => {
    return ({
        type: RECEIVE_ALL_USERS,
        users,
    })
}

export const signoutCurrentUser = () => {
    return ({
        type: SIGNOUT_CURRENT_USER,
    })
}

export const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors,
    })
}

export const sign_up = (user) => dispatch => {
    return SessionApiUtil.sign_up(user).then(
        user => {
            debugger 
            return dispatch(receiveCurrentUser(user))
        }, 
        errors => {
            debugger 
            return dispatch(receiveErrors(errors.responseJSON))
        }
    ) 
}

export const sign_out = () => dispatch => {
    return SessionApiUtil.sign_out().then(
        user => dispatch(signoutCurrentUser())
    )
}

export const sign_in = (user) => dispatch => {
    return SessionApiUtil.sign_in(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const fetchUsers = () => dispatch => {
    return SessionApiUtil.fetchUsers().then(
        users => dispatch(receiveAllUsers(users))
    )
}


