import React from 'react';
import {connect} from 'react-redux';
import {sign_out} from '../../actions/session_actions'
import {fetchFriends} from '../../actions/friends_actions'
import Profile from './profile'
import {fetchPosts} from '../../actions/posts_actions'

const mapStateToProps = ({session, entities: {users, friends, posts}}) => {
    return {
        currentUser: users[session.id],
        friends: Object.values(friends),
        posts: Object.values(posts)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sign_out: () => dispatch(sign_out()),
        fetchFriends: (userId) => dispatch(fetchFriends(userId)),
        fetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)