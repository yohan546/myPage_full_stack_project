import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SignInContainer from './session_form/sign_in_form_container';
import NewsfeedContainer from './newsfeed/newsfeed_container';
import ProfileContainer from './profile/profile_container';
import Modal from './modal/modal'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>MyPage</h1>
        </header>
            <Modal />    
            <Switch>
                <ProtectedRoute exact path ='/newsfeed' component={NewsfeedContainer}/>
                <ProtectedRoute exact path ='/users/:userId' component={ProfileContainer}/>
                <AuthRoute exact path ='/' component={SignInContainer}/> 
            </Switch>
    </div>
)

export default App;