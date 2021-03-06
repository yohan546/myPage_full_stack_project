import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    };

    componentDidMount() {
        {this.props.formType === 'Sign In' ? 
        this.props.fetchUsers() : null
        }
    }
    
    handleChange(field) {
        return (e) => this.setState({[field]: e.target.value})
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleDemoUser(e){
        e.preventDefault();
        const demoUser = Object.assign({}, {email: 'jonsnow@gameofthrones.com', password: 'password'} )
        this.props.processForm(demoUser)
    }

    renderErrors() {
        return (
            <ul>
                {     
                this.props.errors.map((error, status) => (                   
                    <li className="errors" key={`error-${status}`}>         
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
                <button className='btn-demo' onClick={this.handleDemoUser}>Demo User</button>
                

                <form onSubmit={this.handleSubmit} className='signin-form-box'>


                    {
                        this.props.formType === 'Sign Up' ?
                        <h2>Sign up!</h2> : null
                    }

                    {
                        this.props.formType === 'Sign Up' ?                       
                        <button onClick={this.props.closeModal} className='btn-close'>X</button> : null
                    }
                                        
                    {this.renderErrors()} 
                    
                    <div className='login-form'>
                        <label>
                        
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            className='email-input'
                            placeholder='Email'
                        />
                        </label>

                        <br/>
                        <label>
                            <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            className='password-input'
                            placeholder='Password'
                            />
                        </label>

                        <br/>
                        { 
                            this.props.formType === 'Sign Up' ? 
                            <label>
                            <input type="text"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            className='name-input' 
                            placeholder='Name'/> </label>: null 
                            
                        }

                        <br/>
                        {
                        this.props.formType === 'Sign Up' ? 
                        this.props.params.map((param, i) => (
                            <li key={param}>
                                {param}
                            </li>)) : null
                        }

                        <br/>
                        <label>
                            <input className='session-submit' type="submit" value={this.props.formType}/>
                        </label>

                        <br/>
                        {this.props.otherForm}
                        
                    </div>
                </form>
            </div>
        )
    }
}


export default SessionForm;
