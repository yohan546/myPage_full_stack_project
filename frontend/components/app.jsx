import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SignInContainer from './session_form/sign_in_form_container';

import Modal from './modal/modal'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>MyPage</h1>
            <Link to="/" />
        </header>
            <Modal />    
            <Switch>
                <AuthRoute exact path ='/' component={SignInContainer}/> 
            </Switch>
    </div>
)

export default App;