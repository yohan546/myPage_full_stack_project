import React from 'react';
import {connect} from 'react-redux';
import {sign_out} from '../../actions/session_actions'
import {fetchUser} from '../../actions/newsfeed_actions'
import Newsfeed from './newsfeed'

const mapStateToProps = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id],
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger 
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        
        sign_out: () => dispatch(sign_out())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)