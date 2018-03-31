import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import GroupGuide from './Guide/GroupGuide';
import AreaGuide from './Guide/AreaGuide';
import WallGuide from './Guide/WallGuide';
import Bio from './Bio';
import NewAreaForm from './Guide/Forms/NewAreaForm';
import UpdateAreaForm from './Guide/Forms/UpdateAreaForm';
import NewWallForm from './Guide/Forms/NewWallForm';
import UpdateWallForm from './Guide/Forms/UpdateWallForm';
import NewRouteForm from './Guide/Forms/NewRouteForm';
import UpdateRouteForm from './Guide/Forms/UpdateRouteForm';
import MemberTab from './Members/MemberTab';
import InviteConfirmation from './InviteConfirmation';
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
            <Route exact path='/invitation/accept' component={InviteConfirmation} />
            <Route exact path='/bio' component={Bio} />
            <ProtectedRoute exact path='/guide' component={GroupGuide} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/area/new' component={NewAreaForm} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/area/update/:id' component={UpdateAreaForm} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/area/:id' component={AreaGuide} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/wall/new' component={NewWallForm} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/wall/update/:id' component={UpdateWallForm} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/wall/:id' component={WallGuide} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/route/new' component={NewRouteForm} authLevel={["admin", "user"]} />
            <ProtectedRoute exact path='/route/update/:id' component={UpdateRouteForm} authLevel={["admin", "user"]} />
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
