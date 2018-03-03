import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getAreas = () => {
  return dispatch => {
    axios.get('/api/areas')
      .then( res => {
        dispatch({ type: 'GET_AREAS', areas: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get areas', 'red'));
      })
   }
  };