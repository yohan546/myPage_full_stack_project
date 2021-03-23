import React from 'react';
import { Link } from 'react-router-dom';

const Newsfeed = ({currentUser, sign_out}) => {


    return (
        <div>
            <h3>NewsFeed</h3>
            <div>
            <button className='btn-signout'onClick={sign_out}>Sign Out</button>

            <Link to={`/users/${currentUser.id}`}>Profile Page</Link>
            </div>
        </div>
    )

    
}

export default Newsfeed;