import React from 'react';
import {connect} from 'react-redux';
import {sign_up, clearErrors} from '../../actions/session_actions';
import { closeModal,} from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ( {errors} ) => {
    return {        
        errors: errors.session,
        formType: 'Sign Up',      
        params: ['Must be a valid email address', 'Password must at least 6 characters', 'Password must be no more than 30 characters']
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(sign_up(user)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)