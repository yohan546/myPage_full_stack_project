import React from 'react';
import { Link } from 'react-router-dom';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentUser

    }



    render () {
        
        return (
            <div>
            <h3>NewsFeed</h3>
            
            <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

            <Link to={`/users/${this.props.currentUser.id}`}>Profile Page</Link>

            </div>
        )

    }
}

export default Newsfeed;