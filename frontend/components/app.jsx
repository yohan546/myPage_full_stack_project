import React from 'react';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SignInContainer from './session_form/sign_in_form_container';
import SignUpContainer from './session_form/sign_up_form_container';

const App = () => (
    <div>
        <h1>MyPage</h1>
            
            <Switch>
                <Route exact path ='/' component={SignInContainer}/>
                <Route exact path ='/signup' component={SignUpContainer}/>
            </Switch>
        
    </div>
)

export default App;