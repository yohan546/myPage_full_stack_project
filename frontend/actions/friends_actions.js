import * as FriendsApiUtil from '../util/friends_api_util'

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS'
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND'

export const receiveFriends = (friends) => {
    return ({
        type: RECEIVE_FRIENDS,
        friends,
    })
}

export const receiveFriend = (friend) => {
    return ({
        type: RECEIVE_FRIENDS,
        friend, 
    })
}

export const fetchFriends = (userId) => dispatch => {
    return FriendsApiUtil.fetchFriends(userId).then(
        (friends) => {
            debugger
            dispatch(receiveFriends(friends))
        }
    )
}

export const fetchFriend = (userId) => dispatch => {
    return FriendsApiUtil.fetchFriend(userId).then(
        (friend) => dispatch(receiveFriend(friend))
    )
}