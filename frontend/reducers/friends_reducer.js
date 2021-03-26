import {
    RECEIVE_FRIENDS, RECEIVE_FRIEND
} from '../actions/friends_actions'



const friendsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState;

    switch(action.type) {
        case RECEIVE_FRIENDS:
            newState = Object.assign({}, oldState, action.friends)
            return newState;
        case RECEIVE_FRIEND: 
            newState = Object.assign({}, oldState, {[action.friends.id]: action.friends})
            return newState;
        default: 
            return oldState;
        
    }
}

export default friendsReducer;