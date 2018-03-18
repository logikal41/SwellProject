import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const SELECT_GROUP = 'SELECT_GROUP';

export const selectGroup = (group) => {
    return dispatch => {
      dispatch({ type: SELECT_GROUP, payload: group });
    }
  }

// export const getGroup = () => {
//   axios.get('/api/groups/1') // group 1 is hardcoded since we are only doing this for the san rafael swell at this time
//   .then( res => {
//     dispatch(setHeaders(res.headers));
//   })
//   .catch( err => {
//     dispatch(setFlash('Failed to get the group', 'red'));
//   })
// }