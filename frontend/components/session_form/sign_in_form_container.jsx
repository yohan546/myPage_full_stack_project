import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {sign_in} from '../../actions/session_actions'

import SessionForm from './session_form'

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
        navLink: <Link to="/signup">Sign Up Here!</Link>
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sessionForm: (user) => dispatch(sign_in(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
