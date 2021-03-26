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
        <div> <h4>Friend List</h4>
                <ul >
                    {
                    this.props.friends.map(friend => (
                        <li key={friend.id}>
                        <Link className='ul-friends' to={`/users/${friend.id}`}> {friend.name} </Link>
                        </li>
                    ))
                    }
                </ul>
        </div>
        )
    }

    render () {
        return (

            <div classname='profile-container'>
                <div className='nav-bar'>
                <h3>Profile Page</h3>
                <Link className = 'link-newsfeed' to={'/newsfeed'}>Newsfeed</Link>
                <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

                
                
                </div>

                <div className='friends-list'>{this.renderFriendList()}</div>
                
             
            </div>
        )
    }
}

export default Profile;