import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SignInContainer from './session_form/sign_in_form_container';
import SignUpContainer from './session_form/sign_up_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
    <header>
        <h1>MyPage</h1>
    </header>
    
        
            
            <Switch>
                <AuthRoute exact path ='/' component={SignInContainer}/>
                <AuthRoute exact path ='/signup' component={SignUpContainer}/>
            </Switch>
        
    </div>
)

export default App;