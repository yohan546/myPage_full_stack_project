import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {sign_up} from '../../actions/session_actions'

import SessionForm from './session_form'

const mapStateToProps = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to='/'>Sign In</Link>,
        params: ['Must be a valid email address', 'Password must at least 6 characters', 'Password must be no more than 30 characters']
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sessionForm: (user) => dispatch(sign_up(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)