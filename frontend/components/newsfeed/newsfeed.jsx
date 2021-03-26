import React from 'react';
import {Link} from 'react-router-dom';

class Newsfeed extends React.Component {
    constructor(props) {
        super(props);

        this.renderFriendList = this.renderFriendList.bind(this)
        this.renderPostsList = this.renderPostsList.bind(this)
    }

    componentDidMount () {
        this.props.fetchFriends(this.props.currentUser.id);
        this.props.fetchPosts();
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

    renderPostsList () {
        return (
        <div> <h4> Posts </h4>
                <ul className='ul-posts'>
                    {
                    this.props.posts.map(post => (
                    
                        <li key={post.id}>
                        {this.props.currentUser.name}
                        <br/>
                        <br/>
                        {post.body}
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
                <div className='posts-list' >{this.renderPostsList()} </div>

               
                
            </div>
        )
    }
}


export default Newsfeed;