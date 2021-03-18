import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    


    handleChange(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.sessionForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {
                this.props.errors.map((error, status) => (
                    <li key={`error-${status}`}>
                        {error}
                    </li>
                ))
                }
            </ul>
        )
    }

    render() {

        return (
            <div className = 'login-form-container'>
                <form onSubmit={this.handleSubmit} className='signin-form-box'>
                    <h1>Welcome to MyPage! </h1>                    
                    {this.renderErrors()}
                    <div className='login-form'>
                        <label>
                        Email
                        <input type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        className='email-input'
                        />
                        </label>
                        <label>
                            Password
                            <input type="text"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            className='password-input'
                            />
                        </label>
                        <input className='session-submit' type="submit" value={this.props.formType}/>
                    </div>
                    {
                        this.props.formType === 'Sign Up' ? 
                        
                        this.props.params.map((param, i) => (
                            <li key={param}>
                                {param}</li>
                        )) : null
                    }
                    {
                    this.props.formType === 'Sign In' ?
                        <h3>New User? {this.props.navLink}</h3> : <h3>Already have An Account? {this.props.navLink}</h3> 
                    }                    
                </form>
            </div>
        )
    }
}


export default SessionForm;
