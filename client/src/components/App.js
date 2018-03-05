import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Guide from './Guide/Guide';
import Bio from './Bio';
import MemberTab from './Members/MemberTab';
import InviteConfirmation from './InviteConfirmation';
import UserWelcome from './UserWelcome';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/userwelcome' component={UserWelcome} />
            <Route exact path='/invitation/accept' component={InviteConfirmation} />
            <Route exact path='/bio' component={Bio} />
            <ProtectedRoute exact path='/guide' component={Guide} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/members' component={MemberTab} authLevel={["admin"]} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
