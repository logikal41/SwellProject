import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const GET_MEMBERS = 'GET_MEMBERS';

export const getMembers = () => {
  return(dispatch) => {
    axios.get(`/api/users/`)
      .then( (res) => {
        dispatch({ type: GET_MEMBERS, members: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get members', 'red'));
      });
  }
}