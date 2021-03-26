import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        
        this.renderFriendList = this.renderFriendList.bind(this)
    }

    
    componentWillUnmount () {
        this.props.fetchFriends(this.props.currentUser.id);
    }

  

    renderFriendList () {
        return (
        <div> <h3>Friend List</h3>
                <ul className='friends-list'>
                    {
                    this.props.friends.map(friend => (
                        <li key={friend.id}>
                        <Link to={`/users/${friend.id}`}> {friend.name} </Link>
                        </li>
                    ))
                    }
                </ul>
        </div>
        )
    }

    render () {
        return (

            <div>
                <h3>Profile Page</h3>
                
                <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

                
                <Link to={'/newsfeed'}>Newsfeed</Link>

                {this.renderFriendList()}
            </div>
        )
    }
}

export default Profile;