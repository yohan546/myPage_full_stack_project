import {
    RECEIVE_POSTS
} from '../actions/posts_actions'



const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState;

    switch(action.type) {
        case RECEIVE_POSTS:
            newState = Object.assign({}, oldState, action.posts)
            return newState;
        default: 
            return oldState;
        
    }
}

export default postsReducer;