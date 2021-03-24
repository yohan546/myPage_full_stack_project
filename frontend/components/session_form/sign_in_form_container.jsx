import React from 'react';
import {connect} from 'react-redux';
import {openModal  } from '../../actions/modal_actions';
import {sign_in, fetchUsers} from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign In',
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(sign_in(user)),
        otherForm: (
            <button className='btn-create-account' onClick= {(e) => {
                e.preventDefault();
                dispatch(openModal('Sign Up'))               
                }} >
            Create New Account
            </button>
        ),
        fetchUsers: (users) => dispatch(fetchUsers(users))
    };
    
};

export default connect( mapStateToProps, mapDispatchToProps)(SessionForm)

