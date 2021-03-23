import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (

            <div>
                <h3>Profile Page</h3>

                <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

                
                <Link to={'/newsfeed'}>Newsfeed</Link>
            </div>
        )
    }
}

export default Profile;