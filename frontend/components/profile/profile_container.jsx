import React from 'react';
import {connect} from 'react-redux';
import {sign_out} from '../../actions/session_actions'
import {fetchUser} from '../../actions/profile_actions'
import Profile from './profile'

const mapStateToProps = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (user) => dispatch(fetchUser(user)),
        sign_out: () => dispatch(sign_out())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)