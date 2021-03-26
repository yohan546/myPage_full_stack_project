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
        <div> <h3>Friend List </h3>
                <ul className='friends-list'>
                    {
                    this.props.friends.map(friend => (
                        <li key={friend.id}>
                        <Link to={`/users/${friend.id}`}>{friend.name}</Link>
                        </li>
                    ))
                    }
                </ul>
        </div>
        )
    }

    render () {

        const {friendlist, currentUser, users} = this.props

        return (

            <div>
                <h3>Newsfeed</h3>

                <button className='btn-signout'onClick={() => this.props.sign_out()}>Sign Out</button>

                
                <Link to={`/users/${currentUser.id}`}>Profile Page</Link>
      
                {this.renderFriendList()}
                

            </div>
        )
    }
}

export default Newsfeed;