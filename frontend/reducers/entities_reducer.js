import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import friendsReducer from './friends_reducer';
import postsReducer from './posts_reducer'
const entitiesReducer = (combineReducers) ({
    users: usersReducer,
    friends: friendsReducer, 
    posts: postsReducer
})

export default entitiesReducer;