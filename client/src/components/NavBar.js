import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  

    dashBoard = () => {
      const { user } = this.props;
      switch(user.role){
        case 'admin': {
          return(
            [
              <Link key={1} to={'/members'}>
                <Menu.Item name='Members' />
              </Link>,
              <Link key={2} to={`/guide`}>
                <Menu.Item name='Guide' />
              </Link> 
            ]
          );
        }
        case 'user': {
          return(
            <Link key={2} to={`/guide`}>
              <Menu.Item name='Guide' />
             </Link> 
          );
        }
        default: {
          return null;
        }
      }
    }


    rightNavs = () => {
      const { user, dispatch, history } = this.props;

      if(user.id) {
        return(
          <Menu.Menu position='right'>
            { this.dashBoard() }
            <Link to='/bio'>
              <Menu.Item name='bio' />
            </Link>
            <Menu.Item
              name='Logout'
              onClick={() => dispatch(handleLogout(history))}
            />
          </Menu.Menu>
        );
      } else {
        return(
          <Menu.Menu position='right'>
            <Link to='/register'>
              <Menu.Item name='Register' />
            </Link>
            <Link to='/login'>
              <Menu.Item name='Login' />
            </Link>
          </Menu.Menu>
        );
      }
    }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
