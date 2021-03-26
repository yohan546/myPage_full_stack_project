import React from 'react';
import {connect} from 'react-redux';
import {sign_out} from '../../actions/session_actions'
import {fetchFriends} from '../../actions/friends_actions'
import Profile from './profile'

const mapStateToProps = ({session, entities: {users, friends}}) => {
    return {
        currentUser: users[session.id],
        friends: Object.values(friends)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sign_out: () => dispatch(sign_out()),
        fetchFriends: (userId) => dispatch(fetchFriends(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)