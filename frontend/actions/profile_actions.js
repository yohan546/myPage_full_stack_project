
import * as UserApiUtil from '../util/profile_api_util'
import * as FriendsApiUtil from '../util/friends_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser,
    })
}



export const fetchUser = (userId) => dispatch =>  {
    return UserApiUtil.fetchUser(userId).then(
        (user) => dispatch(receiveCurrentUser(user))
    )
}

