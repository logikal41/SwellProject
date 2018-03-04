import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const ADD_MEMBER = 'ADD_MEMBER';

export const sendInvitation = (user) => {
  return(dispatch) => {
    axios.post('/api/invitation/send', { user } )
      .then( res => {
        debugger
        const { data, headers } = res;
        dispatch({ type: ADD_MEMBER, member: data, headers });
      })
      .catch( err => {
        const { name } = user;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(`Failed to invite ${name}`, 'red'));
      })
  }
}

export const acceptInvitation = (invite, history) => {
  return(dispatch) => {
    axios.post('/api/invitation/accept', { invite })
      .then( res => {
        dispatch({ type: res.headers });
        dispatch(setFlash('Welcome to Yield, please log in', 'info'))
        history.push('/login');
      })
      .catch( err => {
        const message = err.response.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      });
  }
}