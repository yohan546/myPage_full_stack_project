import React from 'react';
import {connect} from 'react-redux';
import {sign_out, fetchUser} from '../../actions/session_actions'
import {fetchFriends, fetchFriend} from '../../actions/friends_actions'
import Newsfeed from './newsfeed'
import {fetchPosts} from '../../actions/posts_actions'
const mapStateToProps = ({session, entities: {users, friends, posts}}) => {
   const currentUser = users[session.id]
    return {
        currentUser: users[session.id],
        friends: Object.values(friends),
        posts: Object.values(posts)
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger 
    return {
        sign_out: () => dispatch(sign_out()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchFriends: (userId) => dispatch(fetchFriends(userId)),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)

