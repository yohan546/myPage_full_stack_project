import React from 'react';
import {Link} from 'react-router-dom';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);

        this.renderFriendList = this.renderFriendList.bind(this)
    }

    componentDidMount () {
        this.props.fetchFriends(this.props.currentUser.id);
    }

    renderFriendList () {
        return (
        <div> <h4>Friend List </h4>
                <ul className='ul-friends'>
                    {
                    this.props.friends.map(friend => (
                        <li key={friend.id}>
                        <Link className='ul-friends' to={`/users/${friend.id}`}>{friend.name}</Link>
                        </li>
                    ))
                    }
                </ul>
        </div>
        )
    }

    render () {
        const {currentUser} = this.props
        return (

            <div className='newsfeed-container'>
                <div className='nav-bar'>
                <h3>Newsfeed</h3>
                <Link className='link-profile'to={`/users/${currentUser.id}`}>Profile</Link>
                <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

                
                
                </div>

                <div className='friends-list' >{this.renderFriendList()} </div>
                
               
                
            </div>
        )
    }
}


export default Newsfeed;