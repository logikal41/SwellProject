import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const GET_ACTIVE_LIST = 'GET_ACTIVE_LIST';
export const GET_ACTIVE_SELECTION = 'GET_ACTIVE_SELECTION';

export const getGroup = () => {
    return dispatch => {
      axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
      .then( res => {
        dispatch({ type: GET_ACTIVE_LIST, payload: res.data.areas })
        dispatch({ type: GET_ACTIVE_SELECTION, payload: res.data.group })
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get group information', 'red'));
      })
    }
  }